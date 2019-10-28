import React, { useState } from 'react';


import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, Container } from 'reactstrap';


function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    return (
        <div>
            <Navbar color="light" light expand="md" className="navbar-dark bg-dark">
                <Container>
                    <NavbarBrand href="/">MovieApp</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>


                        </Nav>

                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
