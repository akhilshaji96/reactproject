import { Row, Col,Container } from "reactstrap"
import { CiDeliveryTruck } from "react-icons/ci";
import Header from "../Header/Header";
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { FaShippingFast } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { FaGift } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { GiCardboardBox } from "react-icons/gi";
import Footer from "../Footer/Footer";
function Orderdetails() {
    return (
        <div>


            <Header />
            
            <div className="orderdetails">
                <Container>
                <Row>
                    <Col md='9'>
                        <div className="order-details-head">
                            <p>Order #VL2667</p>
                        </div>
                        <div className="order-details-headlist">
                            <Row>
                                <Col md='4'>
                                    <p>Product Details	</p>
                                </Col>
                                <Col md='2' style={{ textAlign: 'left' }}>
                                    <p>Item Price	</p>
                                </Col>
                                <Col md='2' style={{ textAlign: 'left' }}>
                                    <p>Quantity	</p>
                                </Col>
                                <Col md='2' style={{ textAlign: 'left' }}>
                                    <p>Rating</p>
                                </Col>
                                <Col md='2' style={{ textAlign: 'left' }}>
                                    <p>Total Amount	</p>
                                </Col>
                            </Row>

                        </div>
                        <div className="order-details-body">
                            <Row>
                                <Col md='4'>
                                    <div className="product-details">
                                        <div className="product-img">
                                            <img src="https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg"></img>
                                        </div>
                                        <div className="product-content">
                                            <h5>Milk chocolate</h5>
                                            <h6>Kg : 1</h6>
                                            <p>Natural Ingridents</p>
                                        </div>

                                    </div>

                                </Col>


                                <Col md='2' >
                                    <div className="productamount">
                                        <p>250	</p>
                                    </div>
                                </Col>
                                <Col md='2'>
                                    <div className="productamount">
                                        <p>2	</p>
                                    </div>
                                </Col>
                                <Col md='2'>
                                    <div className="productamount">
                                        <p>Rating	</p>
                                    </div>
                                </Col>
                                <Col md='2'>
                                    <div className="productamount">
                                        <p>250	</p>
                                    </div>
                                </Col>


                            </Row>
                            <div className="amountsection">
                                <Row>
                                    <Col md='8'>
                                    </Col>
                                    <Col md='2'>
                                        <div className="amount-head" style={{ textAlign: 'left' }}>
                                            <p>Sub Total:</p>
                                            <p>Discount:</p>
                                            <p>Shipping Charge:</p>
                                            <h6>Total:</h6>
                                        </div>
                                    </Col>
                                    <Col md='2' style={{ textAlign: 'left' }}>
                                        <p>250</p>
                                        <p>-50</p>
                                        <p>50</p>
                                        <h6>250</h6>
                                    </Col>

                                </Row>
                            </div>
                        </div>
                        <div className="order-status-body">
                            <div className="order-status-head">
                                    <h3>Order Status</h3>
                                </div>
                            <div class="order-tracking-container">
                                
                                
                                <div class="timeline">

                                    <div class="step">
                                        <div class="circle">
                                            <IoBag />
                                        </div>
                                        <div class="content">
                                            <h4><strong>Order Placed</strong> - Wed, 15 Dec 2021</h4>
                                            {/* <p>An order has been placed.</p> */}
                                        </div>
                                    </div>

                                    <div class="step">
                                        <div class="circle">
                                            <FaGift />
                                        </div>
                                        <div class="content">
                                            <h4><strong>Packed</strong> - Thu, 16 Dec 2021</h4>
                                            {/* <p>Your item has been picked up by courier partner</p> */}

                                        </div>
                                    </div>

                                    <div class="step">
                                        <div class="circle">
                                            <FaShippingFast />
                                        </div>
                                        <div class="content">
                                            <h4><strong>Shipping</strong> </h4>

                                            {/* <p>Your item has been shipped.</p> */}

                                        </div>
                                    </div>

                                    <div class="step">
                                        <div class="circle">
                                            <MdDeliveryDining />
                                            
                                        </div>
                                        <div class="content">
                                            <h4><strong>Out For Delivery</strong></h4>
                                        </div>
                                    </div>

                                    <div class="step">
                                        <div class="circle">
                                            <GiCardboardBox />
                                        </div>
                                        <div class="content">
                                            <h4><strong>Delivered</strong></h4>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </Col>
                    <Col md='3'>
                        <div className="Logistic-details">
                            <div className="card-head">
                                <p>Logistics Details</p>
                            </div>
                            <div className="card-header">
                                <CiDeliveryTruck style={{ fontSize: '65px', color: '#fd7cc2' }} />
                                <h6>Sweet Logistics</h6>
                                <label style={{ color: '#8b8e9c' }}>ID: MFDS1400457854</label>
                                <p style={{ color: '#8b8e9c' }}>Payment Mode : Debit Card</p>

                            </div>

                        </div>
                        <div className="customer-details">
                            <div className="card-head">
                                <p>Customer Details</p>
                            </div>
                            <div className="profile">
                                <div className="profile-img">
                                    <img src="https://i.pravatar.cc/40"></img>
                                </div>
                                <div className="profile-name">
                                    <h6>David Warner</h6>
                                    <p>Customer</p>

                                </div>

                            </div>
                            <div className="customer-contact">
                                <div style={{ color: '#000' }}><MdOutlineEmail /> <span style={{ color: '#8b8e9c' }}> davidwarner@gmail.com</span></div>
                                <div style={{ color: '#000' }}><CiPhone /> <span style={{ color: '#8b8e9c' }}>+91 94 56 23 89 28</span></div>
                            </div>

                        </div>
                        <div className="Billing-Address">
                            <div className="card-head">
                                <p>Billing Address</p>
                            </div>
                            <div className="billing-address">
                                <h6>David warner</h6>
                                <label>2186 Joyce Street Rocky Mount</label>
                                <label>California - 24567</label><br></br>
                                <label>United States</label>

                            </div>

                        </div>
                        <div className="Billing-Address">
                            <div className="card-head">
                                <p>Shipping Address</p>
                            </div>
                            <div className="billing-address">
                                <h6>David warner</h6>
                                <label>2186 Joyce Street Rocky Mount</label>
                                <label>California - 24567</label><br></br>
                                <label>United States</label>

                            </div>

                        </div>


                    </Col>
                </Row>
                </Container>
            </div>
            <Footer />
        </div>
    )
}
export default Orderdetails