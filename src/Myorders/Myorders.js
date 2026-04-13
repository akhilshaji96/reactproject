import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import axios from "axios";
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";
import { fetchorderHistoryByUserId } from '../../src/Services/Api'
import { useNavigate } from 'react-router-dom';
// import { useParams } from "react-router-dom";
function Myorders(){
  const navigate = useNavigate();
  const [myorder,setMyorder]=useState([])
  const user_id=1
   const myorders = async () => {
      try {
         
        const response = await axios.get(`${fetchorderHistoryByUserId}/${user_id}`,
       
          
          
          {
            headers: {
              "Content-Type": "application/json"
            }
          },
          );
        console.log("myOrder Successfully:", response.data);
        setMyorder( response.data.data)
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
        myorders();
    },[]);
     const handleRowClick = (order) => {
    navigate(`/orderdetails/${order.order_id}`, { state: { order } });
    
  };

  return (
  <div>
    <Header />
    <div style={{ marginTop: '70px' }}>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr >
              <th>SlNo</th>
              <th>UserName</th>
              <th>Order-Id</th>
              <th>Total Items</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {myorder.map((order, idx) => (
               
              <tr onClick={() => handleRowClick(order)}>
                
                <td>{order.order_slno}</td>
                <td>{order.user_name}</td>
                <td>{order.order_id}</td>
                <td>{order.total_items}</td>
                <td>{order.order_total}</td>
             
              </tr>
             
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Footer />
  </div>
);

}
export default Myorders