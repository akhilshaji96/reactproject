import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';


const validationSchema = Yup.object({
  name: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid Email Address').required('Email is required'),
  gender: Yup.string().required('Gender is required'),
  city: Yup.string().required('City is required'),
  acceptTerms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
});

function Register() {
    const navigate= useNavigate()
  return (
    <div className="register-form">
      <Formik
        initialValues={{
          name: '',
          email: '',
          gender: '',
          city: '',
          acceptTerms: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Form Data:', values);
          navigate('/')
        }}
      >
  {(props) => ( 
        <div className="form-container">
            <h2>Registration Form</h2>

   
            <Form>
             
              <label htmlFor="name">Full Name<span className="required">*</span></label>
              <Field type="text" name="name" placeholder="Enter your full name" className={props.errors.name && props.touched.name ? 'input-error' : ''} />
              <ErrorMessage name="name" component="div" className='error' />

             
              <label htmlFor="email">Email<span className="required">*</span></label>
              <Field type="email" name="email" placeholder="Enter your email" className={props.errors.email && props.touched.email ? 'input-error' : ''} />
              <ErrorMessage name="email" component="div" className='error' />

             
              <label htmlFor="gender">Gender<span className="required">*</span></label>
                    <div className='genderfield'>
                        <span>Male</span>  <Field type="radio" name="gender" value="Male" className='radio-field' />
                        <span>Female</span> <Field type="radio" name="gender" value="Female" />
                        <span>Other</span>  <Field type="radio" name="gender" value="Other" />
                    </div>
              <ErrorMessage name="gender" component="div" className='error' />

              
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
