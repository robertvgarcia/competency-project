import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
// display links
class Links extends Component {
    render() {
        return (
            <>
                <Nav className="ms-auto">
                    <Link to="/about" className="nav-link" >
                        About Us
                    </Link>
                    <Link to="/contact" className="nav-link" >
                        Contact Us
                    </Link>
                </Nav>
            </>
        )
    }
}

export default Links