import React from 'react'

import './homepage.styles.scss'
import { Link } from 'react-router-dom'
import CustomButton from '../../component/custom-button/custom-button.component'
import { ReactComponent as Signup } from '../../assets/img/undraw_completing_6bhr.svg'
import { ReactComponent as Signin } from '../../assets/img/undraw_mobile_login_ikmv.svg'
import { ReactComponent as Profile } from '../../assets/img/undraw_profile_data_mk6k.svg'


const HomePage = () => (
    <div className="home-page">
        <header className="home-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-lg-8 left-section">
                        <h1 className="home-heading-one animated fadeIn delay-1s">Create beautiful and Stunning Profiles</h1>
                        <Link to="/signin" className="animated fadeIn delay-2s">
                            <CustomButton>Sign In</CustomButton>
                        </Link>
                    </div>
                    <div className="col-md-12 col-lg-4 col-sm-12 right-section animated fadeIn delay-2s">
                    </div>
                </div>
            </div>
        </header>
        <section className="container home-section">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <h1  className=" home-heading-two text-center">About Profiler</h1>
                    <p className=" home-paragraph-one text-center">Our Platform enables you to create a secure profile, which you can view, edit and update whenever you need to do so. A trial will convince you.</p>
                </div>
                <div className="col-md-2"></div>

            </div>
            <div className="row pt-5 mt-5">
                <div className="col-md-4 text-center mt-5">
                    <Signup className="img-fluid images"/>
                    <p className="home-paragraph-one pt-5 pl-4 pr-4">Sign Up to Create your Profile</p>
                </div>
                <div className="col-md-4 text-center mt-5">
                    <Signin className="img-fluid images"/>
                    <p className="home-paragraph-one pt-5 pl-4 pr-4">Sign In to view your Profile</p>
                </div>
                <div className="col-md-4 text-center mt-5">
                    <Profile className="img-fluid images"/>
                    <p className="home-paragraph-one pt-5 pl-4 pr-4">View your Profile</p>
                </div>

            </div>
        </section>
    </div>
)

export default HomePage