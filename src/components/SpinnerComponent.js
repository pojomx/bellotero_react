import React from 'react'

const SpinnerComponent = (props) => {
    return (
        <div className="ui segment granaltura">
        <div className="ui active dimmer">
            <div className="ui text loader">
                    {props.message}
            </div>
        </div>
    </div>
    );
};

SpinnerComponent.defaultProps = {
    message: "cargando..."
}


export default SpinnerComponent;