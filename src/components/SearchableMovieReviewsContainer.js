// Code SearchableMovieReviewsContainer Here

import React, { Component } from 'react';

class SearchableMovieReviewsContainer extends Component {
    state={
        reviews: [],
        searchTerm: ""
    }

    handleChange= (e)=>{
        this.setState({searchTerm: e.target.value})
    }
    render() {
        let filter = this.state.reviews;
        if(this.state.searchTerm){
            filter = this.state.reviews.filter(r => r.summary_short.includes(this.state.searchTerm))
        }
        let reviews = filter.map(review => <li className="review" >{review.display_title}</li>)
        return (
            <div className ="searchable-movie-reviews">
                <input type="text" value={this.state.searchTerm} onChange = {this.handleChange} />
                {reviews}
            </div>
        );
    }
}

export default SearchableMovieReviewsContainer;