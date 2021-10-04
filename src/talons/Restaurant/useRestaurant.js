import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApolloClient, gql } from "@apollo/client";

const useRestaurant = () => {
    const [restaurant, setRestaurant] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();
    const client = useApolloClient();

    const fetchRestaurant = useCallback(async () => {
        setIsLoading(true);

        const GET_RESTAURANT = gql`
            query restaurant($id: ID!) {
                restaurant(id: $id) {
                    id
                    name
                    url
                    description
                    location {
                        country
                        city
                        address
                        latitude
                        longitude
                        zipcode
                    }
                    timings {
                        from
                        to
                        isContinual
                    }
                    averageRating
                    phoneNumbers
                }
            }
        `;

        const { data: resData } = await client
            .query({
                query: GET_RESTAURANT,
                variables: {
                    id: id,
                },
                fetchPolicy: "no-cache",
            })
            .catch(() => {
                setIsLoading(false);
            });

        const { restaurant: restaurantData = {} } = resData || {};

        setRestaurant(restaurantData);
        setIsLoading(false);
    }, [id]);

    useEffect(() => {
        fetchRestaurant();
    }, [fetchRestaurant]);

    return {
        restaurant: restaurant,
        isLoading,
    };
};

export default useRestaurant;
