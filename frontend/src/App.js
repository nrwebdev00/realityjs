import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Components
import Header from './components/Header.js';

//Pages
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Profile from './pages/Profile.js';
import Staff from './pages/Staff.js';
import UserList from './pages/UserList.js';
import UserDetail from './pages/UserDetail.js';
import About from './pages/About.js';
import RealtorDetail from './pages/RealtorDetail.js';
import Listings from './pages/Listings.js';
import ListingsDetails from './pages/ListingsDetails.js';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/listings/details' component={ListingsDetails} />
          <Route path='/listings' component={Listings} />
          <Route path='/realtor/detail' component={RealtorDetail} />
          <Route path='/about' component={About} />
          <Route path='/staff/userList/:id' component={UserDetail} />
          <Route path='/staff/userList' component={UserList}/>
          <Route path='/staff' component={Staff} />
          <Route path='/profile' component={Profile} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
