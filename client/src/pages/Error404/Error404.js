import React from 'react'
import { Link } from 'react-router-dom'
import './Error404.css'
// display error page
const Error404 = () =>
    <div className="container p-5">
        <div className="card">
            <img src="images/error.jpeg" className="card-img-top" alt="Photo of dead end alley" />
            <div className="card-body text-center">
                <span className="fa fa-ban text-danger deadEnd "></span>
                <h1 className="text-danger">Dead End</h1>
                <h2>Page Not Found</h2>
            <p>Looks like you made a wrong turn.</p>
            <p>We are unable to locate: <span className="bg-dark text-warning px-3 rounded">{location.href}</span></p>
            <Link to="/">
                <button className="btn btn-danger" type="button">Return to home page</button>
            </Link>
            </div>
        </div>
    </div>

export default Error404
