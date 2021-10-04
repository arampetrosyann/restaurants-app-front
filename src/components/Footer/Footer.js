import React from "react";
import { GitHub } from "react-feather";
import defaultClasses from "./Footer.module.css";
import mergeClasses from "Helpers/mergeClasses";

const Footer = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes);

    return (
        <footer className={classes.root}>
            <small className={classes.copyright}>
                &copy; {`${new Date().getFullYear()} | All Rights Reserved`}
            </small>
            <div className={classes.container}>
                <span className={classes.createdBy}>{"Created by"}</span>

                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/arampetrosyann"
                    color="#000"
                >
                    <GitHub size={20} color="#fff" style={{ marginTop: 2 }} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
