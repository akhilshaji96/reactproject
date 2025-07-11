import { Button} from 'reactstrap';
function Shoppingcart(props){
    return(
          <div className='shoopingcart'>
                        <div className='address-bar'>
                            <p>Shopping Cart</p>
                        </div>


                       
              {props.cakeitem.map((item) => (
                <div className='buying-content'>
                    <div className='buying-img'>
                        <img src={item.images} alt={item.title} />
                    </div>
                    <div className='buying-item'>
                        <span>{item.title}</span>
                        <div className='item-kg'><span>KG : 1</span></div>
                        <div className='item-seller'><span>seller: Sweet Indulegence </span></div>
                        <div className='item-rs'><span>{item.price}</span></div>
                        <Button className='remove-btn'> Remove</Button>
                    </div>
                </div>
            ))}
                       

                       
                        <div className='totalitem-added'>
                          <div className='totalhead'>
                            <p>Total</p>
                          </div>
                          <div className='totalrs'>
                            <p>₹3010</p>
                          </div>
                        </div>
                        </div>
    )
}
export default Shoppingcart;