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
                <NavLink href='/'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/about'>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/listings'>Featured Listings</NavLink>
              </NavItem>
            </Nav>
            { userInfo ? (
              <Nav className='ml-auto'>
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  {userInfo.isStaff ? (
                    <LinkContainer to='/staff'>
                      <NavDropdown.Item>Staff Page</NavDropdown.Item>
                    </LinkContainer>
                  ):(null)}
                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              ):(
                <Nav className='ml-auto'>
                  <NavItem>
                    <NavLink href='/login'>
                      Login{'  '}
                      <FaUser style={{ fontSize: '1.35rem' }} />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href='/register'>
                      Register{'  '}
                      <FaUserPlus style={{ fontSize: '1.6rem'}} />  
                    </NavLink>
                  </NavItem>
                </Nav>
              )}
              {/* <Nav className='ml-auto'>
                <NavItem>
                  
                </NavItem> 
            </Nav> */}
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  )
}

export default Header
