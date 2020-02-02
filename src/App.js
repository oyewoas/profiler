import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './component/navbar/navbar.compnent';
import HomePage from './pages/homepage/homepage.component';
import Footer from './component/footer/footer.component';
import SignInPage from './pages/signin/signin.component';
import SignUpPage from './pages/signup/signup.component';
import ProfilePage from './pages/profilepage/profilepage.component';

import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import ProtectedRoute from './ProtectedRoute';
import NotFound from './pages/not-found/not-found.component';

const App = ({ currentUser }) => {
  return (
    <div>
      <NavBar/>
        <Switch>
            <Route exact path='/'  render={() => currentUser ? (<Redirect to="/profile"/>) : (<HomePage/>)} /> 
            <Route path='/signin' render={() => currentUser ? (<Redirect to="/profile"/>) : (<SignInPage/>)} />
            <Route path='/signup' render={() => currentUser ? (<Redirect to="/profile"/>) : (<SignUpPage/>)} />
            <ProtectedRoute currentUser={currentUser} exact path='/profile' component={ProfilePage} /> 
            <ProtectedRoute currentUser={currentUser} path='/profile/:profileId' component="" />
            <Route path='*' exact={true} component={NotFound} />
        </Switch> 
      <Footer/>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  
})

export default connect(mapStateToProps)(App);
