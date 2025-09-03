import logo from '../assests/icons8-cake-48.png';
import { Row, Col } from 'reactstrap';
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// validation scheme.....
const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Number is required').min(10, 'minimum 10 number'),
});
function Contact() {
    return (
        <div>
            <Header />
            
            <div className="contact">
                <Row>
                    <Col md='5'>
                        <img src={logo}></img><div className='webname' style={{ color: '#463e3999', fontSize: '30px',fontWeight:'900' }}>Sweet Indulgence</div>
                        <p>Sweet Indulegence, with over 24 years of baking heritage, offers fresh, healthy food made in-house at our
                            central kitchen. With 3 outlets and 2 pickup counters, we ensure quality food without additives,
                            serving customers with care.</p>
                        <div className='contactdetails'>
                            <div className='contacticon'>
                                <IoMdMail style={{ fontSize: '25px' }} />
                            </div>
                            <div className='contactdetails' style={{ fontSize: '20px', marginLeft: '10px' }}>sweetindulegence@gmail.com</div>

                        </div>
                        <div className='contactdetails'>
                            <div className='contacticon'>
                                <FaPhoneAlt style={{ fontSize: '20px' }} />
                            </div>
                            <div className='contactdetails' style={{ fontSize: '20px', marginLeft: '10px' }}>+91 98 26 53 45 58</div>

                        </div>


                    </Col>
                    <Formik
                initialValues={{ name: '', email: '', phone: '' }}
                validationSchema={validationSchema}

                onSubmit={(values) => {
                    console.log('Form Submitted:', values);

                }}
            >
                   
                    <Col md='7'>
                        <Row>
                             
                            <Col md="6" className='contactfield'>
                            <Form>
                                <Field type='text' className="detailsfield"  name="name" placeholder='Your Name*' style={{ width: '100%' }} />
                                <ErrorMessage name="name" component="div" className='error' />

                                <Field type='text'className="detailsfield" name="phone" placeholder='Phone NUmber*' />
                                <ErrorMessage name="phone" component="div" className='error' />
                            </Form>
                            </Col>
                            <Col md="6" className='contactfield'>
                            <Form>
                                <Field type='text' className="detailsfield" name="email" placeholder='Email*' />
                                <ErrorMessage name="phone" component="div" className='error' />

                                <Field type='text' className="detailsfield" name="location" placeholder='Location*' />
                                     <ErrorMessage name="location" component="div" className='error' />
                                </Form>
                            </Col>
                            
                        </Row>
                        <Form>
                            <textarea className='messagearea' placeholder='Message'></textarea>
                        <button type='submit' className='contactsubmit'>Submit</button>
                        </Form>
                        

                    </Col>
                   
                    </Formik>
                </Row>
            </div>
            <Footer />
        </div>

    )
}
export default Contact