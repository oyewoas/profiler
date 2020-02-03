/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, Suspense } from 'react'
import './profile.styles.scss'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../redux/profile/profile.actions'
import { getProfile } from '../../services/profile.services'
import { createStructuredSelector } from 'reselect'
import ProfileView from '../../component/profile-view/profile-view.component'
import { selectCurrentProfile, selectProfileLoading } from '../../redux/profile/profile.selector'
import { selectCurrentUser } from '../../redux/user/user.selector'
import Loader from '../Loader/loader'


const Profile = ({ isLoading, getCurrentProfile, currentProfile, currentUser }) => {
    useEffect(() => {
        getProfile(getCurrentProfile, currentUser.data.token)
    }, [])
    return(
        <div className="profile">
            <div className="container">
            { isLoading ? (
                    <Loader isLoading={isLoading}/>
                ) : (
                    <Suspense fallback={<Loader isLoading={isLoading}/>}>
                        <ProfileView profile={currentProfile}/>
                    </Suspense>
                )
            }
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentProfile: selectCurrentProfile,
    currentUser: selectCurrentUser,
    isLoading: selectProfileLoading
})

const mapDispatchToProps = dispatch => ({
    getCurrentProfile: data => dispatch(getCurrentProfile(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)