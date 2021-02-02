import React from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <div className='header-wrapper'>
          <Navbar.Brand href='/'>Reality</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-left'>
              <NavItem>
                <NavLink href='/home/'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/about/'>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='listings'>Featured Listings</NavLink>
              </NavItem>
            </Nav>
            <Nav className='ml-auto'>
                <NavItem>
                  <NavLink href='/register'>Register</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='/login'>Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Admin</NavLink>
                </NavItem>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  )
}

export default Header
