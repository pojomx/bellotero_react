import React from 'react'

class LocatorComponent extends React.Component {
    
    state = {lat: null, long: null, errorMessage: ''};


    render() {

        const season = getSeason();

        if(this.state.lat)
        {
            return (
                <div>
                    Latitude: {this.state.lat}
                </div>
            );
        }

        if(this.state.errorMessage)
        {
            return (
                <div>Error: {this.state.errorMessage}</div>
            );
        }

        return (<div>Cargando...</div>);

    }

    componentDidMount() {        
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState( {errorMessage: err.message})
        );
    }

    componentDidUpdate() {
        console.log("He sido actualizado!")
    }

    componentWillUnmount() {
        console.log("Me jui")
    }
    
};

export default LocatorComponent;