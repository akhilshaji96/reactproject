import { Container,Row,Col } from "reactstrap"
import Header from "../Header/Header"
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { IoMdRadioButtonOn } from "react-icons/io";
import { RiMentalHealthLine } from "react-icons/ri";
import { useLocation } from 'react-router-dom';
function Detailed (){
  const location = useLocation();
  const cake = location.state?.cake; 

    return(
        <div>
           <Header /> 
           <div className="detailed-page" style={{paddingTop:'90px', backgroundColor:'#f9f6f0',height:'100vh'}}>
            <Container>
                <Row>
                    <Col md="5">
                          <img src={cake?.images} style={{height:'500px'}}></img>
                     
                     
                     </Col>
                      <Col md="6">
                          <h3>{cake?.title}</h3>
                          <p style={{color:'grey'}}>{cake?.text}</p>
                          <div className="rating">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfStroke />
                            <span>(29)</span>
                          </div>
                          <p style={{marginTop:'25px'}}>Indulge in the luxurious taste of our Red Velvet Cake, a moist and fluffy delight layered with rich cream cheese frosting.
                             Baked to perfection with the finest ingredients, this classic dessert offers a subtle cocoa flavor balanced by the tanginess 
                             of the frosting. 
                            Whether it’s a birthday, anniversary, or a simple treat-yourself moment, this elegant cake is perfect for any celebration.
                            </p>
                            <Row>
                                <Col md='12' className="d-flex">
                                    <div className="properties-of-cake"><IoMdRadioButtonOn /> <span>Non-vegetarian</span></div> 
                                    <div className="properties-of-cake" style={{marginLeft:'25px'}}><RiMentalHealthLine /> <span>Healthy</span></div> 
                                    <div className="properties-of-cake" style={{marginLeft:'25px'}}><IoMdRadioButtonOn /> <span>Non-vegetarian</span></div> 
                                </Col>
                            </Row>
                            <p style={{marginTop:'20px'}}>Price : <span style={{fontWeight:'bold',marginLeft:'25px'}}>{cake?.price}</span></p>
                             <p style={{marginTop:'20px'}}>Kg : <select style={{marginLeft:'40px'}}><option value="0.5kg">0.5 Kg</option>
                                    <option value="1kg">1 Kg</option>
                                    <option value="2kg">2 Kg</option></select>
                            </p>
                            
                        <div className="buy-btn">
                            <button type="button" style={{border:'none',width:'45%',backgroundColor:'#fd7cc2',color:'#fff',height:'50px'}} >Buy</button>
                        <button type="button" style={{border:'none',width:'45%',backgroundColor:'#fd7cc2',marginLeft:'25px',color:'#fff',height:'50px'}} >Add to Cart</button>
                        </div>
                     

                     </Col>
                </Row>
            </Container>
           </div>
        </div>

    )
}
export default Detailed