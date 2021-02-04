import {
  ADMIN_USERS_LIST_FAIL,
  ADMIN_USERS_LIST_REQUEST,
  ADMIN_USERS_LIST_RESET,
  ADMIN_USERS_LIST_SUCCESS
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