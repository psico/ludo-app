import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './i18n';
import App from './App';
// import * as serviceWorker from './serviceWorker';
// import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


const {REACT_APP_API_URL} = process.env;
//Apollo requeriments

const cache = new InMemoryCache();
const GITHUB_BASE_URL = `${REACT_APP_API_URL}/graphql`

// const httpLink = new HttpLink({
//     uri: GITHUB_BASE_URL,
//     headers: {
//         authorization: `Bearer ${
//             process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
//         }`,
//     },
// });
const httpLink = new HttpLink({
    uri: GITHUB_BASE_URL,
});

const client = new ApolloClient({
    link: httpLink,
    cache,
});


ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// registerServiceWorker();
