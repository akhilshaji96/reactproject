import {  useState,useEffect } from 'react';
import Cards from './Cards.js'
import axios from "axios";
import { fetchgetAllCakeApi } from '../../src/Services/Api.js'
import { Container, Row,Col} from 'reactstrap';
import Skeleton from './Skeleton.js';
function Featuredcarousel(props){
    const[cake,setCake]=useState([]);
      const [loading, setloading] = useState(false);
      console.log('ttttt',props.cakebydetails)

       
  //       async function cakedatas() {
  //   try {
  //     setloading(true);
  //     const response = await fetch("https://mocki.io/v1/4c96305c-b4d6-4b40-af21-46e3e63ae4eb");

  //     setTimeout(async () => {
  //       const data = await response.json();
  //       setCake(data);
  //       setloading(false);
  //     }, 2000); 
  //   } catch (error) {
  //     console.error(error);
  //     setloading(false);
  //   }
  // }
  const cakeByDetails = async () => {
      try {
          setloading(true);
        const response = await axios.post(
          fetchgetAllCakeApi,
         
          
          {
            headers: {
              "Content-Type": "application/json"
            }
          },
          );
           setCake(response.data.data); 
          setloading(false);
           console.log("Data Sent Successfully:", response.data);
      } catch (error) {
        setloading(false);
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
    cakeByDetails();
},[]);
      
    return(
     <div className='bodytype'>
        <h1 className='head '>Featured Delights</h1>
        <Container  >
            <Row className="d-flex justify-content-evenly align-items-center">
              {loading ? Array(3).fill(0).map((_, i) => (
                  <Col md="3" key={i} >
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




