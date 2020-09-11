import React from 'react';
import BarraNavegacion from './BarraNavegacion';
import Page1Component from './Page1Component';

class App extends React.Component {

    render() {

        switch(window.location.pathname)

        {
            case "/page-2":
                return (<div className="container">
                <BarraNavegacion /> 
                
                </div>);
                
            default: 
            return (<div className="container">
                <BarraNavegacion /> 
                <Page1Component />
            </div>);
        }

        
    };

};

export default App;