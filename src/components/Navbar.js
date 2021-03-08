import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function AppNavbar() {
    return (
        <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home">Batch 101</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
        </Navbar>
    )
}