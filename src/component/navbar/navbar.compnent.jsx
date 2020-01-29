import React from 'react';
import './navbar.styles.scss'
import { Link, withRouter } from 'react-router-dom';
import { selectCurrentUser } from '../../redux/user/user.selector'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { logOutCurrentUser } from '../../redux/user/user.actions';
import { userLogOut } from '../../services/user.services';
import { ReactComponent as Logo } from '../../assets/img/logo1.svg'

const NavBar = ({ logOutCurrentUser, currentUser, history }) => (
    <nav className="fixed-top navbar navbar-expand-lg">
        <div className="container">
            <Link className="navbar-brand" to="/"><Logo className="img-fluid"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="fas fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                {
                    currentUser ? 
                    (
                        <div className="navbar-nav ml-auto">
                            <div className="nav-item nav-link user-name"> Hi {currentUser.name}</div>
                            <div className="nav-item nav-link" onClick={() => userLogOut(logOutCurrentUser, history)}>Sign Out</div>
                        </div>
                    )
                    :
                    (
                        <div className="navbar-nav ml-auto">
                            <Link className="nav-item nav-link active" to="/">Home</Link>
                            <Link className="nav-item nav-link" to="/signin">Sign In</Link>
                            <Link className="nav-item nav-link" to="/signup">Sign Up</Link>
                        </div>
                    )
                }

            </div>
        </div>  
    </nav>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})
const mapDispatchToProps = dispatch => ({
    logOutCurrentUser: () => dispatch(logOutCurrentUser()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))