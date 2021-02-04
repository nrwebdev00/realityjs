import React, { useState, useEffect } from 'react';
import { Button, NavLink } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector } from 'react-redux';

const StaffNavBar = ({ history }) => {
  const [ isStaff, setIsStaff ] =useState(null);
  const [ isAdmin, setIsAdmin ] =useState(null);

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo }= userLogin;

  useEffect(()=>{
    if(userInfo){
      setIsStaff(userInfo.isStaff)
      setIsAdmin(userInfo.isAdmin)
    } else {
      history.push('/login')
    }
  }, [history, userInfo ])

  return (
      <ul className='staff-nav-btn-wrapper'>
          {isAdmin  ? (
            <li>
              <LinkContainer to='/staff/userList'>
                <Button className='staff-nav-btn'>View Users</Button>
              </LinkContainer>
            </li>
          ) : null}
          {isStaff ? (
            <li>
              <Button className='staff-nav-btn'>Staff</Button>
            </li>
          ) : null}
      </ul>
  )
}

export default StaffNavBar
