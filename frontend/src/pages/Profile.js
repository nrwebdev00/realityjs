import React, { useState, useEffect } from 'react'
import {Container, Row, Col, Table} from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import EditProfileModal from '../modals/EditProfileModal.js';

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
    height                : '65vh',
    backgroundColor       : '#919aa1',
    border                : '2px solid black',
    borderRadius          : '7px'
  }
}


const Profile = ({ location, history}) => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ modalIsOpen, setIsOpen ] = useState(false);

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  console.log( name, email )

  useEffect(() =>{
    if(!userInfo){
      history.push('/login')
    }else{
      setName(userInfo.name)
      setEmail(userInfo.email)
    }
  }, [userInfo, history])

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center my-5">Profile Page</h1>
        </Col>      
      </Row>
      <Row>
        <Col>
          <div className='edit-profile'>
            <h1 className='text-center my-1'>Profile View</h1>
            <Table>
              <tbody>
                <tr>
                  <th>Name:</th>
                  <th>{name}</th>
                  <th style={{ cursor: 'pointer'}}><FaEdit onClick={openModal} /></th>
                </tr>
                <tr>
                  <th>Email:</th>
                  <th>{email}</th>
                  <th style={{ cursor: 'pointer'}} ><FaEdit onClick={openModal} /></th>
                </tr>
                <tr>
                  <th>Password:</th>
                  <th>********</th>
                  <th style={{ cursor: 'pointer'}}><FaEdit onClick={openModal} /></th>
                </tr>
              </tbody>
            </Table>
            <Modal 
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyle}
            >
              <EditProfileModal closeModal={closeModal} />
            </Modal>
          </div>
        </Col>
        <Col>
         <div className='request-contacts'>
           <h1>Contact Requested for</h1>
          </div> 
        </Col>
      </Row>
    </Container>
  )
}

export default Profile
