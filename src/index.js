import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import {
    ApolloClient,
    ApolloProvider,
    HttpLink,
    InMemoryCache,
} from "@apollo/client";
import "./styles/index.css";
import App from "./App";

const httpLink = new HttpLink({
    uri: "https://restaurants-app-serv.herokuapp.com/graphql",
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <Router>
                <App />
            </Router>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
