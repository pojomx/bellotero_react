import './ControlesComponent.css';
import React from 'react';


const ControlesComponent = props => {

    
    return (
        <div className="controles-component">
            <div className=" texto boton doble">
                {props.testimonialActual + 1}/{props.testimoniales}
            </div>
            <div className=" boton simple" onClick={props.onAnterior}>
                <i className="arrow left icon"></i>
            </div>
            <div className=" boton simple" onClick={props.onSiguiente}>
                <i className="arrow right icon"></i>
            </div>
        </div>
        );
}

export default ControlesComponent;
