import React from 'react'
import Logo from '../Logo'
import Links from '../Links'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import './NavBar.css'
// Bootstrp collapsable navbar displays logo & links
const NavBar = () => (
    <Navbar expand="md" className="navbar-dark bg-nav fixed-top container">
        <Navbar.Brand>
            <Link to="/" className="nav-link text-light">
                <Logo /> GRASP
            </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Links />
        </Navbar.Collapse>
    </Navbar>
)

export default NavBar