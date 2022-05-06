import React, { Component } from 'react'
import api from '../../api'
import UserCard from '../../components/UserCard/';
import ChildCard from '../../components/ChildCard';
import RiskFactorCard from '../../components/RiskFactorCard';
import { Link } from 'react-router-dom'
// use state to display user and assessment data
class UsersList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            cities: [],
            isLoading: false,
        }
    }
    // api call to get and set data to state, get and send citiesas props  to ChildCard
    componentDidMount = async () => {
        this.setState({ isLoading: true })
        await api.getAllUsers().then(users => {
            this.setState({
                users: users.data.data,
                isLoading: false
            })
        })
        await api.getAllCities().then(cities => {
            this.setState({
                cities: cities.data.data
            })
        })
    }
    // api call to update database with data passed from ChildCard
    handleUpdateChild = async updatedChild => {
        await api.updateChildById(updatedChild.id, updatedChild).then(res => {
            api.getAllUsers().then(users => {
                this.setState({
                    users: users.data.data,
                    isLoading: false
                })
            })
        })
    }
    // use id passed from ChildCard to remove child from user's child array
    doDeleteChild = id => {
        this.setState({
            users: this.state.users.map(user => {
                user.children.filter(child._id !== id)
            })
        })
    }

    render() {
        return (
            <div className='container my-5'>
                <RiskFactorCard />
                {/* use state to display message or user and child cards */}
                {this.state.isLoading ?
                    <div className="text-light text-center">
                        <h2>There are no current user/assessments</h2>
                        <Link to='/users/create'>
                            <button className="btn btn-outline-warning">Click here to create assessment</button>
                        </Link>
                    </div>
                    :
                    this.state.users.map((user, i) => (
                        <UserCard
                            key={user._id}
                            id={user._id}
                            {...user}
                            children={user.children.map(child => (
                                <ChildCard
                                    cities={this.state.cities}
                                    key={child._id}
                                    id={child._id}
                                    {...child}
                                    onChildUpdate={this.handleUpdateChild}
                                    onChidDelete={this.doDeleteChild}
                                />
                            ))}
                        />

                    ))
                }


            </div>
        )
    }
}

export default UsersList