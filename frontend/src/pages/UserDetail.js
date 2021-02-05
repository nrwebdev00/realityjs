import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Container } from 'react-bootstrap';
import StaffNavbar from '../components/StaffNavBar.js';
import { adminUpdateUser } from '../actions/adminUsersAction.js';


const UserDetail = ({ history, location }) => {
  const { userProps } = location
  const dispatch = useDispatch();

  const [ id ] = useState(userProps._id);
  const [ name ] = useState(userProps.name);
  const [ email ] = useState(userProps.email);
  const [ isStaff, setIsStaff ] = useState(userProps.isStaff)
  const [ isAdmin, setIsAdmin ] = useState(userProps.isAdmin);
  const [ isRealtor, setIsRealtor ] = useState(userProps.isRealtor);
  const [ isActive, setIsActive ] = useState(!userProps.isActive);

  
  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(adminUpdateUser({ isStaff, isAdmin, isRealtor, isActive }, id))
      history.push('/staff/userList/')
  }

  return (
    <>
      <StaffNavbar />
      <Container>
        <h1 className='text-center my-5'>Edit User, {name}</h1>
        
        <div className='user-info-wrapper'>
          <div className='user-info-name'>
            {name}
          </div>
          <div className='user-info-email'>
            {email}
          </div>
        </div>
        <h4 className='text-center my-5'>Change User Settings for {name} below.</h4>
          <Form onSubmit={handleSubmit}>
            <ul className='role-selection-wrapper'>
              <li className='role-selection-li'>
                <Form.Group controlId='isStaff'>
                  <h2 className='text-center'>Staff</h2>
                  <Form.Control 
                    type='checkbox'
                    label='Staff'
                    checked={isStaff}
                    onChange={(e) => setIsStaff(e.target.checked)}
                  ></Form.Control>
                </Form.Group>               
              </li>
              <li className='role-selection-li'>
                <Form.Group controlId='isRealtor'>
                  <h2 className='text-center'>Realtor</h2>
                  <Form.Control 
                    type='checkbox'
                    label='Realtor'
                    checked={isRealtor}
                    onChange={(e) => setIsRealtor(e.target.checked)}
                  ></Form.Control>
                </Form.Group>
              </li>
              <li className='role-selection-li'>
                <Form.Group controlId='isAdmin'>
                  <h2 className='text-center'>Admin</h2>
                  <Form.Control 
                    type='checkbox'
                    label='Admin'
                    checked={isAdmin}
                    onChange={(e) => setIsAdmin(e.target.checked)}
                  ></Form.Control>
                </Form.Group>
              </li>
            </ul>
            <ul className='account-access-wrapper'>
              <li className='account-access-li'>
                <Form.Group controlId='isRealtor'>
                  <h2 className='text-center'>Inactive</h2>
                  <Form.Control 
                    type='checkbox'
                    label='Inactive'
                    checked={isActive}
                    onChange={(e) => setIsActive(e.target.checked)}
                  ></Form.Control>
                </Form.Group>
              </li>
              <li className='account-access-li'>
                <Button variant='danger' className='user-del-btn'>Delete {name}</Button>
              </li>
            </ul>
            <div className='update-user-btn-wrapper'>
              <Button variant='primary' type='submit' className='update-user-btn'>Update User</Button>
            </div>
          </Form>
      </Container>

    </>
  )
}

export default UserDetail
