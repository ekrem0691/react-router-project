import React from 'react';
import { useEffect,useState } from 'react';
import {Link} from 'react-router-dom';
import styles from './Product.module.css';

const Products = () => {


  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([]); 


  useEffect(() => {
  
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then((json) => setProducts(json));
    
   }, [])
  
   console.log(products);


  return (
    <div>
      <h2>Products Sayfası</h2>
      <div className={styles.products}>
        {products.map((product) => (
          <Link to={`details/${product.id}`} key={product.id} className= {styles.product}>
            <h6>{product.category}</h6>
            <p>{product.title}</p>
            <img style={{width: "100px"}} src={product.image} alt=""/>
          </Link>
        ))}
      </div>
    </div>

  )
}

export default Products