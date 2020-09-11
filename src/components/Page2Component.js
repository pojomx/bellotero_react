import React from 'react';

class Page2Component extends React.Component {

    componentDidMount() {
       

        /*
        datos de aqui pero en did mount
        */ 
       axios.get(" https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json")
        .then(response => {
            this.setState({ datos: response.data, testimonialActual: 0, testimoniales: response.data.slider.reviews.length});
        });                
    
    }

    render() {
        return (
            <div className="page2-component">  
                <h2>Page2</h2>
            </div>
        ); 
    }
}

export default Page2Component;
