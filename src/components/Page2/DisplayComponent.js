import React from 'react'

const DisplayComponent = (props) => {
    return (
        <div className="DisplayComponent rightAlign">
            <span className="smallMoney">$</span>
            <span className="bigMoney">{props.value}</span>
            <br />
            {props.text}
        </div>
    );
}
export default DisplayComponent;