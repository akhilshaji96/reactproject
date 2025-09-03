
import logo from '../assests/icons8-cake-48.png';
import cart from '../assests/icons8-cart-64.png';
// import cloud from '../assests/cloud.png';
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { Row, Col } from 'reactstrap'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Card, CardHeader, ListGroup, ListGroupItem } from 'reactstrap';
import { CakeContext } from '../Context/cakecontext';
import axios from "axios";
import { fetchgetcakeCartView } from '../../src/Services/Api' 
import { RootState } from "../../src/utils/reducer";
import { useSelector } from "react-redux";

function Header() {
     const username = useSelector((state: RootState) => state.auth.username);
   const { cartCount, setCartCount } = useContext(CakeContext);
    
  const [open, setOpen] = useState(false);
  const toggleoffcanva = () => setOpen(!open);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cartadded, setCartadded] = useState([])
  const toggledropdown = () => setDropdownOpen(!dropdownOpen);
  const userid=2
  const user_id=2
  console.log('999999999....',cartCount)
  console.log('123456......',cartadded)
  const addtocartcakes = async () => {
    try {
    
      const response = await axios.get(
       `${fetchgetcakeCartView}/${userid}`)
        .then((responses)=>{
                console.log("response",responses.data.data)
                setCartadded(responses.data.data)
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
    addtocartcakes();
    // getCartCount()
  }, []);
  return (
    <div className=" container-fluid left-side d-flex justify-content-between align-items-center ">
      <div className="left-side-logo">
        <Link to='/home'>   <img alt='logo' src={logo} width="35"></img></Link>
        <span className='logo-text mx-2 '>Sweet Indulgence {username}</span>
        <div className="left-side-cloud">
          {/* <img src={cloud} width="15"></img> */}
          {/* <span className='cloud-text mx-2'>AI Cake Advisor</span> */}
          {/* <p className='list-of-cakes'><Link to="/list">List of Cakes</Link> </p> */}
        </div>
      </div>
      {/* <div className='header-center d-flex justify-content-between align-items-center'> */}

      {/* </div> */}

      <div className="right-side-cart">
        <p className='list-of-cakes'><Link to="/home">Home</Link> </p>
        <p className='list-of-cakes'><Link to="/list">Cakes</Link> </p>
        <p className='list-of-cakes'><Link to="/about">About Us</Link> </p>
        <p className='list-of-cakes'><Link to="/contact">Contact</Link> </p>


        {/* ................cart............. */}
        <div>
          <img alt='cart' src={cart} width="25" onClick={toggleoffcanva} style={{ marginRight: '35px' }}></img> {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>)}
   
        
          <Offcanvas style={{ backgroundColor: '#f9f6f0' }} isOpen={open} toggle={toggleoffcanva} direction="end">
            <OffcanvasHeader toggle={toggleoffcanva}><h4>Shopping Cart(0)</h4></OffcanvasHeader>
            <OffcanvasBody>
              <Card style={{ width: '23rem' }}>

                <ListGroup flush>
                  {cartadded.map((item) => (
                  <ListGroupItem style={{ backgroundColor: 'rgb(249, 246, 240)' }}>
                    
                    <Row >

                      <Col md='4'>
                        <img alt='cake2' src={item.cake_image} style={{ width: '100px', height: '100px', padding: '7px' }}></img>
                      </Col>
                      <Col md='6'>
                        <h6>{item.cake_name}</h6>
                        <span style={{ color: '#6f6d6d' }}>KG : {item.cart_qty}</span>
                        <div><span style={{ color: '#6f6d6d' }}>Price : ₹{item.cake_price}</span></div>
                      </Col>

                    </Row>
                  
                  </ListGroupItem>
                    ))}
                  <CardHeader style={{ backgroundColor: 'rgb(211, 211, 211)' }}>
                    <Row>
                      {/* <h5 style={{textAlign:'center'}}>Details</h5> */}
                      <Col md='4'>
                        <span style={{ fontFamily: 'bold' }}> Total Item :</span>
                        <div><span style={{ fontFamily: 'bold' }}>Price : </span></div>
                      </Col>
                      <Col md='6'>

                        <span style={{ fontFamily: 'bold' }}> 3</span>
                        <div><span style={{ fontFamily: 'bold' }}>₹2500</span></div>
                      </Col>
                    </Row>
                  </CardHeader>

                </ListGroup>
              </Card>




              <div className='place-order-btn'>
                <Link to='/buy'>  <button type='button' style={{ backgroundColor: '#fd7cc2', width: '300px', color: '#fff', position: "fixed", bottom: '10%', height: '50px', border: 'none', marginLeft: '30px' }}>Cart Order</button>
                </Link>
              </div>
            </OffcanvasBody>
          </Offcanvas>

        </div>
        {/* ...........profile....dropdown......... */}
        <div className="profile-dropdown-container">
          <Dropdown isOpen={dropdownOpen} toggle={toggledropdown} direction="down">
            <DropdownToggle className="profile-toggle" caret>
              <img
                src="https://i.pravatar.cc/40"
                alt="Profile"
                className="profile-img"
              />
            </DropdownToggle>

            <DropdownMenu style={{ marginTop: '50px' }}>

              <Link to='/myprofile' style={{ textDecoration: 'none' }}><DropdownItem>My Profile</DropdownItem></Link>
              <Link to='/myorders' style={{ textDecoration: 'none' }}> <DropdownItem>My Order</DropdownItem></Link>
              <Link to='/logout' style={{ textDecoration: 'none' }}><DropdownItem >Logout</DropdownItem></Link>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>


  )
}
export default Header

