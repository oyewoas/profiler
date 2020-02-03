/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import './profile.styles.scss'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../redux/profile/profile.actions'
import { getProfile } from '../../services/profile.services'
import { createStructuredSelector } from 'reselect'
import ProfileView from '../../component/profile-view/profile-view.component'
import { selectCurrentProfile } from '../../redux/profile/profile.selector'
import { selectCurrentUser } from '../../redux/user/user.selector'


const Profile = ({ getCurrentProfile, currentProfile, currentUser }) => {
    useEffect(() => {
        getProfile(getCurrentProfile, currentUser.data.token)
    }, [])
    return(
        <div className="profile">
            <div className="container">
            {
                currentProfile ? (<ProfileView profile={currentProfile}/>) : (<span>Cannot retreive user profile</span>)
            }
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentProfile: selectCurrentProfile,
    currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
    getCurrentProfile: data => dispatch(getCurrentProfile(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)