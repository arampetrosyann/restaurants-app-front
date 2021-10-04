import React from "react";

const defaultValues = {
    data: null,
    setData: () => {},
    selectedRestaurant: null,
    setSelectedRestaurant: () => {},
    viewport: {
        latitude: 40.1772,
        longitude: 44.50349,
        zoom: 8,
    },
    setViewport: () => {},
};

const RestaurantContext = React.createContext(defaultValues);

export default RestaurantContext;
