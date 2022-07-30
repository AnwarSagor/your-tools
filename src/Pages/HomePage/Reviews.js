import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // const url = 'tools.json'
        const url = `http://localhost:5000/reviews`;
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <div className='mx-12 my-12'>
            <h2 className='font-extrabold mb-4 text-center text-5xl text-transparent bg-clip-text bg-gradient-to-b from-blue-900 to-cyan-300'>REVIEWS: {reviews.length}</h2>
            <div>
                {
                    reviews.map(review =>
                        <div class="card bg-base-100 mb-4 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title">User: {review.user}</h2>
                                <p> <strong>Rating:</strong> {review.rating} out of 5!</p>
                                <p> <strong>Description:</strong> {review.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Reviews;