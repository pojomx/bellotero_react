import './Page2Component.css';
import React from 'react';
import belloteroAPI from '../../api/belloteroAPI';
import SpinnerComponent from '../SpinnerComponent';
import Calculator from './Calculator';


class Page2Component extends React.Component {
    state = { title : null, description : null};

    componentDidMount (props) {
        /*
        datos de aqui pero en did mount
        */ 
       belloteroAPI.get("/master/page2.json")
        .then(response => {
            console.log(response.data.calculator.title)
            this.setState({ title: response.data.calculator.title, description: response.data.calculator.description});
        });                
    }

    render() {
        if(!this.state.title) {    
            return <SpinnerComponent message="Obteniendo datos de internet" />
        }
        return (

            
            <div className="page2-component row">  
                <div className="col-md-4 title">
                    <h1>
                        {this.state.title}
                    </h1>
                    <div className="text">
                        {this.state.description}
                    </div>
                </div>
                <div className="col-md-8">
                    <Calculator />
                </div>
            </div>
        ); 
    }
}

export default Page2Component;
