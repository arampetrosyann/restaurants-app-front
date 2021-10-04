import React from "react";
import Routes from "./routes";
import "./styles/App.css";
import { Header, Main, Footer } from "Components";

const App = () => {
    return (
        <div className="app">
            <Header />
            <Main>
                <Routes />
            </Main>
            <Footer />
        </div>
    );
};

export default App;
