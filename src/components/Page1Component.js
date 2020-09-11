import React from 'react';
import ControlesComponent from './ControlesComponent';
import ReviewComponent from './ReviewComponent';
import SpinnerComponent from './SpinnerComponent';

class Page1Component extends React.Component {
    state = { datos : null, testimonialActual : 0};

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

        this.setState({ datos: dataset});
        
    }
    /*
    renderContent() {
            //Se recomienda para tener un marco comun y aqui hacer la selección del contenido (ifs/etc) 
    } */

    render() {
        if(!this.state.datos) {    
            return <SpinnerComponent message="Obteniendo datos de internet" />
        }

        return (
            <div className="page1-component">  
                <div className="row">
                    <h1>{this.state.datos.slider.title}</h1>
                </div>
                <ReviewComponent review = {this.state.datos.slider.reviews[0]} />
                <ControlesComponent testimonialActual = {this.state.testimonialActual} testimoniales = {this.state.datos.slider.reviews.length}/>
            </div>
        ); 
    }
}

export default Page1Component;
