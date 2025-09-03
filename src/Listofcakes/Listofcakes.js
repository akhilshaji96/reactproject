import { Card, CardTitle, CardText, Button, CardBody } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { useState, useEffect, useContext } from 'react';
import { MdOutlineDeliveryDining } from "react-icons/md";
import { GiWeight } from "react-icons/gi";
import { MdOutlineBakeryDining } from "react-icons/md";
import Header from "../Header/Header"
import { IoListSharp } from "react-icons/io5";
import { IoGridSharp } from "react-icons/io5";
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { fetchgetAllCakeApi, fetchgetcartcount,fetchaddtoCart  } from '../../src/Services/Api';
import axios from 'axios';
import { CakeContext } from '../Context/cakecontext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Listofcakes() {
  const user_id = 2
  const { cartCount, setCartCount } = useContext(CakeContext);
  const [cakes, setCakes] = useState([]);
  const [isListView, setIsListView] = useState(true);
  const navigate = useNavigate();
  const toggleView = () => { setIsListView(!isListView); };
  const notify = () => toast('Sucessfully Add to cart', { theme: 'light', position: 'top-right' })
  const getCartCount = async () => {
    try {
      const response = await axios.get(`${fetchgetcartcount}/${user_id}`);

      setCartCount(response.data.data);

    } catch (error) {
      console.error("Error fetching cart count:", error);
    }
  };
  const cakeByDetails = async () => {
    try {
      await axios.post(
        fetchgetAllCakeApi,
      ).then((response) => {
        console.log("response", response.data)
        setCakes(response.data.data);
        console.log("Added to cart:", response.data);
       
        if (response.status == 200) {
           notify();
        }
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
    cakeByDetails();
  }, []);
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


  const handleCardClick = (item) => {
    navigate(`/detailed/${item.id}`, { state: { cake: item } });
  };

  return (
    <div>
      <Header />
      <Container>

        <div className='list-cake'>

          <div className='grid-list'>
            <h3>List Of Cakes</h3>
            <button onClick={toggleView} className='grid-listbtn'>
              {isListView ? <IoGridSharp /> : <IoListSharp />}
            </button>
          </div>

          {isListView ? (
            <div>
              {cakes.map((item) => (
                <Card body className='cardbody' onClick={() => handleCardClick(item)} style={{ cursor: 'pointer' }}>
                  <Row onClick={() => handleCardClick(item)} style={{ cursor: 'pointer' }} >

                    <Col md="4">
                      <img src={item.cake_image} style={{ width: '360px', height: '225px' }} alt={item.title}></img>
                    </Col>
                    <Col md="8">
                      <CardTitle tag="h5" >
                        {item.cake_name}
                      </CardTitle>
                      <CardText style={{ color: '#928b87' }}>
                        {item.cake_details}
                      </CardText>
                      <Row>
                        <Col md="4">
                          <div style={{ color: '#fd7cc2' }}><MdOutlineDeliveryDining size={25} /> <span style={{ color: '#928b87' }}>Free delivery</span></div>
                          <div style={{ color: '#fd7cc2' }}><GiWeight size={20} /><span style={{ marginLeft: '10px', color: '#928b87' }}>Available in 0.5 Kg, 1 Kg, 2 Kg</span></div>
                          <div style={{ color: '#fd7cc2' }}><MdOutlineBakeryDining size={20} /><span className='icon-text' style={{ color: '#928b87' }}>Natural Ingridents</span></div>
                        </Col>

                      </Row>

                    </Col>
                  </Row>
                  <div className='card-footer' style={{ backgroundColor: '#fff', border: 'none' }}>
                    <div className='rupees'>
                      <h3>₹{item.cake_price}</h3>
                    </div>
                    <Button onClick={(e) => {
    e.stopPropagation(); 
    handleClick(e);       
  }} style={{ backgroundColor: '#fd7cc2', color: '#fff', border: 'none' }}>
                      Add to Cart
                    </Button>
                  </div>
                </Card>
              ))}
            </div>) : (



            <Row>
              {cakes.map((item, idx) => (
                <Col md="4" key={item.id}>
                  <Card style={{ width: '20rem', margin: '10px', cursor: 'pointer' }} onClick={() => handleCardClick(item)} key={idx} >
                    <img alt="Card" src={item.cake_image} />
                    <CardBody>
                      <CardTitle tag="h5">
                        {item.cake_name}
                      </CardTitle>
                      <CardText style={{ color: '#928b87' }}>
                        {item.cake_details}
                      </CardText>
                      <CardText>
                        <div className='cakeprice'>
                          <h3>₹{item.cake_price}</h3>
                          <Button onClick={handleClick} style={{ backgroundColor: '#ff8dcb', border: 'none' }}>Add to Cart</Button>
                        </div>
                      </CardText>
                    </CardBody>
                    <CardBody>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </div>
      </Container>
      <Footer />

    </div>
  );
}
export default Listofcakes;