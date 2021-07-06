import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
// import { useState } from "react";

import logo from "../assets/logo.png";

export default function NavBar() {
  return (
    <>
      <Navbar fixed="top" expand="lg">
        <Navbar.Brand href="/" className="icon">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mr-auto">
            <NavLink to="/sell" className="link" activeClassName="link active">
              For Companies
            </NavLink>
            <NavLink
              to="/upload"
              className="link"
              activeClassName="link active"
            >
              For Candidates
            </NavLink>
            <NavLink
              to="/feature"
              className="link"
              activeClassName="link active"
            >
              DE
            </NavLink>
            <NavLink
              to="/experience"
              className="link"
              activeClassName="link active"
            >
              EN
            </NavLink>
            <NavLink to="/login" className="link" activeClassName="link active">
              Login
            </NavLink>
            <NavLink
              to="/"
              className="link signupLink"
              activeClassName="link active"
            >
              SignUp
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
