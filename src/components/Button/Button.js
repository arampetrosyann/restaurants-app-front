import React from "react";
import defaultClasses from "./Button.module.css";
import mergeClasses from "Helpers/mergeClasses";

const Button = (props) => {
    const {
        text,
        priority = "primary",
        iconOnly,
        onClick,
        disabled,
        type,
        children,
    } = props;
    const classes = mergeClasses(defaultClasses, props.classes);

    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={`${classes.button} ${classes[priority]} ${
                iconOnly ? classes.iconOnly : ""
            }`}
        >
            {children}
            {text}
        </button>
    );
};

export default Button;
