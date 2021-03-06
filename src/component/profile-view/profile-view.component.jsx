import React from 'react'
import './profile-view.styles.scss'
import { Link, withRouter } from 'react-router-dom'
import CustomButton from '../custom-button/custom-button.component'
import dateformat from 'dateformat';

const ProfileView = ({profile, match}) => {
    const {profileImg, address, email, date_of_birth, phone_number, security_question, answer } = profile

    return(
        <div className="profile-view">
        <div className="row profile-container">
            <div className="col-md-2"></div>
            <div className="col-md-8 ">
                <div className="row">
                    <div className="col-md-6"><h1 className="profile-heading">Welcome!</h1></div>
                    <div className="col-md-6 text-right">  <Link to={`${match.path}/edit`}> <CustomButton>Edit</CustomButton> </Link> </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4 text-center">
                        <img src={profileImg} alt="Profile Img" className="img-fluid profile-pics"/>
                    </div>
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-6 text-center">
                        <h1 className="profile-heading">Phone Number</h1>
                        <p className="profile-text">{phone_number}</p>  
                    </div>
                    <div className="col-md-6 text-center">
                        <h1 className="profile-heading">Address</h1>
                        <p className="profile-text">{address}</p>
                    </div>
                    <div className="col-md-6 text-center">
                        <h1 className="profile-heading text-center">Email</h1>
                        <p className="profile-text">{email}</p>  
                    </div>
                    <div className="col-md-6 text-center">
                        <h1 className="profile-heading text-center">Date of Birth</h1>
                        <p className="profile-text">{dateformat(date_of_birth, 'longDate' )}</p>
                    </div>
                    <div className="col-md-6 text-center">
                        <h1 className="profile-heading text-center">Security Question</h1>  
                        <p className="profile-text">{security_question}</p>
                    </div>
                    <div className="col-md-6 text-center">
                        <h1 className="profile-heading">Answer</h1>  
                        <p className="profile-text">{answer}</p>
                    </div>
                </div>
            </div>
            <div className="col-md-2"></div>

        </div>
        </div>
    )
}


export default withRouter(ProfileView)