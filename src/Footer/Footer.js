import logo from '../assests/icons8-cake-48.png';
// import './Footer.css'
function Footer(){
    return (
           <div className=" container-fluid footer-section d-flex justify-content-between align-items-cente">
                    <div className="left-side-footer">
                        <a href=""><img src={logo} width="35"></img></a>
                        <span className='ml-5'>@ 2025 Sweet Indulgence.All rights reserved</span>
                    </div>
                    <div className="right-side-footer d-flex justify-content-center gap-3">
                        <a href="" className="text-decoration-none">Privacy Policy</a>
                        <a href="" className="text-decoration-none">Terms of Service</a>
                    </div>
                </div>
    )
}
export default Footer;