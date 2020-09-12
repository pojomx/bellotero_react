import './Page1Component.css';
import React from 'react';
import belloteroAPI from '../../api/belloteroAPI';
import ControlesComponent from './ControlesComponent';
import ReviewComponent from './ReviewComponent';
import SpinnerComponent from '../SpinnerComponent';

class Page1Component extends React.Component {
    state = { datos : null, testimonialActual : 0, testimoniales : 0};

    componentDidMount (props) {
        /*
        datos de aqui pero en did mount
        */ 
       belloteroAPI.get("/master/page1.json")
        .then(response => {
            this.setState({ datos: response.data, testimonialActual: 0, testimoniales: response.data.slider.reviews.length});
        });                
    }

    onClickSiguiente = event => {
        const siguiente = (this.state.testimonialActual === this.state.testimoniales -1)? 0 : this.state.testimonialActual + 1;
        this.setState({testimonialActual: siguiente});

    };


    onClickAnterior = event => {
        const anterior = this.state.testimonialActual === 0 ?(this.state.testimoniales - 1):(this.state.testimonialActual - 1);
        this.setState({testimonialActual: anterior});
    };

    render() {
        if(!this.state.datos) {    
            return <SpinnerComponent message="Obteniendo datos de internet" />
        }
        return (
            <div className="page1-component">  
                <div className="row">
                    <h1>{this.state.datos.slider.title}</h1>
                </div>
                <ReviewComponent review = {this.state.datos.slider.reviews[this.state.testimonialActual]} />
                <ControlesComponent testimonialActual = {this.state.testimonialActual} testimoniales = {this.state.datos.slider.reviews.length} onSiguiente = {this.onClickSiguiente} onAnterior = {this.onClickAnterior}/>
            </div>
        ); 
    }
}

export default Page1Component;
