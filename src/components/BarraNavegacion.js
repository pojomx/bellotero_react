
import React from 'react';
import belloteroAPI from '../api/belloteroAPI';
import ElementosNavegacion from './ElementosNavegacion'

class BarraNavegacion extends React.Component {

    
    state = { menu_items : [] };
    
    componentDidMount () {
        //usar AXIOS?

        belloteroAPI.get("/master/app.json")
        .then(response => {    
            this.setState({ menu_items: response.data.menu.items});
        });        

        //Don’t pull information that is not on the page.
        // For example, if open the site on page 1 it should have only the page information in the state, and pull page 2 information until you navigate to that page
        // You should use r​ edux thunk​, ​redux sagas​ or any other async redux library.

        //Cargar menus https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json


        //renderizar menu
    }

    render (){
        return (
            <header>
                <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white mb-3">
                    <div className="bellotero"></div>
                    <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
                            <ul className="navbar-nav">
                                <ElementosNavegacion menu_items={this.state.menu_items}/>
                            </ul>
                    </div>
                </nav>
            </header>
        ); 
    }


}

export default BarraNavegacion;
