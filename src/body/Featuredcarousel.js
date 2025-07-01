import {  useState,useEffect } from 'react';
import Cards from './Cards.js'
import './Body.css'
import { Container, Row,Col} from 'reactstrap';
import Skeleton from './Skeleton.js';
function Featuredcarousel(){
    const[cake,setCake]=useState([]);
      const [loading, setloading] = useState(false);

        // async function cakedatas() {
        //     try{
        //         setloading(true)
        //         const response=await fetch ("https://mocki.io/v1/e1c3d37e-2d9e-4312-aeba-17036fef7098");
        //         const data =await response.json();
        //         setCake(data);
        //         setloading(false)
        //     }
        //     catch(error){
        //         console.error(error)
        //          setloading(false)
        //     }
        // }
        async function cakedatas() {
    try {
      setloading(true);
      const response = await fetch("https://mocki.io/v1/e1c3d37e-2d9e-4312-aeba-17036fef7098");

      // Optional: Simulate slow API
      setTimeout(async () => {
        const data = await response.json();
        setCake(data);
        setloading(false);
      }, 2000); // 2 seconds delay
    } catch (error) {
      console.error(error);
      setloading(false);
    }
  }

useEffect(() => {
    cakedatas();
},[]);
      
    return(
     <div className='bodytype'>
        <h1 className='head '>Featured Delights</h1>
         <Container  >
            <Row className="d-flex justify-content-evenly align-items-center">

 {loading ? Array(3).fill(0).map((i) => (
                <Col md="3" >
                  <Skeleton  />
                </Col>
              ))
            : cake.map((item) => (
              <Cards cakes={item} size={3} className=".detailed-card" />
              
                
              ))}

                
      
        </Row>
       </Container>
       
    </div>
  
    )

}
export default Featuredcarousel;