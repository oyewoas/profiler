import React from 'react'

import './signin.styles.scss'
import FormInput from '../../component/form-input/form-input.component'
import CustomButton from '../../component/custom-button/custom-button.component'
import useFormValidation from '../../component/use-formvalidation/use-formvalidation.component'
import FORM_VALIDATION_RULES from '../../utils/form-validation-rules'
import { connect } from 'react-redux'
import { setCurrentUser, dataLoading } from '../../redux/user/user.actions'
import { userLogin } from '../../services/user.services'

const {login} = FORM_VALIDATION_RULES

const SignInPage = ({ dataLoading, setCurrentUser }) => {
    const initialFormState = { email: "", password: ""};

    const loginFunction = () => {
        dataLoading()
        userLogin(setCurrentUser, values)
    }
    
    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        isSubmitting
    } = useFormValidation(initialFormState, login, loginFunction);

        return (
            <div className="signin">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 col-lg-3"></div>
                        <div className="col-md-6 col-sm-12 col-lg-6">
                            <div className="legend"><span>Sign in with your email and password</span></div>
                            <form onSubmit={handleSubmit}>
                                <FormInput value={values.email} handleChange={handleChange} onBlur={handleBlur} label="Email" name="email" type="email" required/>
                                {errors.email && <p className="error-text">{errors.email}</p>}

                                <FormInput value={values.password} handleChange={handleChange} onBlur={handleBlur} label="Password" name="password" type="password" required/>
                                {errors.password && <p className="error-text">{errors.password}</p>}
                                
                                <div className="button">
                                    <CustomButton disabled={isSubmitting} type="submit">Sign In</CustomButton>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-3 col-sm-12 col-lg-3"></div>
                    </div>
                    
                </div>
            </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    dataLoading: () => dispatch(dataLoading())
})

export default connect(null, mapDispatchToProps)(SignInPage)