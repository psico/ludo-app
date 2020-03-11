FROM nginx:alpine AS builder
WORKDIR /app
COPY . .
RUN apk add yarn
RUN yarn run build

FROM nginx:alpine
RUN apk add yarn
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]
