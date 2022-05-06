import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
// UpdateModal uses props to pass click events to parent component
const UpdateModal = ({ user, onContinue = f => f, onCreateNewUser = f => f }) => {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Current User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5 className="text-muted">User: {user.name}<br />Email: {user.email}</h5>
                <h6>Would you like to continue as {user.name}, or create new user?</h6>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onContinue}>
                    Continue
                        </Button>
                <Button variant="primary" onClick={onCreateNewUser}>
                    Create New User
                        </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default UpdateModal 