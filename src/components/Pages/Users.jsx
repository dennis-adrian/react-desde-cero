import React, { Component } from 'react'
import UserCard from '../Molecules/UserCard'
import axios from 'axios'

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
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            this.setState({users: res.data})
        })
    }

    render() {
        const { users } = this.state
        return (
            <div className="ed-grid">
                <h1>Usuarios</h1>
                <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
                    {
                        users.map(u => (
                            <UserCard
                                key={u.id}
                                name={u.name}
                                username={u.username}
                                email={u.email}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Users;