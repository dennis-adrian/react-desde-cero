import React from 'react';
import "./styles/styles.scss";
import Curso from './Curso'

//RULE 1: components can only return one 'parent' element
//RULE 2: Fragment is a react component that lets us wrap different divs in order to make our code cleaner
//if we se another div to wrap a pair of divs, then our generated html will look ugly
const App = () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" alt="" src="https://images.pexels.com/photos/139309/pexels-photo-139309.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Título del banner</p>
            <p> Subtítulo de este banner</p>
            <a href="http://dennisadrian.me" className="button">Botón del banner</a>
          </div>
        </div>
      </div>
    </div>
    <div className="ed-grid m-grid-3">
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
    </div>
  </>
)

export default App;
