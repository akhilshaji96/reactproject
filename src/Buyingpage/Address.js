import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import {  Row,Col} from 'reactstrap';
import {Formik,  Form, Field, } from 'formik';

function Address() {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log("hheu")
    
  };

  return (


    <div className="placeorder">
        <div className="shopping-details">
            <h4>Shopping Details</h4>
        </div>
      <div className="shipping">
        
    <div className="shipaddress">
        <div className="address">
          <span style={{ color: 'red', marginRight: '5px' }}>
            <FaLocationDot />
          </span>
          <span>
            Fort bakery, Manacaud <br />
            TVPM pin 695999
          </span>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              style={{ marginLeft: '50px' }}
            />
         <span style={{marginLeft:"5px"}}>Uncheck to update the address</span>   
          </label>
        </div>
        </div>
      </div>

      <div className="update-address">
        {!isChecked && (
            <Formik>
            <Form>
          <div className="address-form">
            <h3 style={{ marginTop: '25px' }}>Temporary Address</h3>
            <Row>
                <Col md="6">
                    <div className="form-group">
                    <label htmlFor="street">Street</label>
                    <input type="text" id="street" placeholder="Street" />
                    </div>

                    <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" placeholder="City" />
                    </div>
                </Col>
                <Col md="6">
                    <div className="form-group">
                    <label htmlFor="state">State</label>
                    <Field type="text" id="state" placeholder="State" />
                    </div>

                    <div className="form-group">
                    <label htmlFor="zip">Zip Code</label>
                    <Field type="text" id="zip" placeholder="Zip Code" />
                    </div>
                 </Col>   
            </Row>
          </div>
          </Form>
          </Formik>
        )}
      </div>
    </div>
  );
}

export default Address;
