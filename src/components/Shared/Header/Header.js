import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Header = () => {

    const { goolelogin, user, error, logOut } = useAuth();

    return (
        <div className='container-fluid'>
            <Navbar bg="light" expand="lg" sticky="top" >
                <Container className='mx-auto my-2'><Link className='text-decoration-none text-muted' to="/home">
                    <Navbar.Brand href="#"> <img src='https://i.ibb.co/VSQZdsH/logo.png' alt="" srcset="" height='50' width='auto' fluid /><strong className='ms-3 text-primary'>Alt-Medic</strong>  </Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />

                    <Navbar.Collapse id="navbarScroll">

                        <Nav
                            className="ms-auto my-2 me-3 my-lg-0"
                            style={{ maxHeight: '200px' }}
                            navbarScroll
                        >
                            <Nav.Link><Link className='text-decoration-none text-muted' to="/home">Home</Link></Nav.Link>

                            <Nav.Link><Link className='text-decoration-none text-muted' to="/alldoctors">Doctors For Your Service</Link></Nav.Link>
                            <Nav.Link href='#facilities'><Link className='text-decoration-none text-muted' to="/home#facilities">Facilities</Link></Nav.Link>

                            <Nav.Link><Link className='text-decoration-none text-muted' to="/about">About Us</Link></Nav.Link>

                            <NavDropdown title="Others" id="navbarScrollingDropdown">
                                <NavDropdown.Item to="#action4" className='text-center' ><Link className='text-decoration-none text-muted' to="/home">Blog</Link></NavDropdown.Item>
                                <NavDropdown.Item to="#action3" className='text-center' ><Link className='text-decoration-none text-muted' to="/home">others</Link></NavDropdown.Item>

                                <NavDropdown.Divider />
                                <NavDropdown.Item to="#action5" className='text-center' >
                                    <Link className='text-decoration-none text-muted' to="/contact">Drop a suggestion</Link>
                                </NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link><Link className='text-decoration-none text-muted' to="/contact">Contact Us</Link></Nav.Link>
                        </Nav>


                        {
                            user?.displayName || <div>
                                <Link to='/register'><Button className='mx-3 my-2' variant="outline-primary">Register/Login</Button></Link>
                            </div>
                        }

                        {
                            user?.email &&
                            <Button onClick={logOut} className='px-4 mb-2 ms-3 rounded-pill header-btn' variant="outline-primary">LogOut</Button>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;