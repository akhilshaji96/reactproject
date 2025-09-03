import { FaTruck } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { Row, Col, } from 'reactstrap'
function Shippingcard(){
    return (
        <div>
             <div className='shippings'>

           
            <Row>
                        <Col md ='4'>
                        <div className='delivery-sdhiping'>
                            <div className='deliveryicon'>
                                <FaTruck />
                            </div>
                            <h5>Free Delivery</h5>
                            <p>Free delivery on orders ₹500</p>
                        </div>
                        
                        </Col>
                        <Col md ='4'>
                        <div className='delivery-sdhiping'>
                            <div className='deliveryicon'>
                               <MdOutlineAccessTimeFilled />
                            </div>
                            <h5>Same Day Delivery</h5>
                            <p>Order before 2 PM for same day delivery</p>
                        </div>
                        
                        </Col>
                        <Col md ='4'>
                        <div className='delivery-sdhiping'>
                            <div className='deliveryicon'>
                             <FaHeart />
                            </div>
                            <h5>Made with Love</h5>
                            <p>Every cake is handcrafted with care</p>
                        </div> 
                        
                        </Col>
                    </Row>
                     </div>
        </div>
    )



}
export default Shippingcard