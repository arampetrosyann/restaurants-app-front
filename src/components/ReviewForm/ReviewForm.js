import React from "react";
import StarRatings from "react-star-ratings";
import defaultClasses from "./ReviewForm.module.css";
import mergeClasses from "Helpers/mergeClasses";
import { TextInput, Button } from "Components";
import useReviewForm from "Talons/ReviewForm";

const ReviewForm = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes);
    const { register, isSubmitting, handleSubmit, setValue, watch, errors } =
        useReviewForm(props);

    return (
        <div className={classes.root}>
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.fields}>
                    <StarRatings
                        rating={watch("rating") || 4}
                        starRatedColor="#FFB800"
                        starHoverColor="#FFB800"
                        starDimension="20px"
                        starSpacing="5px"
                        changeRating={(newRating) => setValue("rating", newRating)}
                        numberOfStars={5}
                        name="rating"
                    />
                    {errors.rating ? (
                        <p className="text-red-blud text-xs">
                            {errors.rating.message}
                        </p>
                    ) : null}
                    <TextInput
                        type="text"
                        id="name"
                        autoComplete="name"
                        name="name"
                        placeholder="Your name"
                        {...register("name", {
                            required: "This field is required.",
                        })}
                        error={errors.name ? errors.name.message : null}
                    />
                    <TextInput
                        type="text"
                        id="email"
                        autoComplete="email"
                        placeholder="Email"
                        name="email"
                        {...register("email", {
                            required: "This field is required.",
                        })}
                        error={errors.email ? errors.email.message : null}
                    />
                    <TextInput
                        type="text"
                        id="review"
                        placeholder="Review"
                        name="review"
                        {...register("review", {
                            required: "This field is required.",
                        })}
                        error={errors.review ? errors.review.message : null}
                    />
                </div>
                <div className={classes.actions}>
                    <Button
                        classes={{ button: classes.submitButton }}
                        type="submit"
                        text="Add"
                        disabled={isSubmitting}
                    />
                </div>
            </form>
        </div>
    );
};

export default ReviewForm;
