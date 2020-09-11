import React from 'react';
import axios from 'axios';
import CourseGrid from '../Organisms/CourseGrid'

class Courses extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        axios.get('http://my-json-server.typicode.com/dennis-adrian/json-db/courses')
            .then(res => this.setState({ courses: res.data }))
    }

    render() {

        const { courses } = this.state;

        return <CourseGrid courses={courses}/>
    }
}

export default Courses;
