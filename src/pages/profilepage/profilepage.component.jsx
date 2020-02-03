import React from 'react';
import Profile from '../../component/profile/profile.component'
import { Route } from 'react-router-dom';

const ProfilePage = ({ match }) => (
    <div>
      <Route exact path={`${match.path}`} component={Profile}/>
    </div>
)



export default ProfilePage