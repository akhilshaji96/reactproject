import { Container,Row,Col } from "reactstrap"
import Header from "../Header/Header"
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { IoMdRadioButtonOn } from "react-icons/io";
import { RiMentalHealthLine } from "react-icons/ri";
import { useLocation, } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { useEffect } from 'react';
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { fetchaddComments } from '../../src/Services/Api' 
function Detailed (){
  const validationSchema = Yup.object({
          comment: Yup.string().required("comment is required"),
         
        
        });
  const location = useLocation();
  const cake = location.state?.cake; 
  const navigate = useNavigate();
//  const cakedetails={                                    
//         'id':1,
//         'title': "Cheese Cake",
//         'subtitle': "A rich and moist chocolate cake layered with our signature fudge icing. A timeless classic for all chocolate lovers.",
//         'details': "Indulge in the luxurious taste of our Red Velvet Cake, a moist and fluffy delight layered with rich cream cheese frosting. 		    Baked to perfection with the finest ingredients, this classic dessert offers a subtle cocoa flavor balanced by the tanginess 		of the frosting. Whether it’s a birthday, anniversary, or a simple treat-yourself moment, this elegant cake is perfect for 		any celebration.",
//         'price': 250,
//         'image':"https://www.jocooks.com/wp-content/uploads/2018/11/cheesecake-1-22-500x500.jpg",
//         comment:[{
//         'commentname':"Mitchel starc",
//         'quotes':"The best cake I've tasted! perfect for my daughter's birthday.",
//         'commentphoto':"https://www.shutterstock.com/image-vector/user-circle-isolated-icon-round-600nw-2459622791.jpg"
//             }]
// }
//  const cakeDetails = async () => {
//       try {
         
//         const response = await axios.post(
//           "http://192.168.1.116:8082/cake/cakedetails",
//           cakedetails,
          
//           {
//             headers: {
//               "Content-Type": "application/json"
//             }
//           },
//           );
//         console.log("cake details Successfully:", response.data);
//       } catch (error) {
      
//         if (error.response) {
//           console.error("Server Error:", error.response.data);
//         } else if (error.request) {
//           console.error("No Response from Server");
//         } else {
//           console.error("Error:", error.message);
//         }
//       }
//     };

// useEffect(() => {
//     cakeDetails();
// },[]);

  const addtocart = () => {
     toast('Sucessfully Add to cart',{theme:'light',position:'top-right'})
  }
  const buybtn = () =>{
        navigate('/buy')
  }
    return(
        <div>
           <Header /> 
           <div className="detailed-page" style={{paddingTop:'90px', backgroundColor:'#f9f6f0',}}>
            <Container>
                <Row>
                    <Col md="5">
                          <img src={cake?.images} style={{height:'335px',width:'515px',margin:'10px'}}></img>
                          <Row>
                            <Col md='3'>
                                     <img src={cake?.images} style={{height:'100px',width:'100px',margin:'10px'}}></img>
                            </Col>
                            <Col md='3'>
                                       <img src={cake?.images} style={{height:'100px',width:'100px',margin:'10px'}}></img>
                            </Col>
                            <Col md='3'>
                                  <img src={cake?.images} style={{height:'100px',width:'100px',margin:'10px'}}></img>
                            </Col>
                            <Col md='3'>
                                     <img src={cake?.images} style={{height:'100px',width:'100px',margin:'10px'}}></img>
                            </Col>
                          </Row>
                     
                     
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
                            <span style={{color:'#000',marginLeft:'5px'}}>(29)</span>
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
                                    {/* <div className="properties-of-cake" style={{marginLeft:'25px'}}><IoMdRadioButtonOn /> <span>Non-vegetarian</span></div>  */}
                                </Col>
                            </Row>
                            <p style={{marginTop:'20px'}}>Price : <span style={{fontWeight:'bold',marginLeft:'25px'}}>{cake?.price}</span></p>
                             <p style={{marginTop:'20px'}}>Kg : <select style={{marginLeft:'40px'}}><option value="0.5kg">0.5 Kg</option>
                                    <option value="1kg">1 Kg</option>
                                    <option value="2kg">2 Kg</option></select>
                            </p>
                            
                        <div className="buy-btn">
                            <button type="button" style={{border:'none',width:'45%',backgroundColor:'#fd7cc2',color:'#fff',height:'50px'}} onClick={buybtn}>Buy</button>
                        <button type="button" style={{border:'none',width:'45%',backgroundColor:'#fd7cc2',marginLeft:'25px',color:'#fff',height:'50px'}} onClick={addtocart} >Add to Cart</button>
                        </div>
                    </Col>
                </Row>
                <Formik
      initialValues={{ comment: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        try {
          const response = await axios.post(fetchaddComments, values, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          console.log("Comment submitted:", response.data);

        
          resetForm();
        } catch (error) {
          if (error.response) {
            console.error("❌ Server Error:", error.response.data);
          } else {
            console.error("❌ Request Failed:", error.message);
          }
        }
      }}
    >
      {({ values }) => (
        <Form className="comment-section">
          <Field  as="textarea" name="comment" placeholder="Write your comment..."
          />
          <ErrorMessage name="comment" component="div" className="error" />
          <button type="submit" style={{width:"15%"}}>Post Comment</button>
        </Form>
      )}
    </Formik>

                 <h6 style={{fontWeight:'500',marginBottom:'15px'}}>Comments</h6>
                <div className="comments">
                    <div className="commentbox">
                        <div ><img className="commentimg" src="https://i.pravatar.cc/40"></img></div> <span style={{fontWeight:'700',marginLeft:'5px'}}> David Warner</span>
                    </div>
                    <p>The best cake I've tasted! perfect for my daughter's birthday."</p>
                </div>
                <div className="comments">
                    <div className="commentbox">
                        <div ><img className="commentimg" src="https://i.pravatar.cc/40"></img></div> <span style={{fontWeight:'700',marginLeft:'5px'}}> Mitchel starc</span>
                    </div>
                    <p>The best cake I've tasted! perfect for my daughter's birthday.The best cake I've tasted!"</p>
                </div>
                <div className="comments">
                    <div className="commentbox">
                        <div ><img className="commentimg" src="https://i.pravatar.cc/40"></img></div> <span style={{fontWeight:'700',marginLeft:'5px'}}> Philip Salt</span>
                    </div>
                    <p>The best cake I've tasted! perfect for my daughter's birthday."</p>
                </div>
            </Container>
           </div>
        </div>

    )
}
export default Detailed