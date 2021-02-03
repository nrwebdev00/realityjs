import axios from 'axios';
import {
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_PROFILE_VIEW_FAIL,
  USER_PROFILE_VIEW_REQUEST,
  USER_PROFILE_VIEW_SUCCESS
} from './types.js';

export const logout = () => (dispatch) =>{
  dispatch({ type: USER_LOGOUT })
}

export const register = (name, email, password) => async(dispatch)=>{
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    })
    const config = {
      headers:{
        'Content-Type':'application/json',
      },
    }
    const { data } = await axios.post('/api/users/register',{
      name, email, password }, config )
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const login = ( email, password ) => async(dispatch) =>{
  try {
    dispatch({
      type: USER_LOGIN_REQUEST
    })
    const config = {
      headers: {
        'Content-Type':'application/json',
      },
    }
    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    )
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    })
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message  
    })
  }
}

export const userProfileView = () => async(dispatch, getState) =>{
  try {
    dispatch({
      type: USER_PROFILE_VIEW_REQUEST,
    })
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.get(`/api/users/profile`, config)
    dispatch({
      type: USER_PROFILE_VIEW_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type:USER_PROFILE_VIEW_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}