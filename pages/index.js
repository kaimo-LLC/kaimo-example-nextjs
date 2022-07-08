import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
var axios = require('axios');
import { useEffect, useState } from "react";

export default function Home() {
  const [state, setState] = useState({
    variants: []
    });

  useEffect(() => {retrieveVariants()
  },[]);

  function retrieveVariants() {
      axios.post('api/variants')
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setState({
          ...state,
          variants: response.data.message
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  console.log(state);
  return (
    <div>
                        {state.variants.map(function (variant, index) {
                      return (
                        <div
                          key={index}
                        >
                          {variant.brand}
</div>
                      );
                    })}   
  
    </div>
  )
}
