import './Header.css'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink  } from 'react-router-dom';

export default function Header() {
    return(
        <header>
            <Navbar expand="lg" variant="dark" className="bg-scheme">
                <Container fluid>
                    <Navbar.Brand className="text-bold">E-kandra</Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Link>
                            <NavLink exact to="/" className="link">Accueil</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/jobs" className="link">Offres de travail</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/add" className="link">Déposer une offre</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/about" className="link">A propos</NavLink>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}