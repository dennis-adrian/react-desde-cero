import axios from "axios";
import { useState, useEffect } from "react";

const useCourse = id => {

    const [course, setCourse] = useState({})

    useEffect(() => {
        axios.get(`http://my-json-server.typicode.com/dennis-adrian/json-db/courses/${id}`)
            .then(res => setCourse(res.data))
    }, [])

    return course;
}

export default useCourse;