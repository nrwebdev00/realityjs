import { 
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGOUT,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_PROFILE_VIEW_FAIL,
  USER_PROFILE_VIEW_REQUEST,
  USER_PROFILE_VIEW_SUCCESS,
 } from '../actions/types.js';


 export const userRegisterReducer = (state = {}, action ) =>{
   switch(action.type){
     case USER_REGISTER_REQUEST:
       return {loading: true}
      case USER_REGISTER_SUCCESS:
        return{
          loading: false,
          userInfo: action.payload
        }
      case USER_REGISTER_FAIL:
        return{
          loading: false,
          error: action.payload
        }
      case USER_LOGOUT:
        return {}
      default:
        return state
   }
 }

 export const userLoginReducer = (state = {}, action) =>{
   switch(action.type){
     case USER_LOGIN_REQUEST:
       return{
         loading: true
       }
      case USER_LOGIN_SUCCESS:
        return{
          loading: false,
          userInfo: action.payload
        }
      case USER_LOGIN_FAIL:
        return{
          loading: false,
          error: action.payload
        }
      default: return state
   }
 }
 export const userProfileViewReducer = (state = { user: {} }, action ) =>{
   switch(action.type){
     case USER_PROFILE_VIEW_REQUEST:
       return{
         ...state,
         loading: true
       }
      case USER_PROFILE_VIEW_SUCCESS:
        return{
          loading: false,
          user: action.payload
        }
      case USER_PROFILE_VIEW_FAIL:
        return{
          loading: false,
          error: action.payload
        }
      default: return state;
   }
 }