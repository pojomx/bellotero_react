import './CalculatorInput.css';
import React from 'react';

class CalculatorInput extends React.Component {
    
    state = {
        value: 10
    }
    
    sliderOnChange = (event) => {
        this.props.callBack(event);

        this.setState({ value: event.target.value });
    }

    FormatoDecimal = (number) => {
        if(this.props.step == 1)
        {
            return Number(number).toFixed(0);
        }
        else 
        {
            return Number(number).toFixed(2);
        }
        
    }

    render( ){
        return (
            <div className="container calculator-input">  
                <div className="row"> 
                    <div className="col-md-6 calc_input_text">
                        <span className="short">Monthly <br/> Ingredient Spendings</span>
                    </div>
                    <div className="col-md-6">
                        <div className="ui left icon input">
                        <input type="text" className="input_calculator_value" readOnly value={this.FormatoDecimal(this.state.value)}/>
                            <i className={this.props.iconName}></i>
                        </div>

                        <div className="calculator-input-value"></div>
                    </div>
                </div>
                <div className="slider">
                    <input type="range" min={this.props.min} max={this.props.max} value={this.state.value} className="slider" step={this.props.step} onChange={this.sliderOnChange} />
                </div>
                <div className="clearfix"></div>
            </div>
            );
    }


}

export default CalculatorInput;