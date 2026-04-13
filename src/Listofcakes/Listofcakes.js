import { Card, CardTitle, CardText, Button, CardBody,Container, Row, Col } from 'reactstrap';
import { useState, useEffect, useContext } from 'react';
import { MdOutlineDeliveryDining } from "react-icons/md";
import { GiWeight } from "react-icons/gi";
import { MdOutlineBakeryDining } from "react-icons/md";
import Header from "../Header/Header"
import { IoListSharp,IoGridSharp } from "react-icons/io5";
import Footer from '../Footer/Footer';
import { useNavigate,Link } from 'react-router-dom';
import { fetchgetAllCakeApi, fetchgetcartcount, fetchaddtoCart } from '../../src/Services/Api';
import axios from 'axios';
import { CakeContext } from '../Context/cakecontext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowAltCircleLeft   } from "react-icons/fa";
function Listofcakes() {
  const user_id = 2
  const { cartCount, setCartCount } = useContext(CakeContext);
  const [cakes, setCakes] = useState([]);
  const [isListView, setIsListView] = useState(true);
  const navigate = useNavigate();
  const toggleView = () => { setIsListView(!isListView); };
  const notify = () => toast('Sucessfully Add to cart', { theme: 'light', position: 'top-right' })
// console.log("0000000000",cakes.cake_id)
  const getCartCount = async () => {
    try {
      const response = await axios.get(`${fetchgetcartcount}/${user_id}`);

      setCartCount(response.data.data);

    } catch (error) {
      console.error("Error fetching cart count:", error);
    }
  };
  const getallcakes = async () => {
    try {
      const Data = {
        start: 0,
        numberOfRows: 16
      };
      await axios.post(
        fetchgetAllCakeApi, Data,
      ).then((response) => {
        console.log("response", response.data.data.result)
        setCakes(response.data.data.result);
        console.log("Added to cart:", response.data);

        if (response.status == 200) {
          //  notify();
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
    getallcakes();

  }, []);
 
 const handleClick = async (e, item) => {
  e.preventDefault();
  console.log("item", item);

  const addToCartData = {
    f_user_id: 2,
    f_cake_id: item.cake_id,
    cake_qty: item.cake_qty, 
  };

  try {
    const response = await axios.post(fetchaddtoCart, addToCartData);

    console.log("Added to cart:", response.data);

    if (response.status === 200) {
      getCartCount();
      notify();
    }
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
};


  const handleCardClick = (item) => {
    navigate(`/detailed/${item.cake_id}`, { state: { cake: item } });
  };

  return (
    <div>
      <Header />
      <Container>

        <div className='list-cake'>
        
          <div className='grid-list'>
       <Link to="/home">    <div className="back-arrow"><FaArrowAltCircleLeft   /></div></Link> 
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
                          <div className='card-footer' style={{ backgroundColor: '#fff', border: 'none' }}>
                            <div className='rupees'>
                              <h3>₹{item.cake_price}</h3>
                            </div>
                            <div className="cart-btn">
                              <Button onClick={(e) => {
                                e.stopPropagation();
                                handleClick(e,item);
                              }} style={{ backgroundColor: '#fd7cc2', color: '#fff', border: 'none', marginLeft: "50px" }}>
                                Add to Cart
                              </Button>
                            </div>

                          </div>
                        </Col>

                      </Row>

                    </Col>
                  </Row>
                  {/* <div className='card-footer' style={{ backgroundColor: '#fff', border: 'none' }}>
                    <div className='rupees'>
                      <h3>₹{item.cake_price}</h3>
                    </div>
                    <Button onClick={(e) => {
    e.stopPropagation(); 
    handleClick(e);       
  }} style={{ backgroundColor: '#fd7cc2', color: '#fff', border: 'none' }}>
                      Add to Cart
                    </Button>
                  </div> */}
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
                          <Button onClick={(e) => {
                            e.stopPropagation();
                            handleClick(e, item);   
                          }} style={{ backgroundColor: '#ff8dcb', border: 'none' }}>Add to Cart</Button>
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