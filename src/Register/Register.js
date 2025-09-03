import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { fetchaddregisterUser } from '../Services/Api'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
const validationSchema = Yup.object({
  first_name: Yup.string().required('Full Name is required'),
  email_id: Yup.string().email('Invalid Email Address').required('Email is required'),
  gender: Yup.string().required('Gender is required'),
  city: Yup.string().required('City is required'),
  acceptTerms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
  password: Yup.string()
  .min(6, "Password must be at least 6 characters long")
  .required("Password is required"),
  date_of_birth: Yup.string()
  .matches(
    /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
    "Enter a valid date in YYYY-MM-DD format"
  )
  .required("Date of Birth is required"),
});
const notify = () => toast('Sucessfully Logged in', { theme: 'light', position: 'top-right' });
 const successSwalConfig = {
  position: "center",
  icon: "success",
  title: "You’re now part of our family 🎊",
  showConfirmButton: false,
  timer: 1500,
};
function Register() {
    const navigate= useNavigate()
  return (
    <div className="register-form">
      <Formik
        initialValues={{
          first_name: '',
          email_id: '',
          password:'',
          gender: '',
          city: '',
          date_of_birth:'',
          acceptTerms: false,
        }}
        validationSchema={validationSchema}
       
        onSubmit={async (values, { setSubmitting }) => {
  try {
    const response = await axios.post(
      fetchaddregisterUser,
      values,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

   
    console.log("Registration Successful:", response.data);
    if (response.status === 200 && response.data?.data){
       Swal.fire(successSwalConfig);
    navigate('/');
    }

  } catch (error) {
   
    if (error.response) {
    
      alert(error.response.data.message || 'Registration failed');
      console.error("Server Error:", error.response.data);
    } else if (error.request) {
      
      alert('No response from server');
      console.error("Request Error:", error.request);
    } else {
    
      alert('Error: ' + error.message);
    }
  } finally {
    setSubmitting(false); 
  }
}}
      >
  {(props) => ( 
        <div className="form-container">
            <h2>Registration Form</h2>

   
            <Form>
             
              <label htmlFor="name">Full Name<span className="required">*</span></label>
              <Field type="text" name="first_name" placeholder="Enter your full name" className={props.errors.name && props.touched.name ? 'input-error' : ''} />
              <ErrorMessage name="first_name" component="div" className='error' />

             
              <label htmlFor="email">Email<span className="required">*</span></label>
              <Field type="email" name="email_id" placeholder="Enter your email" className={props.errors.password && props.touched.password ? 'input-error' : ''} />
              <ErrorMessage name="email_id" component="div" className='error' />

               <label htmlFor="password">Password<span className="required">*</span></label>
              <Field type="password" name="password" placeholder="Enter your password" className={props.errors.password && props.touched.password ? 'input-error' : ''} />
              <ErrorMessage name="password" component="div" className='error' />

             
              <label htmlFor="gender">Gender<span className="required">*</span></label>
                    <div className='genderfield'>
                        <span>Male</span>  <Field type="radio" name="gender" value="Male" className='radio-field' />
                        <span>Female</span> <Field type="radio" name="gender" value="Female" />
                        <span>Other</span>  <Field type="radio" name="gender" value="Other" />
                    </div>
              <ErrorMessage name="gender" component="div" className='error' />

              <label htmlFor="city">DOB<span className="required">*</span></label>
              <Field type="text" name="date_of_birth" placeholder="Enter a valid date in YYYY-MM-DD" className={props.errors.date_of_birth && props.touched.date_of_birth ? 'input-error' : ''} />
              <ErrorMessage name="date_of_birth" component="div" className='error' />
              
              <label htmlFor="city">City<span className="required">*</span></label>
              <Field type="text" name="city" placeholder="Enter your city" className={props.errors.city && props.touched.city ? 'input-error' : ''} />
              <ErrorMessage name="city" component="div" className='error' />

              
              <div className="terms" style={{ marginTop: '10px' }}>
                <Field type="checkbox" name="acceptTerms" className={`termcondition${props.errors.acceptTerms && props.touched.acceptTerms ? ' input-error' : ''}`}  />
                <label htmlFor="acceptTerms"> <span className='tandc'>Accept the Terms and Conditions</span><span className="required">*</span></label>
              </div>
              <ErrorMessage name="acceptTerms" component="div" className='error'/>

             
              <button type="submit" style={{ marginTop: '20px' }}>Register</button>
            </Form>
    
          </div>
  )}
       
      </Formik>
    </div>
  );
}

export default Register;
