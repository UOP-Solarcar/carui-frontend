'use client'
import Link from "next/link";
import { Nav, Navbar, NavDropdown, NavItem, NavLink } from "react-bootstrap";

export function Navigation() {
	const handleSelect = (eventKey: any) => {};

	return (
		<>
			<Nav variant="pills" activeKey="1" onSelect={handleSelect}>
				<Nav.Item>
					<Link href="/" passHref legacyBehavior>
						<Nav.Link eventKey="1">Home</Nav.Link>
					</Link>
				</Nav.Item>
				<Nav.Item>
					<Link href="#2" passHref legacyBehavior>
						<Nav.Link eventKey="2" title="Item">
							Sub Menu
						</Nav.Link>
					</Link>
				</Nav.Item>
				<NavDropdown title="More" id="nav-dropdown">
					<NavDropdown.Item eventKey="4.1">Console</NavDropdown.Item>
					<NavDropdown.Item eventKey="4.2">Log</NavDropdown.Item>
					<NavDropdown.Item eventKey="4.3">Settings</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item eventKey="4.4">Debug</NavDropdown.Item>
				</NavDropdown>
			</Nav>
		</>
	);
}
