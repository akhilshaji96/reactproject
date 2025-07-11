import { Container} from 'reactstrap';
import {  Row, Col,Button } from 'reactstrap';
import Header from "../Header/Header"
import Address from './Address';
import Shoppingcart from './Shoppingcart';
import Pricedetails from './Pricedetails';
import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';

function Buyingpage(){
const [showAddress, setShowAddress] = useState(false);
const [cake, setCake] = useState([]);
const [totalamount, setTotalAmount] = useState(0);

 async function cakedatas() {
    try {
      const response = await fetch("https://mocki.io/v1/fdb53fd2-d671-45d2-ad67-694f0637dc22");
      const data = await response.json();
      setCake(data);
    } catch (error) {
      console.error(error);
      
    }
  }
  useEffect(() => {
    cakedatas();
  }, []);

  const handlePlaceOrder = () => {
        setShowAddress(true);
        if(showAddress){
            toast('Sucessfully Add to cart',{theme:'light',position:'top-right'})
        }
         
    };

     const handleTotalAmount = (total) => {
        setTotalAmount(total); // receive value from child
  };
    return(
        <div>
            <Header />
            <div className='buying'>
                <Container>
                  <Row>
                      <Col md ="7">
                          {!showAddress ? (<Shoppingcart cakeitem={cake} onTotalCalculated={handleTotalAmount} />) : (<Address />)}
                      
                        <div>
                            <button type='button' className='palceoreder-btn' onClick={handlePlaceOrder}>Place Order</button>
                        </div>
                      </Col>
                      <Col md ="4">
                        <Pricedetails cakeitem={cake} />
                      </Col>
                  </Row>
                </Container>
            </div>
            
      </div>   
      
    )
}
export default Buyingpage;