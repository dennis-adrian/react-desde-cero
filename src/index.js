import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//-------------------------USING JS TO CREATE AN h1 ELEMENT
//const elemento = React .createElement(componente, propiedades, hijos)
//const elemento = React.createElement("h1", {className: "saludo"}, "Hola Mundo");

//-------------------------USING JSX TO CREATE AN h1 ELEMENT
//ReactDOM.render(<h1 className="saludo">Hola mundo</h1>, document.getElementById('root')
//);
ReactDOM.render( <App />, document.getElementById('root')
);
