import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// use state to get and display user info
class ContactPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contact: false
        }
    }
    // set state to display response message to user
    submit = e => {
        e.preventDefault()
        this.setState({ contact: true })
    }

    render() {
        return (
            <div className="text-light container p-5">
                <div className="text-center">
                    <h3>Contact Us</h3>
                    <img className="img-fluid rounded" src="images/contactUs.jpeg" alt="Photo of laptop and cellphone" />
                    <p className="mt-3">
                        If you have any questions and/or concerns please feel free to contact us and we
                        will get back to you at our earliest possible convenience. We graciously accept
                        any comments, feedback, criticism, and/or assistance that you may offer that will
                        help us acheive our goal of recognizing and suppressing the risks that the children
                        in our lives face in regards to gangs. We look forward to hearing from you!
                    </p>
                    {/* use state to display form or response */}
                    {!this.state.contact ?
                        <form className="form-group mx-auto" action="#" onSubmit={this.submit}>
                            <div className="label text-start">Your name: </div>
                            <input
                                className="form-control"
                                name="name"
                                type="text"
                                required
                                onChange={e => this.setState({ name: e.target.value })}
                            />
                            <div className="label text-start">Email: </div>
                            <input
                                className="form-control"
                                name="email"
                                type="email"
                                required
                                onChange={e => this.setState({ email: e.target.value })}
                            />
                            <div className="label text-start">Message: </div>
                            <textarea
                                className="form-control"
                                name="message"
                                type="text"
                                required
                                onChange={e => this.setState({ message: e.target.value })}
                            />

                            <div className="mt-3">
                                <button className="btn btn-primary me-1" type="submit">Submit</button>
                                <Link to='/'>
                                    <button className="btn btn-danger ms-1" type="button">Cancel</button>
                                </Link>
                            </div>
                        </form>
                        :
                        <div>
                            <p>{this.state.name}, thank you so very kindly for reaching out to us!
                            We have received your message and we will get back to you at our earliest
                            possible convenience.</p>
                            <Link to='/'>
                                <button className="btn btn-warning ms-1" type="button">Return to Home Page</button>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default ContactPage