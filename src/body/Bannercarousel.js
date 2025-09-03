import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../assests/cakebanner.png'
import cakebanner3 from '../assests/cakebanner3.png'
import { Row } from "reactstrap";




function Bannercarousel() {
    return(
         <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <img src={banner1} style={{height:'550px'}} />
          
        </div>
        <div>
          <img style={{height:'550px'}} src={cakebanner3} />
          
        </div>
    </Carousel>
    )

}

export default Bannercarousel;
