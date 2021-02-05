import axios from 'axios';
import {  
  ADMIN_USERS_LIST_REQUEST,
  ADMIN_USERS_LIST_SUCCESS,
  ADMIN_USERS_LIST_FAIL,
  ADMIN_USERS_DETAIL_FAIL,
  ADMIN_USERS_DETAIL_REQUEST,
  ADMIN_USERS_DETAIL_SUCCESS,
  ADMIN_USERS_UPDATE_FAIL,
  ADMIN_USERS_UPDATE_SUCCESS,
  ADMIN_USERS_UPDATE_REQUEST
  
} from './types.js';

export const listUser = ( role = 'all' ) => async( dispatch, getState ) => {
  try {
    dispatch({
      type: ADMIN_USERS_LIST_REQUEST,
    })

    const {
      userLogin: { userInfo } 
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/users/${role}`, config)

    dispatch({
      type: ADMIN_USERS_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ADMIN_USERS_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const getUserDetails = (id) => async ( dispatch, getState ) =>{
  try {
    dispatch({
      type: ADMIN_USERS_DETAIL_REQUEST,
    })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.get(`/api/users/single/${id}`, config)
    dispatch({
      type: ADMIN_USERS_DETAIL_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ADMIN_USERS_DETAIL_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const adminUpdateUser = (user, id) => async (dispatch, getState) =>{
  try {
    dispatch({
      type: ADMIN_USERS_UPDATE_REQUEST,
    })
    const { userLogin: { userInfo }, } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      },
    }
    await axios.put(`/api/users/single/${id}`, user, config )
    dispatch({
      type: ADMIN_USERS_UPDATE_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: ADMIN_USERS_UPDATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.response
    })
  }
}