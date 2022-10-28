import React from "react";
import "./Navbar.css";
import Logo from "../images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="logo">
				<img src={Logo} alt="logo" />
			</div>
			<ul className="nav-menu">
				<li className="nav-item">
					<a href="/">Home</a>
				</li>
				<li className="nav-item">
					<a href="/">About</a>
				</li>
				<li className="nav-item">
					<a href="/">FAQ</a>
				</li>
				<li className="nav-item">
					<a href="/">Contact</a>
				</li>
			</ul>
			<div className="hamburger">
				<FaBars />
			</div>
		</div>
	);
};

export default Navbar;
