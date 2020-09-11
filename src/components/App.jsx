import React from 'react';
import '../styles/styles.scss';
import Form from "./Pages/Form";
import CourseGrid from './Organisms/CourseGrid';
import Course from "./Pages/Course";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainMenu from './Organisms/MainMenu';
import Home from './Pages/Home';
import Users from './Pages/Users';

//RULE 1: components can only return one 'parent' element
//RULE 2: Fragment is a react component that lets us wrap different divs in order to make our code cleaner
//if we se another div to wrap a pair of divs, then our generated html will look ugly
const App = () => (
  //with React Router we define our routes and all of them need to be defined in a "Router" component
  <Router>
    <MainMenu />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/cursos/:id' component={Course} />
      <Route path='/cursos' component={CourseGrid} />
      <Route path='/form' component={() => <Form name="Página de Contacto" />} />
      <Route path='/usuarios' component={Users} />
      <Route component={() => (
        <div className="ed-grid">
          <h1>Error 404</h1>
          <p>Página no encontrada</p>
        </div>
      )} />
    </Switch>
  </Router>
);

export default App;
