import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link, NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './style.css';



function Navigation() {

    const activeLink = "bg-activelink shadow rounded-5";
    const normalLink = "";

    return (
        <Navbar className="navbarBG shadow" collapseOnSelect fixed="top" variant="dark" expand="lg" style={{ backgroundImage: `linear-gradient(#2a2a72,#009ffd)` }}>
            <Container>
                <Link to="/"><img
                    src="logoPokemon.png"
                    className="overlapping-logo"
                    alt="Logo"
                /></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border border-1 m-1" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="marginNavbar my-2 my-lg-0 gap-4" style={{ fontFamily: `Myfont-Exo` }}>
                        <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}><Button className="navbarHover border-0" variant="outline-transparent text-white" >HOME</Button>{' '}</NavLink>
                        <NavLink to="/Pokedex" className={({ isActive }) => (isActive ? activeLink : normalLink)}><Button className="navbarHover border-0" variant="outline-transparent text-white">POKEDEX</Button>{' '}</NavLink>
                        <NavLink to="/News" className={({ isActive }) => (isActive ? activeLink : normalLink)}><Button className="navbarHover border-0" variant="outline-transparent text-white">NEWS</Button>{' '}</NavLink>
                        <NavLink to="/About" className={({ isActive }) => (isActive ? activeLink : normalLink)}><Button className="navbarHover border-0" variant="outline-transparent text-white">ABOUT</Button>{' '}</NavLink>
                        <NavLink to="/Contact" className={({ isActive }) => (isActive ? activeLink : normalLink)}><Button className="navbarHover border-0" variant="outline-transparent text-white">CONTACT</Button>{' '}</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;