import {Card,CardBody,CardTitle,CardText,Button} from 'reactstrap';
import { Col } from 'reactstrap';
import {  useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import './Body.css'
function Cards(props){
    const[cakes,setCakes]=useState(props.cakes);
    const[size,setSize]=useState(props.size);
    
function handleClick (e) {
  e.preventDefault();
  notify();
}
    const notify=()=>toast('Sucessfully Add to cart',{theme:'light',position:'top-right'}) 

    return(
    
<Col md={props.size}>
 <Link to ={props.to} state={props.state} style={{ textDecoration: 'none'}}>
    <Card className={props.className} >
    <img className={props.className+"-img"} alt="Sample"src={cakes.images}/>
    <CardBody>
        <CardTitle tag="h5">
        {cakes.title}
        </CardTitle>
        
        <CardText className={props.className+"-text"}>
        {cakes.text}
        </CardText>
        <div className='card-footer' style={{ backgroundColor: '#fff',border:'none' }}>
            <div className='rupees'>
                <h3>{cakes.price}</h3>
            </div>
        <Button onClick={handleClick}  style={{ backgroundColor: '#fd7cc2', color: '#fff',border:'none' }}>
        Add to Cart
        </Button>
       
        </div>
        
    </CardBody>
    </Card>
    </Link> 
</Col>

     
 


    )
}

export default Cards;