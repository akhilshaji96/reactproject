import { useState, useEffect } from 'react';
import Cards from './Cards.js';
import { Container, Row, Col } from 'reactstrap';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { fetchgetAllCakeApi } from '../../src/Services/Api.js'
import axios from "axios";
function Detailedcake() {
  const [cake, setCake] = useState([]);
  const [loading, setloading] = useState(false);

  const cakedatas = async () => {
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
          
           console.log("Data Sent Successfully:", response.data);
      } catch (error) {
       
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
    cakedatas();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '35px',marginTop:'35px' }}>Our cakes</h1>
      <Container>
        <Row>
          {cake.map((item, idx) => (
              <Cards cakes={item} size={4} to= {`/detailed/${item.id}`} state={{ cake: item }} key={idx} className="detailed-card" />
              
                
              ))}
      
        </Row>
      </Container>
    </div>
  );
}

export default Detailedcake;
