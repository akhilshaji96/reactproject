
import logo from '../assests/icons8-cake-48.png';
import cart from '../assests/icons8-cart-64.png';
import cloud from '../assests/cloud.png';
import { Offcanvas, OffcanvasHeader, OffcanvasBody,Navbar,
  NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {Row,Col} from 'reactstrap'
import { Dropdown,DropdownToggle,DropdownMenu,DropdownItem,UncontrolledDropdown,Button} from 'reactstrap';
import { CgProfile } from "react-icons/cg";
function Header(){

    const [open, setOpen] = useState(false);
    const toggleoffcanva = () => setOpen(!open);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggledropdown = () => setDropdownOpen(!dropdownOpen);
  
    return(
        <div className=" container-fluid left-side d-flex justify-content-between align-items-center ">
            <div className="left-side-logo">
          <Link to ='/home'>   <img src={logo} width="35"></img></Link>
                <span className='logo-text mx-2 '>Sweet Indulgence</span>
                <div className="left-side-cloud">
                {/* <img src={cloud} width="15"></img> */}
                {/* <span className='cloud-text mx-2'>AI Cake Advisor</span> */}
                <p className='list-of-cakes'><Link  to ="/list">List of Cakes</Link> </p>
            </div>
            </div>
          
            <div className="right-side-cart">
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

                    <DropdownMenu style={{marginTop:'50px'}}>
                      
                      <DropdownItem>My Profile</DropdownItem>
                      <DropdownItem>My Order</DropdownItem>
                      <Link to = '/logout' style={{textDecoration:'none'}}><DropdownItem >Logout</DropdownItem></Link>
                    </DropdownMenu>
                </Dropdown>
    </div>
                 
               {/* ................cart............. */}
                <div>    
                <img src={cart} width="25" onClick={toggleoffcanva} style={{marginRight:'35px'}}></img> 
                  <Offcanvas  style={{backgroundColor: '#f9f6f0'}} isOpen={open} toggle={toggleoffcanva} direction="end">
                    <OffcanvasHeader toggle={toggleoffcanva}><h4>Shopping Cart(0)</h4></OffcanvasHeader>
                    <OffcanvasBody>
                    {/* <h4>Add to Cart</h4> */}
                    <div className='cart-items' style={{border:'1px solid #bababa',marginBottom:'20px',borderRadius:'7px'}}>
                      <Row>
                        
                        <Col md='4'>
                            <img src="https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg" style={{width:'100px', height:'100px',padding:'7px'}}></img>
                        </Col>
                        <Col md ='6'>
                        <h6>Black Forest</h6>
                        <span style={{color:'red',color:'#6f6d6d'}}>KG : 1</span>
                     <div><span style={{color:'red',color:'#6f6d6d'}}>Price : ₹250</span></div> 
                        </Col>
                      </Row>

                    </div>
                     <div className='cart-items' style={{border:'1px solid #bababa',marginBottom:'20px',borderRadius:'7px'}}>
                      <Row>
                        
                        <Col md='4'>
                            <img src="https://pyramideats.com/cdn/shop/files/EgglessRedVelvetCake1.webp?v=1686747136&width=900" style={{width:'100px', height:'100px',padding:'7px'}}></img>
                        </Col>
                        <Col md ='6'>
                        <h6>Red Velvet</h6>
                        <span style={{color:'red',color:'#6f6d6d'}}>KG : 1</span>
                     <div><span style={{color:'red',color:'#6f6d6d'}}>Price : ₹250</span></div>   
                        </Col>
                      </Row>

                    </div>
                     <div className='cart-items' style={{border:'1px solid #bababa',marginBottom:'20px',borderRadius:'7px'}}>
                      <Row>
                        
                        <Col md='4'>
                            <img src="https://d1b8m1fazs6o9v.cloudfront.net/eyJidWNrZXQiOiJwcm9kLWZlcmd1c29ucGxhcnJlLWFzc2V0cyIsImtleSI6ImNhdGFsb2cvcHJvZHVjdC92L2UvdmVnYW5fcmFpbmJvd19zcHJpbmtsZXNfZGVjdmVnNi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==?signature=5fb2cc437a0276c85b7d786be8c3fe612f4dbc0b32435ac7337b8cba7826771a" style={{width:'100px', height:'100px',padding:'7px'}}></img>
                        </Col>
                        <Col md ='6'>
                        <h6>White Forest</h6>
                        <span style={{color:'red',color:'#6f6d6d'}}>KG : 1</span>
                     <div><span style={{color:'red',color:'#6f6d6d'}}>Price : ₹250</span></div> 
                        </Col>
                      </Row>

                    </div>
                      <div className='cart-items' style={{border:'3px solid #bababa',marginBottom:'20px',borderRadius:'7px',padding:'20px',backgroundColor:'#bababa'}}>
                      <Row>
                        {/* <h5 style={{textAlign:'center'}}>Details</h5> */}
                        <Col md='4'>
                            <span style={{fontFamily:'bold'}}> Total Item :</span>
                           <div><span style={{fontFamily:'bold'}}> Total :</span></div> 
                        </Col>
                        <Col md ='6'>
                        
                        <span style={{fontFamily:'bold'}}> 3</span>
                        <div><span style={{fontFamily:'bold'}}>Price : ₹2500</span></div> 
                        </Col>
                      </Row>

                    </div>
                   

                    <div className='place-order-btn'>
                   <Link to ='/buy'>  <button type='button' style={{backgroundColor:'#fd7cc2',width:'300px',color:'#fff', position:"fixed",bottom:'10%',height:'50px',border:'none',marginLeft:'30px'}}>Cart Order</button>
                    </Link> 
                    </div>
                    </OffcanvasBody>
                </Offcanvas>
      
                </div>
            </div>
        </div>


    )
}
export default Header

