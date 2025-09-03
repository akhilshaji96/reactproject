import { Container } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import Header from "../Header/Header"
import Address from './Address';
import Shoppingcart from './Shoppingcart';
import Pricedetails from './Pricedetails';
import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Shippingcard from '../Footer/Shippingcard';
function Buyingpage() {
  const [showAddress, setShowAddress] = useState(false);
  const [cake, setCake] = useState([]);
  const [totalamount, setTotalAmount] = useState(0);
   const navigate = useNavigate();


  const discount = totalamount * 0.05
  const dicountamnt = totalamount - discount
  const formRef = useRef();


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

    if (!showAddress) {

      setShowAddress(true);
    } else {

      formRef.current?.handleSubmit();
    }
    if(showAddress){
        toast('Sucessfully Place Your Order',{theme:'light',position:'top-right'})
        navigate('/home')
    }

  };

  const handleTotalAmount = (total) => {
    setTotalAmount(total); // receive value from child

  };



  return (
    <div>
      <Header />
      <div className='buying'>
        <Container>
          <Row>
            <Col md="7">
              {!showAddress ? (<Shoppingcart cakeitem={cake} totalAmount={totalamount} disCount={dicountamnt} />) : (<Address formRef={formRef} />)}

              <div>
                <button type="submit" className='palceoreder-btn' onClick={handlePlaceOrder}>Place Order</button>
              </div>
            </Col>
            <Col md="4">
              <Pricedetails cakeitem={cake} onTotalCalculated={handleTotalAmount} disCount={dicountamnt} />
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