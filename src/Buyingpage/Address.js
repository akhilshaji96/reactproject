import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import {  Row,Col} from 'reactstrap';
import {Formik,  Form, Field,ErrorMessage } from 'formik';
import { Card, CardHeader, ListGroup, ListGroupItem } from 'reactstrap';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  address: Yup.string().required('Full Address is required'),
  city: Yup.string().required(' City is required'),
  state: Yup.string().required(' State is required'),
  pin: Yup.string().required(' Pin is required').matches(/^\d{6}$/, 'PIN Code must be exactly 6 digits'),

});
function Address({ formRef }) {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log("hheu")
    
  };

  return (
<div>
  <Card style={{ marginTop: '10px' }}>
  <CardHeader>
    <div className='card-head' >Shipping Details</div>
  </CardHeader>
  <ListGroup flush>
    <ListGroupItem>
        <div className="address">
          <span style={{ color: 'red', marginRight: '5px' }}>
            <FaLocationDot />
          </span>
          <span>
            Fort bakery, Manacaud <br />
            TVPM pin 695999
          </span>
        </div>
    </ListGroupItem>
    <ListGroupItem>
       <label style={{ padding:' 7px 0px'}}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              
            />
         <span style={{marginLeft:"5px"}}>Uncheck to Change the address</span>   
          </label>
          <div className="update-address">
        {!isChecked && (

             <Formik
                  innerRef={formRef} 
                  initialValues={{ address: '',city: '',state: '',pin:'' }}
                   validationSchema={validationSchema}

                  onSubmit={(values) => {
                    console.log('Form Submitted:', values);
                    
                  }}
    >
            <Form>
          <div className="address-form">
            <h3 style={{ marginTop: '25px' }}>Temporary Address</h3>
            <Row>
                <Col md="12">
                    <div className="form-group">
                         <label htmlFor="address">Address<span className="required">*</span></label>
                          <Field type="text" name="address" placeholder="Enter your full Address"  />
                          <ErrorMessage name="address" component="div" className='error' />
                    </div>
                </Col>
                <Col md ="6">
                  <div className="form-group">
                          <label htmlFor="city">City<span className="required">*</span></label>
                          <Field type="text" name="city" placeholder="Enter your city"  />
                          <ErrorMessage name="city" component="div" className='error' />
                  </div>
                </Col>
                 <Col md ="6">
                <div className="form-group">
                         <label htmlFor="state">State / Province<span className="required">*</span></label>
                          <Field type="text" name="state" placeholder="Enter your State"  />
                          <ErrorMessage name="state" component="div" className='error' />
                    </div>
                
                </Col>
                <Col md ="12">
                <div className="form-group">
                         <label htmlFor="state">Postal / Zip Code<span className="required">*</span></label>
                          <Field type="text" name="state" placeholder="Enter your Pin"  />
                          <ErrorMessage name="state" component="div" className='error' />
                    </div>
                
                </Col>
               
            </Row>
          </div>
          </Form>
          </Formik>
        )}
      </div>
    </ListGroupItem>
    
  </ListGroup>
</Card>

  </div>


    
   
  );
}

export default Address;
