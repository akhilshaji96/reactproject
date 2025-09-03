import { Row,Col } from "reactstrap";
import profile from '../assests/profile.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { useState, useEffect } from 'react';
import { fetchgetAllComments } from '../Services/Api';
function Customerreview(){
    const[reviews,setReviews]=useState([]);

   
const ReviewDetails = async () => {
      try {
        const response = await axios.post(
          fetchgetAllComments,
         
          {
            headers: {
              "Content-Type": "application/json"
            }
          },
          );
          setReviews(response.data.data)
           console.log("Review Successfully:", response.data.data);
      } catch (error) {
        if (error.response) {
          console.error("Server Error:", error.response.data);
        } else if (error.request) {
          console.error("No Response from Server");
        } else {
          console.error("Error:", error.message);
        }
      }
    };
    useEffect(() => {
        ReviewDetails();
    },[]);

    const renderStars = (count) => {
        return Array.from({ length: 5 }, (_, i) => (
            <FaStar key={i} color={i < count ? "#FFD700" : "#ccc"} />
        ));
    };
    return(
        <div>
            <div className="customerreview">
                <h3>What Our Customer Say</h3>
                
                <div className="reviews">
                    <Row>
                        {  reviews.map((item) => (
                            <Col md="4" key={item.id} className="review-card">
                                <img src={profile}   />
                                <p>"{item.comments}"</p>
                                <h5>{item.f_username}</h5>
                                <div className="star">{renderStars(item.f_cake_id)}</div>
                            </Col>
                        ))}
                    </Row>

                </div>
            </div>
        </div>
    )
}
export default Customerreview