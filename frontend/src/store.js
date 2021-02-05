import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//Import Reducers
import { 
  userLoginReducer,
  userRegisterReducer,
  userProfileUpdateReducer
} from './reducers/userReducers.js';

import{
  adminUsersListReducer,
  adminUserDetailReducer,
  adminUserUpdateReducer,
} from './reducers/adminUsersReducers.js';

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userProfileUpdate: userProfileUpdateReducer,
  adminUsersList: adminUsersListReducer,
  adminUserDetail: adminUserDetailReducer,
  adminUserUpdate: adminUserUpdateReducer
})

const userInfoFromLocalStorage = () => {
  if(localStorage.getItem('userInfo')){
    return JSON.parse(localStorage.getItem('userInfo'))
  } else {
    return null;
  }
}
const initialState = {
  userLogin: {
    userInfo: userInfoFromLocalStorage()
  }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;