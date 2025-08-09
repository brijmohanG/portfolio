    import Container from 'react-bootstrap/Container';
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';
    import 'bootstrap/dist/css/bootstrap.min.css';

    export const ResponsiveNavbar = () => {
      return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Brijmohan Gautam</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="profile">Profile</Nav.Link>
                <Nav.Link href="education">Education</Nav.Link>
                <Nav.Link href="#pricing">Expirence</Nav.Link>
                <Nav.Link href="#picing">Project</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
