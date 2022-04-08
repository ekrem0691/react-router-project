// import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './Details.module.css';
import BackArrow from '../assets/BackArrow';
import CheckoutBag from '../assets/CheckoutBag';




const Details = () => {

  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});



  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${params.productId}`)
      .then(response => setProduct(response.data))
      .catch(error => console.log(error));
  }, [params.productId]);





  const handleBack = () => { 
    navigate(-1);
  };

  const handleCheckout = () => {
    navigate('/checkout');

  };



  return (
    <div>
      <div className={styles.detailsNav}>
        <BackArrow className= {styles.detailsNavIcon} onClick = {handleBack} />
        <h1>Details Sayfası</h1>
        <CheckoutBag className= {styles.detailsNavIcon} onClick = {handleCheckout} />
      </div>
      <h2>{product.title}</h2>
      <img src={product.image} alt="" />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.category}</p>
      <img
        className={styles.detailsImage}
        src={
          product.image
        }
        alt={product.title}
      />

    </div>
  )
}

export default Details