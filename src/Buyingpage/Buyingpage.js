import { Container } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import Header from "../Header/Header"
import Address from './Address';
import Shoppingcart from './Shoppingcart';
import Pricedetails from './Pricedetails';
import { toast } from 'react-toastify';
import React, { useState, useEffect,useContext } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Shippingcard from '../Footer/Shippingcard';
import Swal from 'sweetalert2';
import { CakeContext } from "../Context/cakecontext";
import { fetchgetplaceOrder,fetchgetcakeCartView } from '../../src/Services/Api';
import axios from "axios";
function Buyingpage() {
  const [showAddress, setShowAddress] = useState(false);
  // const [cake, setCake] = useState([]);
  const [totalamount, setTotalAmount] = useState(0);
   const navigate = useNavigate();
 const successSwalConfig = {
  position: "center",
  icon: "success",
  title: "Sucessfully Placed Your Order 🎉",
  showConfirmButton: false,
  timer: 1500,
};
  
const { setCartCount } = useContext(CakeContext);
  const discount = totalamount * 0.05
  const dicountamnt = totalamount - discount
  const formRef = useRef();

const placeorder = async () => {
    try {
       const response = await axios.post(
       fetchgetplaceOrder,
       {
        f_user_id: 2  
      },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
       console.log("place order details",response.data)
     
 
      
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
  
  const handlePlaceOrder = () => {

    if (!showAddress) {

      setShowAddress(true);
    } else {

      formRef.current?.handleSubmit();
    }
    if(showAddress){
     
        // toast('Sucessfully Place Your Order',{theme:'light',position:'top-right'})
        setCartCount(0)
        placeorder()
        
        Swal.fire(successSwalConfig);
        navigate('/home')
    }

  };
  
   const handleTotalCalculated = (total) => {
    console.log("Received total from child.....:", total);
    setTotalAmount(total);
  };

  // const handleTotalAmount = (total) => {
  //   setTotalAmount(total); // receive value from child

  // };
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <div className='buying'>
        <Container>
          <Row>
            <Col md="7">
              {!showAddress ? (<Shoppingcart  totalAmount={totalamount} disCount={dicountamnt} />) : (<Address formRef={formRef} />)}

              <div>
                <button type="submit" className='palceoreder-btn' onClick={handlePlaceOrder}>Place Order</button>
              </div>
            </Col>
            <Col md="4">
              <Pricedetails  onTotalCalculated={handleTotalCalculated}  />
            </Col>
          </Row>
        </Container>
        {/* <Shippingcard /> */}
      </div>
<Footer />
    </div>

  )
}
export default Buyingpage;