import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import questions from '../../components/Questionnaire/questions.json'
import api from '../../api'
// UpdateChild uses state to get child data from user input
const UpdateChild = ({ id, name, cities, onChildUpdate = f => f, onChildDelete = f => f }) => {

    let _name, _age, _gender, _race, _city, _relation

    const submit = e => {
        e.preventDefault()
        let updatedChild = {
            id: id,
            name: _name.value,
            age: _age.value,
            gender: _gender.value,
            race: _race.value,
            city: _city.value,
            rating: getRating(),
            relation: _relation.value,
        }
        onChildUpdate(updatedChild)
        handleCloseUpdate()
    }
    // Use child info and checked radio button answers to calculate risk rating for child
    const getRating = () => {
        const answerBtns = document.getElementsByClassName('btn-check')
        let points = 0
        // add 3 points for teens and 1 for age > 7
        points += _age.value > 12 ? 3 : _age.value > 7 ? 1 : 0
        // males are the most at-risk
        points += _gender.value === 'Male' ? 3 : 0
        // in L.A. county these races/ethnicities tend to have a higher risk
        points += _race.value.match(/Hisp/) || _race.value.match(/Black/) ? 3 :
            _race.value.match(/Viet/) || _race.value.match(/Sam/) ? 1 : 0
        // add selected city rating to points
        cities.map(c => points += (c._id === _city.value) ? c.rating : 0)
        // loop through checked radio buttons to add 3 points if answered yes to first 16 questions, 2 points if no to last four
        for (let answer of answerBtns) {
            const { id, name, checked } = answer
            points += name < 17 && checked && id.match(/yes/) ? 3 :
                name > 16 && checked && id.match(/^no/) ? 2 : 0
        }
        // divide points by (max possible * 0.1) to get rating to two decimal points between 0 and 10
        let newRating = (points / 7).toFixed(2)
        return newRating
    }
    // call to api to delete from database- pass id to function to send to parent component
    const deleteChild = () => {
        api.deleteChildById(id)
        onChildDelete(id)
        location.href = 'list'
    }
    // variables for upadate and delete modals
    const [showUpdate, setShowUpdate] = useState(false);
    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate = () => setShowUpdate(true);
    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

    return (
        <>
            <Button variant="primary" className="me-2 mb-2" onClick={handleShowUpdate}>
                Update assessment
            </Button>
            <Button variant="danger" className="mb-2" onClick={handleShowDelete}>
                Delete assessment
            </Button>

            <Modal show={showUpdate} onHide={handleCloseUpdate}>
                <Modal.Header closeButton>
                    <Modal.Title>Update {name}'s assessment </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form className="form-group" action="#" onSubmit={submit}>

                        <div className="label">Child's name:</div>
                        <input
                            className="form-control input-text"
                            name="name"
                            type="text"
                            ref={input => _name = input}
                            required
                        />

                        <div className="label">Child's age:</div>
                        <input
                            className="form-control input-text"
                            name="age"
                            type="number"
                            lang="en-US"
                            min="4"
                            max="17"
                            ref={input => _age = input}
                            required
                        />

                        <div className="label">Child's gender:</div>
                        <select
                            className="form-control input-text"
                            name="gender"
                            ref={input => _gender = input}
                            required
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
                            ref={input => _race = input}
                            required
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
                            ref={input => _city = input}
                            required
                        >
                            <option value=""></option>
                            {
                                cities.map((city, i) => <option key={i} value={city._id}>{city.name}</option>)
                            }
                        </select>

                        <div className="label">Relation:</div>
                        <select
                            className="form-control input-text"
                            name="relation"
                            ref={input => _relation = input}
                            required
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
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseUpdate}>
                                Close
                            </Button>
                            <Button variant="primary" type="submit">
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>
            <Modal show={showDelete} onHide={handleCloseDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete {name}'s assessment </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>Are you sure that you want to delete {name}'s assessment?</h6>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseDelete}>
                            Close
                            </Button>
                        <Button variant="danger" onClick={deleteChild}>
                            Delete
                            </Button>
                    </Modal.Footer>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default UpdateChild