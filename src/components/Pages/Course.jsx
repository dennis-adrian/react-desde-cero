import React from "react";

const cursos = [
    {
        id: 1,
        title: 'React Desde Cero',
        image:
            'https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg',
        price: 20,
        professor: 'Beto Quiroga',
    },
    {
        id: 2,
        title: 'APIs con .NET Core',
        image:
            'https://edteam-media.s3.amazonaws.com/courses/small/fe19dd8c-ff56-4e26-b5bd-904f3631855b.png',
        price: 30,
        professor: 'Miguel Teheran',
    },
    {
        id: 3,
        title: 'JavaScript Desde Cero',
        image:
            'https://edteam-media.s3.amazonaws.com/courses/small/61e5a210-8dab-412e-a6dc-802c070cc18c.jpg',
        price: 20,
        professor: 'Beto Quiroga',
    },
    {
        id: 4,
        title: 'HTML Desde Cero',
        image:
            'https://edteam-media.s3.amazonaws.com/courses/small/26557907-0555-427e-a40c-6ff207f98d72.png',
        price: 40,
        professor: 'Álvaro Felipe',
    },
];

const Course = ({ match }) => {

    const cursoActual = cursos.filter(curso => curso.id === parseInt(match.params.id))[0];

    return (
        cursoActual ? (
            <div className="ed-grid m-grid-3">
                <h1 className="m-cols-3">{cursoActual.title}</h1>
                <img className="m-cols-1" src={cursoActual.image} alt={cursoActual.title} />
                <p className="m-cols-2">Profesor: {cursoActual.professor}</p>
            </div>
        ) : (
                <div className="ed-grid">
                    <h1>El curso no existe</h1>
                </div>
            )
    )
}

export default Course;