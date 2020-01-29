import React from 'react';
import './footer.styles.scss'

const Footer = () => (
    <div className="footer ">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <p className="text-center footer-text"> &copy; Profiler 2019 </p>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-5 footer-text">Built with <span className="fas fa-heart"></span> by Ayooluwa Oyewo</div>

            </div>
        </div>
        
    </div>
)

export default Footer