/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import { Route, Redirect } from "react-router-dom";


const ProtectedRoute = ({ component: Component, currentUser, ...rest  }) => {
    return (
      <Route
        {...rest}
        render={props =>
          currentUser ? (
            <Component {...props} />
          ) : (
            <Redirect to="/" />
          )
        }
      />
    );
}
  
  export default ProtectedRoute;