import React from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import './Navi.css';

export const Navigation = () => {
    return (
        <>
        <Navbar className='body tendiv5'>
        <Container className='kontejner'>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto tendiv5">
                <Nav.Link className="bl" href="/">Domů</Nav.Link>
                <Nav.Link className="bl" href="/hraci">Hráči</Nav.Link>
                <Nav.Link className="bl" href="/tymy">Týmy</Nav.Link>
                <Nav.Link className="bl" href="/stadiony">Stadiony</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>   
        <div className='tendiv6'>a</div>
        </>
    );
}