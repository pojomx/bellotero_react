import React from 'react';
import ControlesComponent from './ControlesComponent';
import ReviewComponent from './ReviewComponent';
import SpinnerComponent from './SpinnerComponent';

class Page1Component extends React.Component {
    state = { datos : null, testimonialActual : 0, testimoniales : 0};

    componentDidMount (props) {
        /*
        datos de aqui pero en did mount
        https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json
        */ 
       var dataset = {
            "slider": {
            "title":  "Our customers love us",
            "reviews": [{
                "name": "Pete Zahut",
                "position": "Chief @ Maniak",
                "comment": "It's funny what memory does, isn't it? My favorite holiday tradition might not have happened more than once or twice. But because it is such a good memory, so encapsulating of everything I love about the holidays, in my mind it happened every year. Without fail"
            },{
                "name": "Bernabe",
                "position": "Tech Lead @ Maniak",
                "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed lectus quam. Curabitur ultricies pretium orci nec finibus. Nullam congue quis tortor a tempus. Morbi rutrum, nunc at hendrerit gravida, tortor turpis molestie nibh, vel varius augue ante eu velit."
            }]
            }
        };

        this.setState({ datos: dataset, testimonialActual: 0, testimoniales: dataset.slider.reviews.length});
        
    }

    onClickSiguiente = event => {
        const siguiente = (this.state.testimonialActual == this.state.testimoniales -1)? 0 : this.state.testimonialActual + 1;
        this.setState({testimonialActual: siguiente});

    };


    onClickAnterior = event => {
        const anterior = this.state.testimonialActual == 0 ?(this.state.testimoniales - 1):(this.state.testimonialActual - 1);
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
