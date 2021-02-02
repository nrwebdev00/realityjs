import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Component Imports
import Header from './components/Header';

// Pages Imports
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/forgot' component={ForgotPassword} />
          <Route exact path='/' component={Home}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
