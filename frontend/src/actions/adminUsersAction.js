import axios from 'axios';
import {  
  ADMIN_USERS_LIST_REQUEST,
  ADMIN_USERS_LIST_SUCCESS,
  ADMIN_USERS_LIST_FAIL
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