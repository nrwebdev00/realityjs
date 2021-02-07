import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import AdminAdNewUserModal from '../modals/AdminAdNewUserModal.js'

// Custom Modal Styles
const customStyle ={
  content:{
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '55vw',
    height                : '75vh',
    backgroundColor       : '#919aa1',
    border                : '2px solid black',
    borderRadius          : '7px'
  }
}

const StaffNavBar = ({ history }) => {
  const [ isStaff, setIsStaff ] =useState(null);
  const [ isAdmin, setIsAdmin ] =useState(null);
  const [ modalIsOpen, setIsOpen ] = useState(false);

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

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
          {isAdmin ? (
            <li>
              <Button 
                className='staff-nav-btn'
                onClick={openModal}
              >
                Add New User
              </Button>
              <Modal 
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyle}
              ariaHideApp={false}
            >
              <AdminAdNewUserModal closeModal={closeModal} />
            </Modal>
            </li>
          ) : null }
          {isStaff ? (
            <li>
              <Button className='staff-nav-btn'>Staff</Button>
            </li>
          ) : null}
      </ul>
  )
}

export default StaffNavBar
