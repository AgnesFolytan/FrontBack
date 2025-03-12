import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
    return <>
        <Navbar variant="light" sticky="top" bg="light">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/AddNewConcert">Új koncert</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>
}