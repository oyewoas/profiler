import React from 'react';

import './not-found.styles.scss'
import CustomButton from '../../component/custom-button/custom-button.component';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="notfound-page">
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 text-center">
                    <h1 className="heading">Page Not Found</h1>
                    <Link to="/">
                        <CustomButton>Go to Homepage</CustomButton>
                    </Link>
                </div>
                <div className="col-md-3"></div>

            </div>
        </div>
    </div>
    
)

export default NotFound;