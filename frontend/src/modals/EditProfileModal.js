import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message.js';
import Loader from '../components/Loader.js';
import FormContainer from '../components/FormContainer.js';
import { updateProfile } from '../actions/userActions.js';


const EditProfileModal = ({ history, closeModal }) => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState(null);

  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin)
  const {  userInfo } = userLogin

  const userProfileUpdate = useSelector(state => state.userProfileUpdate)
  const { 
    loading: loadingUpdate, 
    error: errorUpdate, 
   } = userProfileUpdate;

    useEffect(()=>{
      if(userLogin){
        setName(userInfo.name);
        setEmail(userInfo.email);
      } else {
        history.push('/login');
      }
    }, [ userLogin, setName, setEmail, history, userInfo ])

    const submitHandler = e => {
      e.preventDefault();
      dispatch(updateProfile({
        name,
        email,
        password
      }))
      closeModal();
    }
  

  return (
    <div className='edit-profile-modal'>
      <div className='title-wrapper'>
        <h1 id='edit-profile-title'>Edit Profile</h1>
        <h1 id='edit-profile-close-btn' onClick={closeModal}>X</h1>
      </div>
        <FormContainer>
          {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
          {loadingUpdate && <Loader />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Edit Name</Form.Label>
              <Form.Control 
                type='text'
                placeholder={name}
                value={name}
                onChange={(e)=>setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='email'>
              <Form.Label>Edit Email</Form.Label>
              <Form.Control 
                type='email'
                placeholder={email}
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Row>
              <Col>
                Please note: if Change email address, your login will be new Email.
              </Col>
            </Row>
            <Form.Group controlId='password'>
              <Form.Label>Change Password</Form.Label>
              <Form.Control 
                type='password'
                placeholder='New Password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type='submit' variant='primary' id='edit-profile-btn'>
              Update Profile
            </Button>
          </Form>
        </FormContainer>
    </div>
  )
}

export default EditProfileModal
