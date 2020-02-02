import React from 'react'

import './signup.styles.scss'
import FormInput from '../../component/form-input/form-input.component'
import CustomButton from '../../component/custom-button/custom-button.component'
import useFormValidation from '../../component/use-formvalidation/use-formvalidation.component'
import FORM_VALIDATION_RULES from '../../utils/form-validation-rules'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUpUser } from '../../redux/user/user.actions'
import { userSignUp } from '../../services/user.services'
import profileImage from '../../assets/img/profile.png'

const {signup} = FORM_VALIDATION_RULES

const SignUpPage = ({ signUpUser, history }) => {
    const initialFormState = {profileImg: "", phone_number: "", address: "", date_of_birth: "", security_question:"", answer: "", email: "", password: "", confirm_password: "" };

    const signupFunction = () => {
        userSignUp(signUpUser, values, history)
    }
    
    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        isSubmitting
    } = useFormValidation(initialFormState, signup, signupFunction);

        return (
            <div className="signup">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-sm-12 col-lg-2"></div>
                        <div className="col-md-8 col-sm-12 col-lg-8">
                            <div className="legend"><span>Create your profile</span></div>
                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                <div className="row">
                                    <div className="form-group col-md-4 profile">
                                        <img  className="profile-img" alt="" src={values.profileImg === "" ? profileImage : URL.createObjectURL(values.profileImg)} />
                                        <FormInput title="Pick Profile Image" type="file" className="profile-img-input"  handleChange={handleChange} name="profileImg" accept=".jpg, .jpeg, .png" required/>
                                        {errors.profileImg && <p className="error-text">{errors.profileImg}</p>}
                                           
                                    </div>
                                    <div className="form-group col-md-8"></div>
                                    <div className="form-group col-md-6">
                                        <FormInput value={values.phone_number} handleChange={handleChange} onBlur={handleBlur} maxLength="12" minLength="6" label="Phone number" name="phone_number" type="tel" required/>
                                        {errors.phone_number && <p className="error-text">{errors.phone_number}</p>}
                                    </div>
                                    <div className="form-group col-md-6">
                                        <FormInput value={values.address} handleChange={handleChange} onBlur={handleBlur} label="Address" name="address" type="text" required/>
                                        {errors.address && <p className="error-text">{errors.address}</p>}
                                    </div>
                                    <div className="form-group col-md-6">
                                        <FormInput value={values.email} handleChange={handleChange} onBlur={handleBlur} label="Email" name="email" type="email" required/>
                                        {errors.email && <p className="error-text">{errors.email}</p>}
                                    </div>
                                    <div className="form-group col-md-6">
                                        <FormInput value={values.date_of_birth} handleChange={handleChange} onBlur={handleBlur} label="Date Of Birth" name="date_of_birth" type="date" required/>
                                        {errors.date_of_birth && <p className="error-text">{errors.date_of_birth}</p>}
                                    </div>
                                    <div className="form-group col-md-6">
                                        <FormInput value={values.password} handleChange={handleChange} onBlur={handleBlur} label="Password" name="password" type="password" required/>
                                        {errors.password && <p className="error-text">{errors.password}</p>}
                                    </div>
                                    <div className="form-group col-md-6">
                                        <FormInput value={values.confirm_password} handleChange={handleChange} onBlur={handleBlur} label="Confirm Password" name="confirm_password" type="password" required/>
                                        {errors.confirm_password && <p className="error-text">{errors.confirm_password}</p>}
                                    </div>
                                    <div className="form-group col-md-6 mt-5 pt-2">
                                    <select className="form-control select" onChange={handleChange} onBlur={handleBlur} name="security_question" required>
                                        <option defaultValue>Choose Security Question</option>
                                        <option value="what is your mothers maiden name">What is your mothers maiden name</option>
                                        <option value="what is your favourite color">What is your favourite color</option>
                                        <option value="what is your favourite car">What is your favourite car</option>
                                    </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <FormInput value={values.answer} handleChange={handleChange} onBlur={handleBlur} label="Answer" name="answer" type="text" required/>
                                        {errors.answer && <p className="error-text">{errors.answer}</p>}
                                    </div>
                                </div>
                                <div className="button">
                                    <CustomButton disabled={isSubmitting} type="submit">Create Profile</CustomButton>
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
    signUpUser: user => dispatch(signUpUser(user)),
})
export default withRouter(connect(null, mapDispatchToProps)(SignUpPage))