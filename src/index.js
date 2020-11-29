import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './i18n';
import App from './App';
// import * as serviceWorker from './serviceWorker';

// 1
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// 2
const { REACT_APP_API_URL } = process.env;
const httpLink = createHttpLink({
    uri: `${REACT_APP_API_URL}/graphql`
})

// 3
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

// ReactDOM.render(<App />, document.getElementById('root'));
// 4
ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
