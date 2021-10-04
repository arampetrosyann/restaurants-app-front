import React from "react";
import defaultClasses from "./TextInput.module.css";
import mergeClasses from "Helpers/mergeClasses";

const TextInput = (props) => {
    const { label, id, name, autoComplete, placeholder, error, ...rest } = props;
    const classes = mergeClasses(defaultClasses, props.classes);

    return (
        <div className={classes.root}>
            {label ? <div className={classes.label}></div> : null}
            <input
                id={id}
                name={name}
                autoComplete={autoComplete}
                placeholder={placeholder}
                className={classes.input}
                {...rest}
            />
            {error ? <p className={classes.error}>{error}</p> : null}
        </div>
    );
};

export default TextInput;
