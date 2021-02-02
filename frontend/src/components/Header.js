import React from 'react';
import { Navbar, Nav, NavItem, NavLink, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { FaUser, FaUserPlus } from 'react-icons/fa'
import { logout } from '../actions/userActions.js';

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const { isStaff } = userInfo 


  const logoutHandler = () =>{
    dispatch(logout())
  }

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
                {localStorage.getItem('userInfo') ? (
                  <NavDropdown title={userInfo.name} id='username'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    {isStaff ? (
                      <LinkContainer to='/staff'>
                        <NavDropdown.Item>Staff Dashboard</NavDropdown.Item>
                      </LinkContainer>
                    ):(null)}
                    <NavDropdown.Item onClick={logoutHandler} >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ):(
                  <LinkContainer to='/login'>
                    <Nav.Link id='a-login'>
                      <FaUser style={{fontSize: '1.5rem'}} />
                      <span id='span-login'>Login</span>
                    </Nav.Link>
                  </LinkContainer>
                )
                }
                </NavItem>
                <NavItem>
                  {localStorage.getItem('userInfo') ? (null) : (
                    <LinkContainer to='/register'>
                      <Nav.Link id='a-register'>
                        <FaUserPlus style={{fontSize: '1.75rem'}}/>
                        <span id='span-register'>Register</span>
                      </Nav.Link>
                    </LinkContainer>
                  )}
                </NavItem>
                {/* <NavItem>
                  {isStaff ? (
                    <NavDropdown title='Staff' id='staffMenu'>
                      <LinkContainer to='/staff'>
                        <NavDropdown.Item>Staff Dashboard</NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                  ) : (null)}
                </NavItem> */}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  )
}

export default Header
