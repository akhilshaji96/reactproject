// import Featuredcarousel from './Featuredcarousel' 
import Detailedcake from './Detailedcake';
import Shippingcard from '../Footer/Shippingcard';
import Bannercarousel from './Bannercarousel';
// import Categories from './Categories';
import CakeByCategories from './CakeByCategories';

// import Skeleton from './Skeleton' 
// import './Body.css'
function Body(){
      return (
        <div className='bodycontents'>
            
            <div className='bannercarousel'>
   
                <Bannercarousel />
                </div>
            <CakeByCategories />
            <Shippingcard />
            <Detailedcake />
            
        </div>

    )
}
export default Body;