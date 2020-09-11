import React from 'react';
import BarraNavegacion from './BarraNavegacion';
import Page1Component from './Page1Component';

class App extends React.Component {

    render() {
        return (<div className="container page1-component">
                <BarraNavegacion /> 
                <Page1Component />
            </div>);
    };

};

export default App;