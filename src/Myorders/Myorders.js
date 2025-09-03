import Header from "../Header/Header"
import Footer from "../Footer/Footer"
// import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";
function Myorders(){
 const columns = [
  {
    name: 'Name',
    selector: row => row.name,
  },
  {
    name: 'Email',
    selector: row => row.email,
  },
  {
    name: 'Phone',
    selector: row => row.phone,
  },
  {
    name: 'Product',
    selector: row => row.product,
  },
 
];

const data = [
  {
    id: 1,
    name: 'John',
    email: 'john@gmai.com',
    phone: 7894561232,
    product: 'Black Forest'
  },
  {
    id: 2,
    name: 'Jane',
    email: 'jane@gmail.com',
    phone: 7894561232,
    product: 'Black Forest'
  },
   {
    id: 3,
    name: 'Jane',
    email: 'jane@gmail.com',
    phone: 7894561232,
    product: 'Black Forest'
  },
   {
    id: 4,
    name: 'Jane',
    email: 'jane@gmail.com',
    phone: 7894561232,
    product: 'Black Forest'
  },
];
    return(
        <div>
            <Header></Header>
        <div className="tabledata" style={{marginTop:'70px',textDecoration:'none'}}>
    <Link to ='/orderdetails'><DataTable
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        responsive/></Link>    
    </div>

            <Footer></Footer>
        </div>
    )
}
export default Myorders