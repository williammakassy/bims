import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import {Offcanvas} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'semantic-ui-react'


const Sidebar = ({ title }) => {
  return (
    <>
    <Navbar bg='dark' variant='dark' expand={false} fixed='top'>
        <Container fluid>
            <Navbar.Brand href="/">{title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
                id='offcanvasNavbar'
                aria-labelledby='offcanvasNavbarLabel'
                placement='end'
            >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id='offcanvasNavbarLabel'><h3 className='text-center'>BIS MENU</h3></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/pos">
                        <i className='fas fa-pen'></i>&nbsp;&nbsp;POINT OF SALE (POS)
                    </Nav.Link>
                    <hr></hr>
                    <Nav.Link href="/product">
                        <i className="fas fa-cart-plus"></i>&nbsp;PRODUCTS
                    </Nav.Link>
                    <hr></hr>
                    <Nav.Link href="/sales">
                        <i className="fas fa-dollar-sign"></i>&nbsp;&nbsp;&nbsp;SALES
                    </Nav.Link>
                    <hr></hr>
                    <Nav.Link href="/receivable">
                        <i className="fas fa-hand-holding-usd"></i>&nbsp;RECEIVABLE
                    </Nav.Link>
                    <hr></hr>
                    <Nav.Link href="/vendor">
                        <i className="fas fa-exchange-alt"></i>&nbsp;&nbsp;VENDOR
                    </Nav.Link>
                    <hr></hr>
                    <Nav.Link href="/purchases">
                        <i className="fas fa-cart-plus"></i>&nbsp;&nbsp;PURCHASES
                    </Nav.Link>
                    <hr></hr>
                    <Nav.Link href="/expenses">
                        <i className="fas fa-coins"></i>&nbsp;&nbsp;EXPENSES
                    </Nav.Link>
                    <hr></hr>
                    <Nav.Link href="/report">
                        <i className="fas fa-file"></i>&nbsp;&nbsp;REPORTS
                    </Nav.Link>
                    <hr></hr>
                    <Nav.Link href="/users">
                        <i className="fas fa-users"></i>&nbsp;USERS
                    </Nav.Link>
                    <hr></hr>
                    <Nav.Link href="/profile">
                        <i className='fas fa-address-book'></i>&nbsp;&nbsp;PROFILE
                    </Nav.Link>
                    <hr></hr>
                    <Nav.Link href="/logout">
                        <i className="fas fa-sign-out-alt"></i>&nbsp;LOGOUT
                    </Nav.Link>
                    <hr></hr>
                    
                </Nav>
            </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
    </Navbar>
    </>


  )
};


Sidebar.defaultProps = {   
    title: 'BIS APP',
}

export default Sidebar;