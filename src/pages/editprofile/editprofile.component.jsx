/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import {Link} from 'react-router-dom'
import './editprofile.styles.scss'
import FormInput from '../../component/form-input/form-input.component'
import CustomButton from '../../component/custom-button/custom-button.component'
import useFormValidation from '../../component/use-formvalidation/use-formvalidation.component'
import FORM_VALIDATION_RULES from '../../utils/form-validation-rules'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateProfile } from '../../redux/profile/profile.actions'
import { profileUpdate } from '../../services/profile.services'
import { selectCurrentProfile } from '../../redux/profile/profile.selector'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { createStructuredSelector } from 'reselect'
import dateformat from 'dateformat';

const {editProfile} = FORM_VALIDATION_RULES

const EditProfilePage = ({ updateProfile, history, currentProfile, currentUser }) => {
    const {_id, profileImg, address, email, date_of_birth, phone_number, security_question, answer } = currentProfile
    const initialFormState = {profileImg, phone_number, address, date_of_birth, security_question, answer, email};
    
    const updateProfileFunction = () => {
        profileUpdate(updateProfile, values, _id, currentUser.data.token, history)
    }

    
    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        isSubmitting
    } = useFormValidation(initialFormState, editProfile, updateProfileFunction);

        return (
            <div className="editprofile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center pb-5">
                            <Link to="/profile"><CustomButton>Return to Profile</CustomButton></Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-sm-12 col-lg-2"> </div>
                        <div className="col-md-8 col-sm-12 col-lg-8">
                            <div className="legend"><span>Edit your profile</span></div>
                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                <div className="row">
                                    <div className="form-group col-md-4 avartar">
                                        <img  className="profile-img" alt=""  src={ typeof values.profileImg === 'string' ? values.profileImg : URL.createObjectURL(values.profileImg) } />
                                        <FormInput title="Pick Profile Image" type="file" className="profile-img-input"  handleChange={handleChange} name="profileImg" accept=".jpg, .jpeg, .png" />
                                        {errors.profileImg && <p className="error-text">{errors.profileImg}</p>}     
                                    </div>
                                    <div className="form-group col-md-8">
                                    </div>
                                    <div className="form-group col-md-6">
                                        <FormInput value={values.phone_number} handleChange={handleChange} onBlur={handleBlur} maxLength="12" minLength="6" label="Phone number" name="phone_number" type="tel" required/>
                                        {errors.phone_number && <p className="error-text">{errors.phone_number}</p>}
                                    </div>
                                    <div className="form-group col-md-6">
                                        <FormInput value={values.address} handleChange={handleChange} onBlur={handleBlur} label="Address" name="address" type="text" required/>
                                        {errors.address && <p className="error-text">{errors.address}</p>}
                                    </div>
                                    <div className="form-group col-md-6">
                                        <FormInput  value={values.email} handleChange={handleChange} onBlur={handleBlur} label="Email" name="email" type="email" required/>
                                        {errors.email && <p className="error-text">{errors.email}</p>}
                                    </div>
                                    <div className="form-group col-md-6">
                                        <FormInput value={dateformat(values.date_of_birth, 'isoDate')} handleChange={handleChange} onBlur={handleBlur} label="Date Of Birth" name="date_of_birth" type="date" required/>
                                        {errors.date_of_birth && <p className="error-text">{errors.date_of_birth}</p>}
                                    </div>
                                    <div className="form-group col-md-6 mt-5 pt-2">
                                    <select className="form-control select" onChange={handleChange} onBlur={handleBlur} name="security_question">
                                        <option defaultValue>{security_question}</option>
                                        <option value="what is your mothers maiden name">What is your mothers maiden name</option>
                                        <option value="what is your favourite color">What is your favourite color</option>
                                        <option value="what is your favourite car">What is your favourite car</option>
                                    </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <FormInput value={values.answer === "" ? answer : values.answer} handleChange={handleChange} onBlur={handleBlur} label="Answer" name="answer" type="text" required/>
                                        {errors.answer && <p className="error-text">{errors.answer}</p>}
                                    </div>
                                </div>
                                <div className="button">
                                    <CustomButton disabled={isSubmitting} type="submit">Update Profile</CustomButton>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-2 col-sm-12 col-lg-2"></div>
                    </div>
                    
                </div>
            </div>
    )
}

const mapDispatchToProps = dispatch => ({
    updateProfile: profile => dispatch(updateProfile(profile)),
})

const mapStateToProps = createStructuredSelector({
    currentProfile: selectCurrentProfile,
    currentUser: selectCurrentUser,
})



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditProfilePage))