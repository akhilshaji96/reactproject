import logo from '../assests/icons8-cake-48.png';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch  } from 'react-redux';
import {setUsername,clearUsername} from '../utils/reducer';
import logoname from '../assests/logoname.png'
import logowithtext from '../assests/cakelogowithtext.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { fetchcheckLogin } from '../Services/Api';
import Swal from 'sweetalert2';

// Validation Schema
const validationSchema = Yup.object({
  f_email_id: Yup.string().email('Invalid email').required('Email is required'),
  f_password: Yup.string().required('Password is required').min(6, 'minimum 6 character'),
});
  const notify = () => toast('Sucessfully Logged in', { theme: 'light', position: 'top-right' })
  const loginfailednotify = () => toast('LoginFailed', { theme: 'light', position: 'top-right' })
    const successSwalConfig = {
  position: "center",
  icon: "success",
  title: "You’ve logged in successfully 🎉",
  showConfirmButton: false,
  timer: 1500,
};
function Login() {

      const navigate = useNavigate()
      const dispatch = useDispatch();

      
  return (
  

    <div className='login-body'>
    <div className="login-container">
      <div className='login-logo'>
        {/* <img src={logo} style={{width:'100px'}}></img> */}
               <img src={logowithtext} style={{width:'200px',margin:'10px'}}></img>
        <div>
          {/* <img src={logoname} style={{width:'200px',margin:'50px'}}></img> */}
        </div>
        
      </div>

      <Formik
        initialValues={{ f_email_id: '', f_password: '' }}
        validationSchema={validationSchema}
               onSubmit={async (values, { setSubmitting }) => {
          try {
            const response = await axios.post(
              fetchcheckLogin,
              values,
              {
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            );
            // const userNameFromApi = response.data.username || values.email;
        
            

            console.log("Login Successful:", response.data);
            if (response.status === 200 && response.data?.data){
            // notify()
            dispatch(setUsername(response.data.data.first_name));
            Swal.fire(successSwalConfig);
            navigate('/home');
            }else{
              loginfailednotify()
            }
          
        
          } catch (error) {
           
            if (error.response) {
            
              alert(error.response.data.message || 'Login failed');
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
          <Form>
         
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="f_email_id"
                id="email"
                placeholder="Enter your email"
                className={props.errors.f_email_id && props.touched.f_email_id ? 'input-error' : ''}
              />
              <ErrorMessage name="f_email_id" component="div" className="error" />
            </div>

        
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="f_password"
                id="password"
                placeholder="Enter your password"
                className={props.errors.f_password && props.touched.f_password ? 'input-error' : ''}
              />
              <ErrorMessage name="f_password" component="div" className="error" />
            </div>

      {/* <button onClick={() => dispatch(setUsername('JohnDoe'))}>Login as John (Test)</button>
        <button onClick={() => dispatch(clearUsername())}>Logout</button> */}
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
