import React, { Component } from 'react'
import api from '../../api'
import questions from '../../components/Questionnaire/questions.json'
import { Link } from 'react-router-dom'
// ChildInsert uses state to get child data from user input
class ChildInsert extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            gender: '',
            race: '',
            city: '',
            rating: 0,
            relation: '',
            user: {},
            cities: [],
        }
    }
    // Get user to add child data, use api call to add cities to state to display as select options and for getRating method
    componentDidMount = async () => {
        await api.getAllUsers().then(user => {
            let { _id, name, age, gender, email } = user.data.data[0]
            this.setState({
                user: {
                    id: _id,
                    name: name,
                    age: age,
                    gender: gender,
                    email: email
                }
            })
        }).then(async () => {
            await api.getAllCities().then(cities => {
                this.setState({
                    cities: cities.data.data
                })
            })
        })
    }
    // Use api calls to add child to database and then get last child created to add to user's child array
    handleCreateChild = async e => {
        e.preventDefault()
        const { name, age, gender, race, city, rating, relation } = this.state
        const user = this.state.user.id
        const child = { name, age, gender, race, city, rating, relation, user }
        await api.insertChild(child).then(async () => {
            await api.getAllChildren().then(async child => {
                const i = child.data.data.length - 1
                const { id, name, age, gender, email } = this.state.user
                const children = child.data.data[i]._id
                const payload = { name, age, gender, email, children }
                await api.updateUserById(id, payload)
            })
        })
        location.href = '/users/list'
    }
    // Use child info and checked radio button answers to calculate risk rating for child
    getRating = () => {
        const { age, gender, race, city, cities } = this.state
        const answerBtns = document.getElementsByClassName('btn-check')
        let points = 0
        // add 3 points for teens and 1 for age > 7
        points += age > 12 ? 3 : age > 7 ? 1 : 0
        // males are the most at-risk
        points += gender === 'Male' ? 3 : 0
        // in L.A. county these races/ethnicities tend to have a higher risk
        points += race.match(/Hisp/) || race.match(/Black/) ? 3 :
            race.match(/Viet/) || race.match(/Sam/) ? 1 : 0
        // add selected city rating to points
        cities.map(c => points += (c._id === city) ? c.rating : 0)
        // loop through checked radio buttons to add 3 points if answered yes to first 16 questions, 2 points if no to last four
        for (let answer of answerBtns) {
            const { id, name, checked } = answer
            points += name < 17 && checked && id.match(/yes/) ? 3 :
                name > 16 && checked && id.match(/^no/) ? 2 : 0
        }
        // divide points by (max possible * 0.1) to get rating to two decimal points between 0 and 10
        let newRating = (points / 7).toFixed(2)
        this.setState({ rating: newRating })
    }

    render() {
        return (
            <div className="text-light container mt-5 p-5">

                <form className="form-group" action="#" onClick={this.getRating} onSubmit={this.handleCreateChild} >

                    <h1 className="text-center">Child's Information</h1>

                    <div className="label">Child's name:</div>
                    <input
                        className="form-control input-text"
                        name="name"
                        type="text"
                        value={this.state.name}
                        required
                        onChange={e => this.setState({ name: e.target.value })}
                    />

                    <div className="label">Child's age:</div>
                    <input
                        className="form-control input-text"
                        name="age"
                        type="number"
                        lang="en-US"
                        min="4"
                        max="17"
                        value={this.state.age}
                        required
                        onChange={e => this.setState({ age: e.target.value })}
                    />

                    <div className="label">Child's gender:</div>
                    <select
                        className="form-control input-text"
                        name="gender"
                        value={this.state.gender}
                        required
                        onChange={e => this.setState({ gender: e.target.value })}
                    >
                        <option value=""></option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Transgender">Transgender</option>
                        <option value="Nonbinary">Nonbinary</option>
                        <option value="Intersex">Intersex</option>
                    </select>

                    <div className="label">Child's race/ethnicity:</div>
                    <select
                        className="form-control input-text"
                        name="race"
                        value={this.state.race}
                        required
                        onChange={e => this.setState({ race: e.target.value })}
                    >
                        <option value=""></option>
                        <option value="Hispanic or Latino">Hispanic or Latino</option>
                        <option value="White">White</option>
                        <option value="Black or African American">Black or African American</option>
                        <option value="American Indian or Alaska Native">American Indian or Alaska Native</option>
                        <option value="Asian Indian">Asian Indian</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Filipino">Filipino</option>
                        <option value="Korean">Korean</option>
                        <option value="Vietnamese">Vietnamese</option>
                        <option value="Other Asian">Other Asian</option>
                        <option value="Native Hawaiian">Native Hawaiian</option>
                        <option value="Guamanian or Chamorro">Guamanian or Chamorro</option>
                        <option value="Samoan">Samoan</option>
                        <option value="Other Pacific Islander">Other Pacific Islander</option>
                        <option value="Multiple races">Multiple races</option>
                    </select>

                    <div className="label">Child's city:</div>
                    <select
                        className="form-control input-text"
                        name="city"
                        value={this.state.city}
                        required
                        onChange={e => this.setState({ city: e.target.value })}
                    >
                        <option value=""></option>
                        {
                            this.state.cities.map((city, i) => <option key={i} value={city._id}>{city.name}</option>)
                        }
                    </select>

                    <div className="label">Relation:</div>
                    <select
                        className="form-control input-text"
                        name="relation"
                        value={this.state.relation}
                        required
                        onChange={e => this.setState({ relation: e.target.value })}
                    >
                        <option value=""></option>
                        <option value="child">Child</option>
                        <option value="grandchild">Grandchild</option>
                        <option value="nephew">Nephew</option>
                        <option value="niece">Niece</option>
                        <option value="sibling">Sibling</option>
                        <option value="cousin">Cousin</option>
                        <option value="friend">Friend</option>
                        <option value="neighbor">Neighbor</option>
                        <option value="student">Student</option>
                        <option value="classmate">Classmate</option>
                        <option value="relative">Relative</option>
                        <option value="loved one">Loved One</option>
                    </select>

                    <ol className="mt-5">
                        {
                            questions.map((question, idx) => {
                                let i = idx + 1;
                                return (
                                    <li className="mt-3" id={`question${i}`} key={i}>
                                        <div className="row">
                                            <p className="col-6">{question}</p>
                                            <div className="col-6" role="group" aria-label="Basic radio toggle button group">
                                                <input type="radio" className="btn-check" name={i} id={`yes${i}`} required />
                                                <label className="btn btn-outline-warning" htmlFor={`yes${i}`}>Yes</label>

                                                <input type="radio" className="btn-check" name={i} id={`no${i}`} required />
                                                <label className="btn btn-outline-warning" htmlFor={`no${i}`}>No</label>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ol>

                    <div className="mt-3 text-center">
                        <button className="btn btn-primary me-1" type="submit">Submit</button>
                        <Link to="/users/list">
                            <button className="btn btn-danger ms-1" type="button">Cancel</button>
                        </Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default ChildInsert