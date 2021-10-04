import React from "react";
import classes from "./Restaurant.module.css";
import useRestaurant from "Talons/Restaurant";
import { RestaurantContent, ReviewForm } from "Components";

const Restaurant = () => {
    const { restaurant } = useRestaurant();

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <RestaurantContent
                    classes={{ root: classes.content }}
                    data={restaurant}
                />
                <ReviewForm data={restaurant} />
            </div>
        </div>
    );
};

export default Restaurant;
