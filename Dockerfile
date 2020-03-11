#FROM nginx
#COPY index.html /usr/share/nginx/html

#COPY . /usr/share/nginx/html

#https://dev.to/peterj/run-a-react-app-in-a-docker-container-kjn

FROM nginx:alpine AS builder
WORKDIR /app
COPY . .
RUN yarn run build

FROM nginx:alpine
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]
