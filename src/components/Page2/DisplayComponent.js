import React from 'react'

const DisplayComponent = (props) => {
    return (
        <span className="DisplayComponent">
            <span className="smallMoney">$</span>
            <span className="bigMoney">{props.value}</span>
            <br />
            {props.text}
        </span>
    );
}
export default DisplayComponent;