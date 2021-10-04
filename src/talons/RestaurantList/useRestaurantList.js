import { useCallback, useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useApolloClient, gql } from "@apollo/client";
import { FlyToInterpolator } from "react-map-gl";
import { RestaurantContext } from "Context";

const useRestaurantList = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { data, setData, setViewport } = useContext(RestaurantContext);
    const history = useHistory();
    const client = useApolloClient();

    const fetchRestaurants = useCallback(async () => {
        setIsLoading(true);

        const GET_RESTAURANTS = gql`
            query restaurants($params: RestaurantsParamsInput) {
                restaurants(params: $params) {
                    items {
                        id
                        name
                        url
                        phoneNumbers
                        description
                        location {
                            country
                            city
                            address
                            latitude
                            longitude
                            zipcode
                        }
                        averageRating
                        timings {
                            from
                            to
                            isContinual
                        }
                    }
                    total
                    totalPages
                }
            }
        `;

        const { data: resData } = await client
            .query({
                query: GET_RESTAURANTS,
                variables: {
                    params: {
                        sort: "averageRating",
                        dir: "ASC",
                    },
                },
                fetchPolicy: "no-cache",
            })
            .catch(() => {
                setIsLoading(false);
            });

        const { restaurants: restaurantsData = {} } = resData || {};

        setData(restaurantsData);
        setIsLoading(false);
    }, []);

    const handleOnClick = useCallback(
        (restaurant) => {
            const { location } = restaurant || {};

            setViewport({
                longitude: Number(location.longitude),
                latitude: Number(location.latitude),
                zoom: 16,
                transitionInterpolator: new FlyToInterpolator({ speed: 1.2 }),
                transitionDuration: "auto",
            });
        },
        [setViewport]
    );

    const handleBtnClick = useCallback((event, id) => {
        event.stopPropagation();

        history.push(`/restaurant/${id}`);
    }, []);

    useEffect(() => {
        fetchRestaurants();
    }, [fetchRestaurants]);

    return {
        data: data,
        isLoading,
        handleOnClick,
        handleBtnClick,
    };
};

export default useRestaurantList;
