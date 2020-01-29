import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  })

//Success Responses
const loginSuccess = () => {
    Toast.fire({
        type: 'success',
        icon: 'success',
        title: 'Logged in successfully'
      })
}

const logOutSuccess = () => {
    Toast.fire({
        type: 'success',
        icon: 'success',
        title: 'Logged out successfully'
      })
}


//Error Responses
const loginError = () => {
    Toast.fire({
        type: 'error',
        icon: 'error',
        title: 'Login Error'
      })
}

const logoutError = () => {
    Toast.fire({
        type: 'error',
        icon: 'error',
        title: 'Logout Error'
      })
}


const successResponses = {
    login : loginSuccess,
    logout: logOutSuccess,
    
}

const errorResponses ={
    login: loginError,
    logout: logoutError,
}

const ALERT_RESPONSES = {
    successResponses,
    errorResponses
}

export default ALERT_RESPONSES