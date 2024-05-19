import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import logo from "../assets/logo.png"
import "./Header.css"

export const Header = () => {
    return (
        <header>
            <Navbar bg="info" variant='dark' expand="md" className='pos' collapseOnSelect>
                <Container>
                    <Navbar.Brand href='/' style={{fontWeight:800,letterSpacing:3}}>
                        SidShop
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='ms-auto'>
                            <Nav.Link href='/cart'><FaShoppingCart />  Cart</Nav.Link>
                            <Nav.Link href='/login'><FaUser />  Sign In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
