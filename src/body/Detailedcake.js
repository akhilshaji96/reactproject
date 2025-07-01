import { useState, useEffect } from 'react';
import Cards from './Cards.js';
import { Container, Row, Col } from 'reactstrap';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Detailedcake() {
  const [cake, setCake] = useState([]);
  const [loading, setloading] = useState(false);

  async function cakedatas() {
    try {
      setloading(true);
      const response = await fetch("https://mocki.io/v1/ae892a8e-1e7f-49c4-8a22-1539a4bc40ef");
      const data = await response.json();
      setCake(data);
      setloading(false);
    } catch (error) {
      console.error(error);
      
    }
  }
  useEffect(() => {
    cakedatas();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '35px' }}>Our cakes</h1>
      <Container>
        <Row>
          {cake.map((item) => (
              <Cards cakes={item} size={4} className="detailed-card" />
              
                
              ))}
      
        </Row>
      </Container>
    </div>
  );
}

export default Detailedcake;
