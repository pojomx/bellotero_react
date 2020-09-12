import React from 'react';
import BarraNavegacion from './BarraNavegacion';
import Page1Component from './Page1/Page1Component';
import Page2Component from './Page2/Page2Component';

class App extends React.Component {

    render() {

        switch(window.location.pathname)

        {
            case "/page-2":
                return (<div className="container">
                <BarraNavegacion /> 
                <Page2Component />
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