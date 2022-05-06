import React from 'react'
import { Link } from 'react-router-dom'
// Home page introduction with links to learn more or create assessment
const HomePage = () =>
    <div className="text-light text-center container py-5" id="bg-home">
        <h3 className="mb-5">Gang Risk Assessment and Suppression Program</h3>
        <div>
            <img className="img-fluid rounded float-end ms-3" src="images/boysChillen.jpeg" alt="Photo of teenage boys hanging out" />
            <p>
                Most children living in the city of Los Angeles, as well as in the surrounding cities in the county tend to have a rather high potential risk of becoming involved with a gang at some point in their lives. Oftentimes the parents, guardians, and/or loved ones are not aware of the various types of risks that the children in their
                lives face on a daily basis. This Gang Risk Assessment and Suppression Program (GRASP) aims to assist anyone that resides, or plans to reside, in any of the cities of L.A. county with identifying what those risks are and how to go about suppressing them if they exist. Put together by those that have chosen to involve themselves with gangs and know firsthand the negative consequences that would eventually follow, this app hopes to help at-risk kids steer clear of becoming involved with gangs, which could lead to prison or possibly an early grave.
            </p>
        </div>
        <Link to="/learn" className="text-decoration-none">
            <p className="text-warning">Learn more</p>
        </Link>
        <Link to='/users/create'>
            <button className="btn btn-outline-warning">Create Assessment</button>
        </Link>
    </div >

export default HomePage


