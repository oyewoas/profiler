// validate function
// pass in the values object
const login = (values) => {
    // initialize errors object
    let errors = {};
  
    // if errors exist for each field then add them to the errors object
  
    if (!values.password) {
      errors.password = "Password is required";
    }
    // Email Error
    // make sure email is correct format using RegEx
    // email is not required so only check if email fits if one is provided
    if (!values.email) {
      errors.email = "Email is required";
    } else if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Please enter a valid email address";
    }
    return errors;
  }

  const signup = (values) => {
    // initialize errors object
    let errors = {};
  
    // if errors exist for each field then add them to the errors object
    if (!values.profileImg) {
      errors.profileImg = "Profile Image is required";
    }

    if (!values.phone_number) {
      errors.phone_number = "Phone number is required";
    } else if(values.phone_number && !/^[0-9]+$/.test(values.phone_number) ){
      errors.phone_number= "Phone number must be digits"
    }

    if (!values.address) {
      errors.address = "Address is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!values.date_of_birth) {
      errors.date_of_birth = "Date of birth is required";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    if (!values.confirm_password) {
      errors.confirm_password = "Confirm password is required";
    } else if(values.confirm_password !== values.password){
      errors.confirm_password = "Confirm password must match password"
    }

    if (!values.security_question) {
      errors.security_question = "Security question is required";
    }

    if (!values.answer) {
      errors.answer = "Answer to security question is required";
    }



   
    return errors;
  }

  const FORM_VALIDATION_RULES = {
    login,
    signup
  }

  export default FORM_VALIDATION_RULES