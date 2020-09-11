
import React from 'react';

class BarraNavegacion extends React.Component {

    
    state = { menu : null };
    
    componentDidMount () {
        //usar AXIOS?
        //usar FETCH?
        

        //Don’t pull information that is not on the page.
        // For example, if open the site on page 1 it should have only the page information in the state, and pull page 2 information until you navigate to that page
        // You should use r​ edux thunk​, ​redux sagas​ or any other async redux library.

        //Cargar menus https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json
        var data = {
            "menu": {
              "items": [
                    {
                    "text": "Testimonial",
                    "route": "page-1"
                    },
                    {
                    "text": "Configurator",
                    "route": "page-2"
                    },
                    {
                    "text": "Stories",
                    "route": "#"
                    },
                    {
                    "text": "About",
                    "route": "#"
                    }
                ]
            }
        }

        this.setState({ menu: data});

        //renderizar menu
    }

    render (){
        return (
            <header>
                <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white mb-3">
                    <div className="bellotero"></div>
                    <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="menu-link" href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="menu-link" href="#solutions">Solutions</a>
                                </li>
                                <li className="nav-item">
                                    <a className="menu-link" href="#stories">Stories</a>
                                </li>
                                <li className="nav-item">
                                    <a className="menu-link" href="#partners">Partners</a>
                                </li>
                                <li className="nav-item">
                                    <a className="menu-link" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="menu-link"  href="#blog">Blog</a>
                                </li>
                            </ul>
                    </div>
                </nav>
            </header>
        ); 
    }


}

export default BarraNavegacion;
