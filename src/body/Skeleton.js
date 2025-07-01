import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import {Card,CardBody,CardTitle,CardText,Button} from 'reactstrap';
// import { Col } from 'reactstrap';
function skeleton(){
    return(
   
        <Card >
          <Skeleton width={300} height={300} />
            <CardBody>
                <CardTitle tag="h5">
                    <Skeleton width={200} height={20} style={{textAlign:'center'}} />
                </CardTitle>
        
                <CardText style={{textAlign:'left'}}>
                    <Skeleton width={280} height={50} style={{textAlign:'left'}} />
                </CardText>
                <div className=' d-flex justify-between' >
                    <div className='rupees'>
                        <h3><Skeleton width={80} height={50} style={{marginRight:'100px'}} /></h3>
                    </div>
                    <div className='button'>
                        <h3><Skeleton width={80} height={50} style={{textAlign:'right'}} /></h3>
                    </div>
                </div>
    </CardBody>
    </Card>

    )
}
export default skeleton