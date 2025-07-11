import React, {  useEffect } from 'react';

function Pricedetails(props){

function calculateTotal(cakeitem){
    return cakeitem.reduce((sum, item) => sum + Number(item.price || 0), 0);
    }
        

 useEffect(() => {
    const total = calculateTotal(props.cakeitem);
    if (props.onTotalCalculated) {
      props.onTotalCalculated(total); // send to parent
    }
  }, [props.cakeitem]);



    return(
          <div className='price-details'>
                        <div className='price-heading'>
                            <p>Price Details</p>
                        </div>
                        <div className='individual-prices'>
                           {props.cakeitem.map((item) => ( <div className='price-item'>
                                <span>{item.title}</span><span style={{marginLeft:'5px'}}></span>   
                                <span>{item.price}</span>
                                
                            </div>
                             ))}
                             
                               <div className='price-total'>
                                <span>Total Amount</span>
                                <span>₹{calculateTotal(props.cakeitem)}</span>
                                
                            </div>

                        </div>
                     </div>
    )
}
export default Pricedetails;