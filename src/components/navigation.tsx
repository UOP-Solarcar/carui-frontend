import { Button, Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";

export default function Navigation() {
	return (
		<>
			<Navbar variant="dark" bg="dark" expand="lg">
				<Container fluid>
					<Navbar.Brand href="#">UOP Solar Car: Watcher</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll"/>
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: "100px" }}
							navbarScroll
						>
							<Nav.Link href="/">Home</Nav.Link>
						</Nav>
						<Form className="d-flex" onSubmit={(e) => {e.preventDefault(); localStorage.setItem("ip_addr", e.target.ip_holder.value.toString()) }}>
							<Form.Control
								placeholder="IP Example: 127.0.0.1"
								className="me-2"
								aria-label="IP Address"
								name="ip_holder"
							/>
							<Button variant="outline-success" type="submit">Connect</Button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}
