import React from "react";
import { Link } from "react-router-dom";
import { Map } from "react-feather";
import defaultClasses from "./Header.module.css";
import mergeClasses from "Helpers/mergeClasses";

const Header = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes);

    return (
        <header className={classes.root}>
            <span>
                <Link to="/">
                    <span className={classes.titleContainer}>
                        <Map size={22} color="#0066ff" />
                        <h2 className={classes.title}>{"Restaurants"}</h2>
                    </span>
                </Link>
            </span>
        </header>
    );
};

export default Header;
