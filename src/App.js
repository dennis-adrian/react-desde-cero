import React from 'react';
import "./styles/styles.scss";
import Curso from './Curso'

const cursos = [
  {
    "title": "React desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    "price": 30
  },
  {
    "title": "APIs con .NET Core",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/fe19dd8c-ff56-4e26-b5bd-904f3631855b.png",
    "price": 50
  },
  {
    "title": "CSS Avanzado",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/262e68b3-eea2-43f2-9e9a-febc106a8295.png",
    "price": 50
  },
  {
    "title": "UI Design",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/c280eaa2-c461-4306-82bf-29061e2829e5.png",
    "price": 40
  }
]

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
      {
        cursos.map(curso => <Curso
          title={curso.title}
          image={curso.image}
          price={curso.price}
        />)
      }
    </div>
  </>
)

export default App;
