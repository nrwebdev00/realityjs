import {
  ADMIN_USERS_LIST_FAIL,
  ADMIN_USERS_LIST_REQUEST,
  ADMIN_USERS_LIST_RESET,
  ADMIN_USERS_LIST_SUCCESS,
  ADMIN_USERS_DETAIL_REQUEST,
  ADMIN_USERS_DETAIL_FAIL,
  ADMIN_USERS_DETAIL_SUCCESS,
  ADMIN_USERS_UPDATE_REQUEST,
  ADMIN_USERS_UPDATE_SUCCESS,
  ADMIN_USERS_UPDATE_FAIL,
  ADMIN_USERS_ADD_NEW_REQUEST,
  ADMIN_USERS_ADD_NEW_SUCCESS,
  ADMIN_USERS_ADD_NEW_FAIL
} from '../actions/types.js';

export const adminUsersListReducer = (state = { users: [] }, action ) => {
  switch(action.type){
    case ADMIN_USERS_LIST_REQUEST:
      return{
        loading: true
      }
    case ADMIN_USERS_LIST_SUCCESS:
      return{
        loading: false,
        users: action.payload
      }
    case ADMIN_USERS_LIST_FAIL:
      return{
        loading: false,
        error: action.payload
      }
    case ADMIN_USERS_LIST_RESET:
      return{
        users: []
      }
    default: return state
  }
}

export const adminUserDetailReducer = ( state = { user: {} }, action ) =>{
  switch(action.type){
    case ADMIN_USERS_DETAIL_REQUEST:
      return{
        ...state,
        loading: true
      }
    case ADMIN_USERS_DETAIL_SUCCESS:
      return{
        loading: false,
        user: action.payload
      }
    case ADMIN_USERS_DETAIL_FAIL:
      return{
        loading: false,
        error: action.payload
      }
    default: return state
  }
}

export const adminUserUpdateReducer = ( state = { user: {} }, action ) => {
  switch(action.type){
    case ADMIN_USERS_UPDATE_REQUEST:
      return{
        loading: true
      }
    case ADMIN_USERS_UPDATE_SUCCESS:
      return{
        loading: false,
        success: true
      }
    case ADMIN_USERS_UPDATE_FAIL:
      return{
        loading: false,
        error: action.payload
      }
    default: return state
  }
}
export const adminUserAddNewReducer = (state = { user: {} }, action) => {
  switch(action.type){
    case ADMIN_USERS_ADD_NEW_REQUEST:
      return{
        loading: true
      }
    case ADMIN_USERS_ADD_NEW_SUCCESS:
      return{
        loading: false,
        success: true
      }
    case ADMIN_USERS_ADD_NEW_FAIL:
      return{
        loading: false,
        error: action.payload
      }
    default: return state
  }
}
