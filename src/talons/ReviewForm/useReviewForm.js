import { useForm } from "react-hook-form";
import { useApolloClient, gql } from "@apollo/client";

const useReviewForm = (props) => {
    const { restaurant } = props;
    const client = useApolloClient();
    const {
        register,
        handleSubmit: handleSubmitForm,
        formState: { errors, isSubmitting },
        watch,
        setValue,
        reset,
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            review: "",
            ratig: 4,
        },
    });

    const handleSubmit = handleSubmitForm(async (formData) => {
        const { name, email, review, rating } = formData;

        const ADD_RESTAURANT_REVIEW = gql`
            mutation addRestaurantReview(
                $restaurantId: ID!
                $data: ReviewDataInput
            ) {
                addRestaurantReview(restaurantId: $restaurantId, data: $data)
            }
        `;

        await client.mutate({
            mutation: ADD_RESTAURANT_REVIEW,
            variables: {
                reviewData: {
                    restaurantId: restaurant.id,
                    data: {
                        name,
                        email,
                        review,
                        rating,
                    },
                },
            },
        });

        reset({ name: "", email: "", review: "", ratig: 4 });
    });

    return {
        register,
        isSubmitting,
        handleSubmit,
        errors,
        setValue,
        watch,
    };
};

export default useReviewForm;
