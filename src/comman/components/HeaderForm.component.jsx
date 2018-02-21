import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const HeaderLinks = (props) => {
  if (props.isLoggedIn) {
    return (
      <Nav pullRight>
        <LinkContainer to="/signout">
          <NavItem>Sign Out</NavItem>
        </LinkContainer>
      </Nav>
    )
  } else {
    return (
      <Nav pullRight>
        <LinkContainer to="/signin">
          <NavItem>Sign In</NavItem>
        </LinkContainer>
        <LinkContainer to="/signup">
          <NavItem>Sign Up</NavItem>
        </LinkContainer>
      </Nav>
    )
  }
};

export const HeaderForm = (props) => (
  <div>
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Awaas</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <HeaderLinks
          isLoggedIn={props.isLoggedIn}
        />
      </Navbar.Collapse>
    </Navbar>
  </div>
);