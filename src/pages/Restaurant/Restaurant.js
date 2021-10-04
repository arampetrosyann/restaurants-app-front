import React from "react";
import classes from "./Restaurant.module.css";
import useRestaurant from "Talons/Restaurant";
import { RestaurantContent } from "Components";

const Restaurant = () => {
    const { restaurant } = useRestaurant();

    return (
        <div className={classes.root}>
            <RestaurantContent data={restaurant} />
        </div>
    );
};

export default Restaurant;
