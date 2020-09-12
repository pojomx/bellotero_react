import './Calculator.css';
import React from 'react';
import CalculatorInput from './CalculatorInput';
import DisplayComponent from './DisplayComponent';

class Calculator extends React.Component {

    state = {calcECFS : 0, calcYEAS: 0, mis: 10, fte: 1 };

    callBackMIS = (val) => {
        const mis = val.target.value;
        const fte = this.state.fte;
        this.updateDatos(mis, fte);

    };

    callBackFTE = (val) => {
        const fte = val.target.value;
        const mis = this.state.mis;
        this.updateDatos(mis, fte);
    };

    updateDatos(mis, fte){
        const ecfs = mis * 0.3;
        const yeas = fte * 1337 + ecfs;
        this.setState({calcECFS : ecfs, calcYEAS: yeas, mis: mis, fte: fte});
    }


    componentDidMount(){
        const ecfs = this.state.mis * 0.3;
        const yeas = this.state.fte * 1337 + ecfs;
        this.setState({calcECFS : ecfs, calcYEAS: yeas, mis: this.state.mis, fte: this.state.fte} );
    }


    render() {
        return (
            <div className="container calculator">
                <CalculatorInput iconName="dollar sign icon" title={"Monthly Ingredient Spending"} min={10} max={100} step={0.01} value={this.state.mis} callBack={this.callBackMIS} />
                <CalculatorInput iconName="" title={"Full-time employees that process invoices"} min={1} max={10} step={1} value={this.state.fte}  callBack={this.callBackFTE}/>
    
                <div className="row roboto">
                    <DisplayComponent text="Monthly ingredient spending" value={Number(this.state.calcECFS).toFixed(3)} />
                    <DisplayComponent text="Your estimated anual savings" value={Number(this.state.calcYEAS).toFixed(3)} />
                </div>

            </div>
        ); 
    }
}

export default Calculator;
