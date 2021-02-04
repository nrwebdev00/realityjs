import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message.js';
import Loader from '../components/Loader.js';
import { listUser } from '../actions/adminUsersAction.js';
import StaffNavBar from '../components/StaffNavBar.js';
import { FaUserEdit } from 'react-icons/fa'

const UserList = ({ history }) => {
  const dispatch = useDispatch()

  const adminUsersList = useSelector(state => state.adminUsersList)
  const { loading, error, users } = adminUsersList
  
  console.log(users);
  
  return (
    <div>
      <StaffNavBar />
      <Container>
        <h1 className='text-center my-5'>View User's</h1>
        <ul className='user-list-options-wrapper'>
          <li>
            <Button 
              variant='primary' 
              className='list-options-btn' 
              onClick={() => dispatch(listUser('all'))} 
            >All Users</Button>
          </li>
          <li>
            <Button 
              variant='primary'
              className='list-options-btn'
              onClick={() => dispatch(listUser('realtor'))}
            >Realtor Users</Button>
          </li>
          <li>
            <Button 
              variant='primary'
              className='list-options-btn'
              onClick={()=>dispatch(listUser('staff'))}
            >Staff Users</Button>
          </li>
          <li>
            <Button 
              variant='primary'
              className='list-options-btn'
              onClick={()=>dispatch(listUser('admin'))}
            >Admin Users</Button>
          </li>
          <li>
            <Button 
              variant='danger'
              className='list-options-btn'
              onClick={()=>dispatch(listUser('notActive'))}
            >Not Active Users</Button>
          </li>
        </ul>
        <Table hover responsive className='table-lg'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {users ? (
              users.map((user) => (
                <tr key={user._id} >
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </td>
                  <td>
                    <LinkContainer 
                      to={`/staff/userList/${user._id}`}
                      style={{
                        cursor: 'pointer',
                        fontSize: '1.5rem'
                      }}
                    >
                      <FaUserEdit />
                    </LinkContainer>
                  </td>
                </tr>
              ))
            ): null }
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default UserList
