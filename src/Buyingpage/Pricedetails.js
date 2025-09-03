import React, {  useEffect } from 'react';
import { Card, CardHeader, ListGroup, ListGroupItem, Row, Col } from 'reactstrap';
import QRCode from 'react-qr-code';
function Pricedetails(props) {

  function calculateTotal(cakeitem) {
    return cakeitem.reduce((sum, item) => sum + Number(item.price || 0), 0);
  }


  useEffect(() => {
    const total = calculateTotal(props.cakeitem);
    if (props.onTotalCalculated) {
      props.onTotalCalculated(total); // send to parent
    }
  }, [props.cakeitem]);



  return (

    <div>
      <Card style={{ marginTop: '10px' }}>
        <CardHeader>
          <div className='card-head' > Price Details</div>
        </CardHeader>
        <ListGroup flush>
          <ListGroupItem>
            <Row>

              {props.cakeitem.map((item) => (<div className='price-item'>
                <Col md='4'>
                  <span>{item.title}</span>
                </Col>
                <Col md='2'>
                  <span style={{fontWeight:'400',fontSize:'12px',color:'#000'}}>KG : 1</span>
                </Col>
                <Col md='3'>
                  <span> ₹ {item.price}</span>
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
                <span style={{ marginLeft: '17px', fontWeight:'bold' }}>₹{props.disCount}</span>
              </Col>
            </Row>
          </CardHeader>
        </ListGroup>
      </Card>

        



    </div>
  )
}
export default Pricedetails;