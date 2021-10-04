import React from "react";
import StarRatings from "react-star-ratings";
import { MapPin } from "react-feather";
import defaultClasses from "./RestaurantList.module.css";
import mergeClasses from "Helpers/mergeClasses";
import useRestaurantList from "Talons/RestaurantList";
import { Button } from "Components";

const RestaurantList = (props) => {
    const { data, isLoading, handleOnClick, handleBtnClick } = useRestaurantList();
    const classes = mergeClasses(defaultClasses, props.classes);

    if (isLoading) {
        return null;
    }

    return (
        <div className={classes.root}>
            {data?.items?.map((restaurant) => {
                return (
                    <div
                        className={classes.item}
                        key={restaurant.id}
                        onClick={() => handleOnClick(restaurant)}
                    >
                        <span className={classes.name}>{restaurant.name}</span>
                        <div className={classes.ratingContainer}>
                            <span className={classes.rating}>{`${
                                restaurant.averageRating || 0
                            }`}</span>
                            <StarRatings
                                rating={restaurant.averageRating || 0}
                                numberOfStars={5}
                                starRatedColor="#FFB800"
                                name="rating"
                                starSpacing="0"
                                isSelectable={false}
                                starDimension={"16px"}
                            />
                        </div>
                        <div className={classes.address}>
                            <MapPin
                                size="14px"
                                color="#1a9148"
                                className={classes.pinIcon}
                            />
                            {restaurant.location?.address || "-"}
                        </div>
                        <>
                            {restaurant.timings?.isContinual ? (
                                <div className={classes.timings}>{"Continual"}</div>
                            ) : restaurant.timings?.from &&
                              restaurant.timings?.to ? (
                                <div
                                    className={classes.timings}
                                >{`${restaurant.timings?.from} - ${restaurant.timings?.to}`}</div>
                            ) : (
                                ""
                            )}
                        </>
                        <div className={classes.actions}>
                            <Button
                                onClick={(e) => handleBtnClick(e, restaurant.id)}
                                priority="secondary"
                                text="View Restaurant"
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default RestaurantList;
