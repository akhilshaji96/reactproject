import {Card,CardTitle,CardText,Button} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { useState,  useEffect } from 'react';
import { MdOutlineDeliveryDining } from "react-icons/md";
import { GiWeight } from "react-icons/gi";
import { MdOutlineBakeryDining } from "react-icons/md";
import Header from "../Header/Header"
function Listofcakes() {
   const [cake, setCake] = useState([]);

   async function cakedatas() {
        try {
          const response = await fetch("https://mocki.io/v1/ae892a8e-1e7f-49c4-8a22-1539a4bc40ef");
          const data = await response.json();
          setCake(data);
        } catch (error) {
          console.error(error);
          
        }
      }
      useEffect(() => {
        cakedatas();
      }, []);
  
  return (
    <div>
      <Header />
    <Container>
     <div className='list-cake'>
      {cake.map((cakes) => (
        <Card body>
          <Row>
           <Col md ="4">
              <img src={cakes.images} style={{width:'300px', height:'225px'}}></img>
            </Col>
        <Col md ="8">
          <CardTitle tag="h5">
            {cakes.title}
          </CardTitle>
          <CardText>
            {cakes.text}
          </CardText>
        <Row>
          <Col md ="4">
            <div><MdOutlineDeliveryDining size={25} /> <span>Free delivery</span></div>   
            <div><GiWeight size={20} /><span>Available in 0.5 Kg, 1 Kg, 2 Kg</span></div>
            <div><MdOutlineBakeryDining  size={20} /><span className='icon-text'>Natural Ingridents</span></div>
          </Col>
            <Col md ="4">
            
            </Col>
        </Row>
        
      <div className='card-footer' style={{ backgroundColor: '#fff',border:'none' }}>
            <div className='rupees'>
                <h3>{cakes.price}</h3>
            </div>
        <Button style={{ backgroundColor: '#fd7cc2', color: '#fff',border:'none' }}>
        Add to Cart
        </Button>

        </div>
      </Col>
      </Row>
    </Card>
      ))}
      
  
  </div>
  </Container>

   </div>
  );
}
export default Listofcakes;