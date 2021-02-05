import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import FormContainer from '../components/FormContainer.js';
import { adminAddNewUser } from '../actions/adminUsersAction.js';
import Loader from '../components/Loader.js';
import Message from '../components/Message.js';

const AdminAdNewUserModal = ({ closeModal }) => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] =useState('');
    const [ isStaff, setIsStaff ] = useState(false);
    const [ isAdmin, setIsAdmin ] = useState(false);
    const [ isRealtor, setIsRealtor ] = useState(false);
    const [ isActive ] = useState(true);

    const dispatch = useDispatch();

    const adminUserAddNew = useSelector(state => state.adminUserAddNew)
    const { error, loading, success } = adminUserAddNew

    const user = {
        name,
        email,
        password,
        isStaff,
        isAdmin,
        isRealtor,
        isActive,
    }

    const submitHandler = e => {
        e.preventDefault();
        dispatch(adminAddNewUser(user))
        if(success){
            closeModal()
        }

    }

    return (
        <div className='add-new-user-modal'>
            <div className='add-new-title-wrapper'>
                <h1 id='add-new-title'>Add New User</h1>
                <h1 id='add-new-close-btn' onClick={closeModal}>X</h1>
            </div>
            <FormContainer>
                {loading && <Loader />}
                {error && <Message variant='danger'>{error}</Message>}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Enter Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type='email'
                            placeholder='Enter Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Label>Password TEMP:</Form.Label>
                        <Form.Control 
                            type='password'
                            placeholder='Enter temp Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='isStaff'>
                        <Form.Label>Is Staff</Form.Label>
                        <Form.Check 
                            type='checkbox'
                            label='Is Staff'
                            checked={isStaff}
                            onChange={(e) => setIsStaff(e.target.checked)}
                        ></Form.Check>
                    </Form.Group>
                    <Form.Group controlId='isRealtor'>
                        <Form.Label>Is Realtor</Form.Label>
                        <Form.Check 
                            type='checkbox'
                            label='Is Realtor'
                            checked={isRealtor}
                            onChange={(e) => setIsRealtor(e.target.checked)}
                        ></Form.Check>
                    </Form.Group>
                    <Form.Group controlId='isAdmin'>
                        <Form.Label>Is Admin</Form.Label>
                        <Form.Check 
                            type='checkbox'
                            label='Is Admin'
                            checked={isAdmin}
                            onChange={(e) => setIsAdmin(e.target.checked)}
                        ></Form.Check>
                    </Form.Group>
                    <Button 
                        variant='primary'
                        className='add-new-user-btn text-center my-3'
                        type='submit'
                    >Add New User</Button>
                </Form>
            </FormContainer>
       </div> 
    )
}

export default AdminAdNewUserModal
