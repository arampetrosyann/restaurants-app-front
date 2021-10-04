import React, { useState } from "react";
import classes from "./Home.module.css";
import { RestaurantList, Map } from "Components";
import { RestaurantContext } from "Context";

const Home = () => {
    const [data, setData] = useState(null);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [viewport, setViewport] = useState({
        latitude: 40.1772,
        longitude: 44.50349,
        zoom: 8,
    });

    return (
        <RestaurantContext.Provider
            value={{
                data: data,
                setData,
                selectedRestaurant: selectedRestaurant,
                setSelectedRestaurant,
                viewport,
                setViewport,
            }}
        >
            <div className={classes.root}>
                <div className={classes.container}>
                    <RestaurantList classes={{ root: classes.list }} />
                    <Map classes={{ root: classes.map }} />
                </div>
            </div>
        </RestaurantContext.Provider>
    );
};

export default Home;
