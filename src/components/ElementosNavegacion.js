
import React from 'react';

const ElementosNavegacion = (props) => {

    return props.menu_items.map( (mi) => {
        return (
            <li key={mi.text} className="nav-item"><a className="menu-link" href={mi.route}>{mi.text}</a></li> 
        );
    });

};

export default ElementosNavegacion;