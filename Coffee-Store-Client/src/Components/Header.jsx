import React from 'react';
import {Navbar } from 'flowbite-react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            
            <Navbar
                fluid={true}
                rounded={true}
            >
                
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/"
                        active={true}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link
                        
                    >
                       <Link to='/addCoffee'> Add Coffee</Link>
                    </Navbar.Link>
                    <Navbar.Link >
                       <Link to='/updateCoffee'>Update Coffee</Link>
                    </Navbar.Link>
                    <Navbar.Link >
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link >
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            

        </div>
    );
};

export default Header;