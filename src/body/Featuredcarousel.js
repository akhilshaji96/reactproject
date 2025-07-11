import {  useState,useEffect } from 'react';
import Cards from './Cards.js'
// import './Body.css'
// import { Link } from 'react-router-dom';
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
      const response = await fetch("https://mocki.io/v1/4c96305c-b4d6-4b40-af21-46e3e63ae4eb");

      setTimeout(async () => {
        const data = await response.json();
        setCake(data);
        setloading(false);
      }, 2000); 
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
            : cake.map((item, idx) => (
              <Cards cakes={item} size={3} className="detailed-card" to= {`/detailed/${item.id}`} state={{ cake: item }} key={idx} />
              ))}
        </Row>
       </Container>
       
    </div>
  
    )

}
export default Featuredcarousel;




