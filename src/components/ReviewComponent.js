import React from 'react'
import PersonCard from './PersonCard'

const ReviewComponent = (props) => {
    return (
        <div className="review row">
                <div className="col-md-4">
                    <PersonCard name={props.review.name} position={props.review.position} />
                </div>
                <div className="col-md-8">
                    <div className="text">
                    {props.review.comment}
                    </div>
                </div>
        </div>
    );
};

export default ReviewComponent;