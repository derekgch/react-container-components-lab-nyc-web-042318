// Code MovieReviews Here
import React, { Component } from 'react';

const MovieReviews = (props) => {
    const reviewsGeneated = props.reviews.map(review => <li className="review" >{review.display_title}</li>)
    return (
        <div className= "review-list">
            <ul>
            {reviewsGeneated}
            </ul>
        </div>
    )
}

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews;