import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './component/navbar/navbar.compnent';
import HomePage from './pages/homepage/homepage.component';
import Footer from './component/footer/footer.componet';
import SignInPage from './pages/sigin/signin.component';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import ProtectedRoute from './ProtectedRoute';

const App = ({ currentUser }) => {
  return (
    <div>
      <NavBar/>
        <Switch>
            <Route exact path='/'  render={() => currentUser ? (<Redirect to="/profile"/>) : (<HomePage/>)} /> 
            <Route path='/signin' render={() => currentUser ? (<Redirect to="/profile"/>) : (<SignInPage/>)} />
            <ProtectedRoute currentUser={currentUser} exact path='/profile' component="" /> 
            <ProtectedRoute currentUser={currentUser} path='/profile/:profileId' component="" />
        </Switch>
      <Footer/>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  
})

export default connect(mapStateToProps)(App);
