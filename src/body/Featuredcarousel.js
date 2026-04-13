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

      
  const cakeByDetails = async () => {
      try {
          setloading(true);
          const Data = {
                  start: 0,
                  numberOfRows: 3
                };
        const response = await axios.post(
          fetchgetAllCakeApi,Data,
         
          
          {
            headers: {
              "Content-Type": "application/json"
            }, 
           
          },
          );
           setCake(response.data.data.result); 
           console.log("gggg",response.data.data.result)
          setloading(false);
           console.log("Data Sent Successfully....:", response.data);
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
                <Cards cakes={item} size={3} className="detailed-card" to= {`/detailed/${item.cake_id}`} state={{ cake: item }} key={idx} />
                ))}
            </Row>
        </Container>
       
    </div>
  
    )

}
export default Featuredcarousel;




