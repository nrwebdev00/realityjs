import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap'; 
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { login } from '../actions/userActions.js';

const Login = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (localStorage.getItem('userInfo')) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
    history.push('/')
  }

  return (
    <FormContainer>
      <h1 className='my-5'>Log In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control 
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Row>
          <Col>
            Need help to login ?{' '}
            <Link to={redirect ? `/forgot?redirect=${redirect}`: '/forgot'}>
              Forgot Password
            </Link>
          </Col>
        </Row>
        <Button type='submit' variant='primary' className='login-btn'>
          Sign In
        </Button>
        <Row className='my-3'>
          <Col>
            New To Reality?{' '}
            <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
              Register with Reality
            </Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  )
}

export default Login