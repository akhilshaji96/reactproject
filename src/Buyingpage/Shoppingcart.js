import { Button } from 'reactstrap';
import { Card, CardHeader, ListGroup, ListGroupItem } from 'reactstrap';
import {  useEffect,useState } from 'react';
import { fetchgetcakeCartView } from '../../src/Services/Api';
import axios from "axios";
function Shoppingcart(props) {
   const userid=1
     const [orderadded, setOrderadded] = useState([])
   const cartordercakes = async () => {
    try {
    
      const response = await axios.get(
       `${fetchgetcakeCartView}/${userid}`)
        .then((responses)=>{
                console.log("response",responses.data.data)
                setOrderadded(responses.data.data)
            });
 
      
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
    cartordercakes();
   
  }, []);
  return (
    <div>
      <Card style={{ marginTop: '10px' }}>
        <CardHeader >
          <div className='card-head' >Shopping Cart</div>
        </CardHeader>
        <ListGroup flush>
          <ListGroupItem className="scrollable-list">
            {orderadded.map((item) => (
              <div className='buying-content'>
                <div className='buying-img'>
                  <img src={item.cake_image} alt={item.title} />
                </div>
                <div className='buying-item'>
                  <span>{item.cake_name}</span>
                  <div className='item-kg'><span>KG : {item.cart_qty}</span></div>
                  <Button className='remove-btn'> Remove</Button>
                  <div className='item-seller'><span>seller: Sweet Indulegence </span></div>
                  <div className='item-rs'><span>₹ {item.cake_price}</span></div>

                </div>
              </div>
            ))}
          </ListGroupItem>

          <CardHeader>
            <div className='totalitem-added'>
              <div className='totalhead'>
                <p>Total</p>
              </div>
              <div className='totalrs'>
                <p>₹{props.disCount}</p>
              </div>
            </div>
          </CardHeader>
        </ListGroup>
      </Card>




      {/* <div className='shoopingcart'>
                        <div className='address-bar'>
                            <p>Shopping Cart</p>
                        </div>


                       
             
                       

                       
                        <div className='totalitem-added'>
                          <div className='totalhead'>
                            <p>Total</p>
                          </div>
                          <div className='totalrs'>
                            <p>₹3010</p>
                          </div>
                        </div>
                        </div> */}
    </div>
  )
}
export default Shoppingcart;