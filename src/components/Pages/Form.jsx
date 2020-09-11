import React, { Component } from 'react';

//Creating a react class
class Form extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    //estado del componente
    this.state = {
      nombre: '',
      correo: '',
      fecha: new Date(),
    };

    //hacemos un bind de la función "cambiarNombre" para que
    //se pueda usar con un "this" dentro de nuestro componente
    this.cambiarNombre = this.cambiarNombre.bind(this);
    this.cambiarCorreo = this.cambiarCorreo.bind(this);
    this.cambiarFecha = this.cambiarFecha.bind(this);
  }

  cambiarNombre(e) {
    this.setState({
      nombre: e.target.value,
    });
  }
  cambiarCorreo(e) {
    this.setState({
      correo: e.target.value,
    });
  }

  cambiarFecha() {
    this.setState({
      fecha: new Date()
    })
  }
  //=========método para actualizar el estado del componente
  //this.setState({})

  render() {
    return (
      <div className="ed-grid">
        <h1 id="elemento">Formulario de {this.props.name}</h1>
        <h4 id="fecha">Fecha actual {Math.ceil(this.state.fecha / 1000)}</h4>
        <form action="">
          <div className="ed-grid m-grid-2">
            <div className="form__item">
              <label htmlFor="nombre">Nombre Completo</label>
              <input type="text" id="nombre" onChange={this.cambiarNombre} />
            </div>
            <div className="form__item">
              <label htmlFor="email">Correo Electrónico</label>
              <input type="email" id="email" onChange={this.cambiarCorreo} />
            </div>
          </div>
          <div>
            <h2>{`Hola ${this.state.nombre}`}</h2>
            <span>{`Tu correo es: ${this.state.correo}`}</span>
          </div>
        </form>
      </div>
    );
  }

  //this method is executed right after the component is created
  componentDidMount() {
    //let elemento = document.getElementById('elemento');
    this.intervaloFecha = setInterval(() => {
      this.cambiarFecha();
      //console.log(new Date());
    }, 1000);
  }

  //this method is executed every time the component changes (updates)
  componentDidUpdate(prevProps, prevState) {
    console.log('==============');
    console.log(prevProps);
    console.log('--------------');
    console.log(prevState);
    console.log('--------------');
  }
  //the code in this method will be executed after the 
  //component is unmounted
  componentWillUnmount() {
    clearInterval(this.intervaloFecha)
  }
}

export default Form;
