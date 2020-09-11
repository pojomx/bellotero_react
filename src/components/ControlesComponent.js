import './ControlesComponent.css';
import React from 'react';


const ControlesComponent = props => {

    var actual = props.testimonialActual + 1;
    var total = props.testimoniales;

    return (
        <div className="controles-component">
            <div className=" texto boton doble">
                {actual}/{total}
            </div>
            <div className=" boton simple">
                <i class="arrow left icon"></i>
            </div>
            <div className=" boton simple">
                <i class="arrow right icon"></i>
            </div>
        </div>
    ); 
}

export default ControlesComponent;
