import React, { Component } from "react";
import { Outlet} from "react-router-dom";
import Logo from "../images/logo/Indonesiaku.png"
import { Nav } from "react-bootstrap";

class Header extends Component {
	render() {
		return (
			<header>
				<nav >
					<a href="/" className="logo">
						<img src={Logo} alt="Logo Indonesiaku Apps" />
					</a>
					<Nav className="justify-content-end">
					<Nav.Item className="nav-list justify-content-end">
						<Nav.Link href="/" className="active nav-link" id="active">Destination</Nav.Link>
						<Nav.Link href="/Event" className="nav-link">Event</Nav.Link>
						<Nav.Link href="/Staycation" className="nav-link">Staycation</Nav.Link>
						<Nav.Link href="/UMKM" className="nav-link">UMKM</Nav.Link>
					</Nav.Item>
					</Nav>
				</nav>
	  
			<Outlet />
			</header>
		)
	}
}

export default Header;