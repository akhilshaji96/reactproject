
import logo from '../assests/icons8-cake-48.png';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Link, useNavigate} from 'react-router-dom'

// Validation Schema
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required').min(6, 'minimum 6 character'),
});

function Login() {
      const navigate = useNavigate()
  return (
  

    <div className='login-body'>
    <div className="login-container">
      <div className='login-logo'>
        <img src={logo} style={{width:'100px'}}></img>
      </div>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
        navigate('/home');
        }}
      >
        {(props) => (
          <Form>
         
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className={props.errors.email && props.touched.email ? 'input-error' : ''}
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

        
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className={props.errors.password && props.touched.password ? 'input-error' : ''}
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

      
      <button type="submit">Login</button>

         
            <p className="register-link">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
    </div>
  );
}

export default Login;
