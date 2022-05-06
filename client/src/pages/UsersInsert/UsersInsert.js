import React, { Component } from 'react'
import api from '../../api'
import UpdateModal from '../../components/UpdateModal'
import { Link } from 'react-router-dom'
// use state to get user info
class UsersInsert extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            age: '',
            gender: '',
            email: '',
            isUser: false
        }
    }
    // if user exists in database set state with data
    componentDidMount = async () => {
        await api.getAllUsers().then(user => {
            let { _id, name, age, gender, email } = user.data.data[0]
            this.setState({
                id: _id,
                name: name,
                age: age,
                gender: gender,
                email: email,
                isUser: true
            })
        })
    }
    // use state to create user, call to api to add to database
    handleCreateUser = e => {
        e.preventDefault()
        const { name, age, gender, email } = this.state
        const user = { name, age, gender, email }
        api.insertUser(user)
        location.href = '/child/create'
    }
    // when new user is created, existing user is deleted to keep one user per session
    handleCreateNewUser = () => {
        const { id } = this.state
        api.deleteUserById(id)
        this.setState({
            id: '',
            name: '',
            age: '',
            gender: '',
            email: '',
            isUser: false
        })
    }
    // continue as existing user
    handleContinue = () => {
        location.href = '/users/list'
    }

    render() {
        return (
            <div className="text-light container mt-5 p-5">
                {this.state.isUser ?
                    <UpdateModal user={this.state} onContinue={this.handleContinue} onCreateNewUser={this.handleCreateNewUser} />
                    :
                    <form className="form-group" action="#" onSubmit={this.handleCreateUser} >
                        <h1 className="text-center">Your Information</h1>

                        <div className="label">Your name: </div>
                        <input
                            className="form-control input-text"
                            name="name"
                            type="text"
                            value={this.state.name}
                            required
                            onChange={e => this.setState({ name: e.target.value })}
                        />

                        <div className="label">Your age: </div>
                        <input
                            className="form-control input-text"
                            name="age"
                            type="number"
                            lang="en-US"
                            min="13"
                            max="100"
                            value={this.state.age}
                            required
                            onChange={e => this.setState({ age: e.target.value })}
                        />

                        <div className="label">Your gender: </div>
                        <input
                            className="form-control input-text"
                            name="gender"
                            type="text"
                            value={this.state.gender}
                            required
                            onChange={e => this.setState({ gender: e.target.value })}
                        />

                        <div className="label">Your email: </div>
                        <input
                            className="form-control input-text"
                            name="email"
                            type="email"
                            value={this.state.email}
                            required
                            onChange={e => this.setState({ email: e.target.value })}
                        />

                        <div className="mt-3 text-center">
                            <button className="btn btn-primary me-1" type="submit">Submit</button>
                            <Link to="/">
                                <button className="btn btn-danger ms-1" type="button">Cancel</button>
                            </Link>
                        </div>

                    </form>
                }
            </div>
        )
    }
}

export default UsersInsert

