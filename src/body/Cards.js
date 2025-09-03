import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { Col } from 'reactstrap';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CakeContext } from '../Context/cakecontext';
import { fetchaddtoCart,fetchgetcartcount } from '../../src/Services/Api';
import axios from 'axios';
function Cards(props) {
    const user_id=2
    const { cartCount, setCartCount } = useContext(CakeContext);
    const [cakes, setCakes] = useState(props.cakes);
    const [size, setSize] = useState(props.size);
    const notify = () => toast('Sucessfully Add to cart', { theme: 'light', position: 'top-right' })

   const getCartCount = async () => {
    try {
      const response = await axios.get( `${fetchgetcartcount}/${user_id}`);
      
      setCartCount(response.data.data);
  
    } catch (error) {
      console.error("Error fetching cart count:", error);
    }
  };

    async function handleClick(e) {
        e.preventDefault();

            const addToCartData= {
            "f_user_id":2,
            "f_cake_id":cakes.cake_id,
            "cart_qty":cakes.cake_qty,
            
        }
        console.log(addToCartData)
        try {

            await axios.post(
                fetchaddtoCart,
                addToCartData
            ).then((response)=>{
                console.log("response",response)
                       console.log("Added to cart:", response.data);
                       if(response.status==200){
                            getCartCount();
                       }
            });

            notify();
          
        } catch (error) {
            console.error("Error adding to cart:", error);

        }
    }


    return (

        <Col md={props.size}>
            <Link to={props.to} state={props.state} style={{ textDecoration: 'none' }}>
                <Card className={props.className} >
                    <img className={props.className + "-img"} alt="Sample" src={cakes.cake_image} />
                    <CardBody>
                        <CardTitle tag="h5">
                            {cakes.cake_name}
                        </CardTitle>

                        <CardText className={props.className + "-text"}>
                            {cakes.cake_details}
                        </CardText>
                        <div className='card-footer' style={{ backgroundColor: '#fff', border: 'none' }}>
                            <div className='rupees'>
                                <h3>{cakes.cake_price}</h3>
                            </div>
                            <Button onClick={handleClick} style={{ backgroundColor: '#fd7cc2', color: '#fff', border: 'none' }}>
                                Add to Cart
                            </Button>

                        </div>

                    </CardBody>
                </Card>
            </Link>
        </Col>





    )
}

export default Cards;