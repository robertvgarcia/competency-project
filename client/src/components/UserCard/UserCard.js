import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import api from '../../api'
// User card uses props to display user info
const UserCard = ({ id, name, email, children }) => {

    const deleteUser = () => {
        api.deleteUserById(id)
        location.href = 'list'
    }
    // Use length of children array to display correct card title and assess buttons
    let len = children.length
    let title = len === 0 ? 'No child assessments' : len > 1 ? 'Children' : "Child"
    let buttonTitle = len < 1 ? 'Assess a child' : 'Assess another child'
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="card mt-5">
            <div className="card-body">
                <h5 className="card-title">User</h5>
                <h6 className="card-subtitle mb-2 text-muted">Name: {name}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Email: {email}</h6>
                <Link to='/child/create'>
                    <Button variant="primary" className="me-2 mb-2">
                        {buttonTitle}
                    </Button>
                </Link>

                <Button variant="danger" className="mb-2" onClick={handleShow}>
                    Delete user
                </Button>
                <h5 className="card-title border-top pt-3">{title}</h5>
                <span>{children}</span>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete {name}'s assessment </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h6>Are you sure that you want to delete {name}'s assessment?</h6>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="danger" onClick={deleteUser}>
                                Delete
                            </Button>
                        </Modal.Footer>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}

export default UserCard;