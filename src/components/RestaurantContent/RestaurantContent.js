import React from "react";
import StarRatings from "react-star-ratings";
import defaultClasses from "./RestaurantContent.module.css";
import mergeClasses from "Helpers/mergeClasses";

const RestaurantContent = (props) => {
    const { data: restaurant = {} } = props;
    const classes = mergeClasses(defaultClasses, props.classes);

    if (!restaurant) {
        return null;
    }

    return (
        <div className={classes.root}>
            <h1>{restaurant?.name || ""}</h1>
            <div>{restaurant?.description || ""}</div>
            <div className={classes.ratingContainer}>
                <span className={classes.rating}>{`${
                    restaurant?.averageRating || 0
                }`}</span>
                <StarRatings
                    rating={restaurant?.averageRating || 0}
                    numberOfStars={5}
                    starRatedColor="#FFB800"
                    name="rating"
                    starSpacing="0"
                    isSelectable={false}
                    starDimension={"16px"}
                />
            </div>
            <address>{restaurant?.location?.address || ""}</address>
            <ul>
                {restaurant?.phoneNumbers?.map((phone, ind) => {
                    return <li key={ind}>{phone}</li>;
                })}
            </ul>
            <>
                {restaurant?.timings?.isContinual ? (
                    <div className={classes.timings}>{"Continual"}</div>
                ) : restaurant?.timings?.from && restaurant?.timings?.to ? (
                    <div
                        className={classes.timings}
                    >{`${restaurant?.timings?.from} - ${restaurant?.timings?.to}`}</div>
                ) : (
                    ""
                )}
            </>
        </div>
    );
};

export default RestaurantContent;
