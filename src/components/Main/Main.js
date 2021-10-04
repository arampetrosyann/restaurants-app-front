import React from "react";
import classes from "./Main.module.css";

const Main = (props) => {
    const { children } = props;

    return <div className={classes.root}>{children}</div>;
};

export default Main;
