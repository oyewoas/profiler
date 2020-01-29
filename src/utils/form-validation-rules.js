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

  const compare = (values) => {
    // initialize errors object
    let errors = {};
  
    // if errors exist for each field then add them to the errors object
    if (!values.first_student_name) {
      errors.first_student_name = "First Student Name is required";
    }

    if (!values.second_student_name) {
      errors.second_student_name = "Second Student Name is required";
    }

    if (!values.first_student_file) {
      errors.first_student_file = "First Student File is required";
    }

    if (!values.second_student_file) {
      errors.second_student_file = "Second Student File is required";
    }
   
    return errors;
  }

  const FORM_VALIDATION_RULES = {
    login,
    compare
  }

  export default FORM_VALIDATION_RULES