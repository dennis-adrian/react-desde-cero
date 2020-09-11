import React, { Component } from 'react'
import axios from 'axios'
import UserGrid from '../Organisms/UserGrid'

class Users extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users', {
    //         method: 'get'
    //     })
    //         .then(res => res.json())
    //         .then(res2 => {
    //             this.setState({users: res2})
    //         })
    // }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.setState({ users: res.data })
            })
    }

    render() {
        const { users } = this.state
        return <UserGrid users={users} />
    }
}

export default Users;