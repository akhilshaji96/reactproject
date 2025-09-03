import Header from '../Header/Header';
import Body from '../body/Body'
import Footer from '../Footer/Footer'

// import { CakeContext } from '../../src/Context/cakecontext'
import { useState,useMemo } from 'react';
function Home() {
  //  const [cartCount, setCartCount] = useState(0);
  //  const providerCountValue = useMemo(() => ({cartCount,setCartCount}), [cartCount]); 
  return (
    <div>
  
   
        <Header/>
        <Body />
       <Footer />
    

    </div>
   
  );
}

export default Home;