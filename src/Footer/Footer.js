import logo from '../assests/icons8-cake-48.png';
import { Row, Col, Container } from 'reactstrap'
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
// import { Link } from 'react-router-dom';
import Shippingcard from './Shippingcard';
import Customerreview from '../body/Customerreview';
// import './Footer.css'
function Footer(){
    return (

        <div>
            <Customerreview />
            <div className='readyorder'>
                <h4>Ready to Order Your Dream Cake?</h4>
                <p>Contact us today for custom orders and special occasions</p>
                <div className='readybtns'>
                    <button type='button' className='ordrbtn'>Order Now</button>
                    <button type='button' className='ordrbtn'>Get Quote</button>
                </div>

            </div>
           
            <div className='footer'>
                <Container>
                    
                
                    <Row>
                        <Col md ='3' className='footercontent'>
                        <div className='footerlogo'>
                             <img src={logo}></img><span style={{color:'#fff',fontWeight:'bold',fontSize:'25px'}}>Sweet Indulegence</span>
                        </div>
                           
                            <p>Creating sweet memories with every cake</p>
                        </Col>
                        
                    <Col md ='3' className='links'>
                        <h5>Quick Links</h5>
                        <ul style={{listStyleType:'none',color:'#fff'}}>
                            <li>About Us</li>
                            <li>Cakes</li>  
                            <li>Customer Orders</li>
                            <li>Contact</li>
                        </ul>
                        </Col>
                        <Col md ='3'  className='contacts'>
                            <h5>Contact</h5>
                          <div className='footericon'> <FiPhoneCall /><span> +91 99 66 88 56 00</span></div> 
                           <div className='footericon'><MdOutlineEmail /> <span>sweetindulegance@gmail.com</span></div> 
                           <div className='footericon'><IoLocation /> <span>Tc 25/789/5 Fort Bakery.</span></div> 
                        </Col>
                        <Col md ='3' className='social'>
                        <h5>Follow us</h5>
                        <div className='socialicons'>
                         <div className='media'><FaInstagramSquare /></div>   
                           <div className='media'><FaFacebookF /></div>
                          <div className='media'><FaTwitter /></div>
                        </div>
                        </Col>
                    </Row>
                    </Container>
            </div>
       
        <div className=" container-fluid footer-section d-flex justify-content-between align-items-cente">
                    <div className="left-side-footer">
                        {/* <a href=""><img src={logo} width="35"></img></a> */}
                        <span className='ml-5'>@ 2025 Sweet Indulgence.All rights reserved</span>
                    </div>
                    <div className="right-side-footer d-flex justify-content-center gap-3">
                        <a href="" className="text-decoration-none">Privacy Policy</a>
                        <a href="" className="text-decoration-none">Terms of Service</a>
                    </div>
        </div>
 </div>
    )
}
export default Footer;