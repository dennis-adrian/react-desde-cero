import axios from "axios";
import React, { useState, useEffect } from "react";

const Course = ({ match }) => {
    //con los Hooks, podemos tener múltiples estados para nuestra app
    //state, y setState son simplemente nombres estándar pero pueden tener cualquier nombre
    const [course, setCourse] = useState({})
    //estado para los comentarios
    const [comment, setComment] = useState("Sin comentarios")

    useEffect(() => {
        axios.get(`http://my-json-server.typicode.com/dennis-adrian/json-db/courses/${match.params.id}`)
            .then(res => setCourse(res.data))
    }, [])


    const myComment = e => {
        setComment(e.target.value)
    }

    return (
        course ? (
            <div className="ed-grid">
                <div className="l-block">
                    <h1 className="m-cols-3">{course.title}</h1>
                    <img className="m-cols-1" src={course.image} alt={course.title} />
                    <p className="m-cols-2">Profesor: {course.professor}</p>
                </div>
                <div>
                    <h2>Escribe tu comentario</h2>
                    <input type="text" name="" id="" placeholder="Escribe..." onChange={myComment.bind(this)}/>
                    <p>{comment}</p>
                </div>
            </div>
        ) : (
                <h1>El curso no existe</h1>
            )
    )
}

export default Course;