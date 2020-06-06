import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Carousel from 'components/index-sections/Carousel'

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
const Product = (props) => (
  <tr>
    <td>{props.products.username}</td>
    <td>{props.products.description}</td>
    <td>{props.products.value}</td>
    <td>{props.products.date.substring(0,10)}</td>
    <td>{props.products.image}</td>
    <td>
      <Link to={"/edit/"+props.products._id}>edit</Link> | <a href="#" onClick={() => { props.deleteProduct(props.products._id) }}>delete</a>
    </td>
  </tr>
)
const LandingPage=()=> {
   const [productss, setproductss] = React.useState([])
  React.useEffect(() => {
    axios.get('http://localhost:5000/products/')
        .then(response => {
          setproductss( response.data );
        })
        .catch((error) => {
          console.log(error);
        })
  });
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
    
  });
  function productList() {
    return productss.map(currentexercise => {
      return <Product products={currentexercise}  jhkey={currentexercise._id}/>;
    })
  }

  function deleteProduct(id) {
    console.log("hola mani");
    axios.delete('http://localhost:5000/products/'+id)
      .then(response => { console.log(response.data)});
      setproductss( productss.filter(el => el._id !== id));
  }
  return (
    <>
      <ExamplesNavbar />
 
        <DefaultFooter /> 
           </>
  );
}

export default LandingPage;