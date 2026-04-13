import React, {  useEffect, useState } from 'react';
import { Card, CardHeader, ListGroup, ListGroupItem, Row, Col } from 'reactstrap';
import QRCode from 'react-qr-code';
import { fetchgetcakeCartView } from '../../src/Services/Api';
import axios from "axios";
function Pricedetails({onTotalCalculated}) {
  const userid=2
  const [pricedetails,SetPriceDetails]=useState([])
    const [total, setTotal] = useState(0);

  function calculateTotal(cakeitem) {
    return cakeitem.reduce((sum, item) => sum + Number(item.cake_price || 0), 0);
  }
   const cartorderprice = async () => {
    try {
      const response = await axios.get(`${fetchgetcakeCartView}/${userid}`);
      const cartData = response.data.data;
      SetPriceDetails(cartData);

      const totalValue = calculateTotal(cartData);
      setTotal(totalValue);
      if (onTotalCalculated) {
        onTotalCalculated(totalValue);
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };
     


  useEffect(() => {
    cartorderprice();
    // const total = calculateTotal(cartData);
    // if (onTotalCalculated) {
    //   onTotalCalculated(total); // send to parent
    // }
  }, []
);
 const discount = (total * 5) / 100;
  const finalTotal = total - discount;


  return (

    <div>
      <Card style={{ marginTop: '10px' }}>
        <CardHeader>
          <div className='card-head' > Price Details</div>
        </CardHeader>
        <ListGroup flush>
          <ListGroupItem>
            <Row>

              {pricedetails.map((item) => (<div className='price-item'>
                <Col md='4'>
                  <span style={{fontSize:"12px"}}>{item.cake_name}</span>
                </Col>
                <Col md='2'>
                  <span style={{fontWeight:'500',fontSize:'12px',color:'#6d6b6bff'}}>KG : 1</span>
                </Col>
                <Col md='3'>
                  <span style={{fontSize:"12px"}}> ₹ {item.cake_price}</span>
                </Col>
              </div>
              ))}

            </Row>
            {/* <Row>
              <Col md="8">
              <span style={{fontWeight:'bold'}}>Sub Total </span>
              </Col>
              <Col md="3">
                <span style={{marginLeft:'17px',fontWeight:'bold'}} >₹{calculateTotal(props.cakeitem)}</span>
              </Col>
             </Row> */}

            <Row style={{ marginTop: '2px' }}>
              <Col md="8">
                <span style={{ color: 'green', fontSize: '12px' }}>Discount(5%) </span>
              </Col>
              <Col md="3">
                <span style={{ marginLeft: '30px', color: 'green', fontSize: '12px' }}>5%</span>
              </Col>
            </Row>

          </ListGroupItem>
          <CardHeader>

             <Row style={{ marginTop: '2px' }}>
              <Col md="8">
                <span style={{fontWeight:'bold' }}> Total </span>
              </Col>
              <Col md="3">
                <span style={{ marginLeft: '17px', fontWeight:'bold' }}>₹{finalTotal}</span>
              </Col>
            </Row>
          </CardHeader>
        </ListGroup>
      </Card>

        



    </div>
  )
}
export default Pricedetails;