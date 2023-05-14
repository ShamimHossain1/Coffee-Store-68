import React from 'react';
import {Navbar } from 'flowbite-react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div >
            
            <Navbar
            className='lg:py-10 lg:flex lg:justify-center bg-slate-200 '
                fluid={true}
                rounded={true}
            >
                
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/"
                        active={true}
                    >
                       <span className='lg:text-lg'> Home</span>
                    </Navbar.Link>
                    <Navbar.Link
                        
                    >
                      <Link className='lg:text-lg' to='/addCoffee'> Add Coffee</Link>
                    </Navbar.Link>
                    
                </Navbar.Collapse>
            </Navbar>
            

        </div>
    );
};

export default Header;