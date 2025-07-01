import './Header.css'
import logo from '../assests/icons8-cake-48.png';
import cart from '../assests/icons8-cart-64.png';
import cloud from '../assests/cloud.png';
function Header(){
    return(
        <div className=" container-fluid left-side d-flex justify-content-between align-items-center ">
            <div className="left-side-logo">
                <a href=""><img src={logo} width="35"></img></a>
                <span className='logo-text mx-2 '>Sweet Indulgence</span>
                <div className="left-side-cloud">
                <a href=""><img src={cloud} width="15"></img></a>
                <span className='cloud-text mx-2'>AI Cake Advisor</span>
            </div>
            </div>
          
            <div className="right-side-cart">
                <a href=""><img src={cart} width="25"></img></a>
            </div>
        </div>


    )
}
export default Header