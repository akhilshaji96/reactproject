import logo from '../assests/icons8-cake-48.png';
import { Row, Col } from 'reactstrap';
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { Link } from 'react-router-dom';
import { fetchaddCustomerQuery } from '../../src/Services/Api';
import { FaArrowAltCircleLeft   } from "react-icons/fa";
// validation scheme.....
const validationSchema = Yup.object({
    customer_name: Yup.string().required('Name is required'),
    e_mail: Yup.string().email('Invalid email').required('Email is required'),
    mobile_no: Yup.string().required('Number is required').min(10, 'minimum 10 number'),
    location: Yup.string().required('Location is required'),
    message: Yup.string().required('Message is required'),
});
function Contact() {
    return (
        <div>
            <Header />

            <div className="contact">
                 {/* <Link to="/home">    <div className="back-arrow"><FaArrowAltCircleLeft   /></div></Link> */}
                <Row>
                    <Col md='5'>
                        <img src={logo}></img><div className='webname' style={{ color: '#463e3999', fontSize: '30px', fontWeight: '900' }}>Sweet Indulgence</div>
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
                        initialValues={{ customer_name: '', e_mail: '', mobile_no: '', location: '', message: '' }}
                        validationSchema={validationSchema}

                        onSubmit={(values,{ resetForm }) => {
                            console.log("Form submitted values:", values);
                            // alert("Form Submitted Successfully!");
                            axios
                                .post(fetchaddCustomerQuery, values)
                                .then((response) => {
                                    console.log("Success:", response.data);
                                resetForm()
                                })
                                .catch((error) => {
                                    console.error("Error:", error);
                                });

                        }}
                    >

                        <Col md='7'>
                            <Row>

                                <Col md="6" className='contactfield'>
                                    <Form>
                                        <Field type='text' className="detailsfield" name="customer_name" placeholder='Your Name*' style={{ width: '100%' }} />
                                        <ErrorMessage name="customer_name" component="div" className='error' />

                                        <Field type='text' className="detailsfield" name="mobile_no" placeholder='Phone NUmber*' />
                                        <ErrorMessage name="mobile_no" component="div" className='error' />
                                    </Form>
                                </Col>
                                <Col md="6" className='contactfield'>
                                    <Form>
                                        <Field type='text' className="detailsfield" name="e_mail" placeholder='Email*' />
                                        <ErrorMessage name="e_mail" component="div" className='error' />

                                        <Field type='text' className="detailsfield" name="location" placeholder='Location*' />
                                        <ErrorMessage name="location" component="div" className='error' />
                                    </Form>
                                </Col>

                            </Row>
                            <Form>
                                <Field  as="textarea" name="message" className="messagearea" placeholder="Message"/>
                                <ErrorMessage name="message" component="div" style={{ color: "red", fontSize: "14px" }}/>
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