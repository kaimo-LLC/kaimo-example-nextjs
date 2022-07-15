import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
var axios = require('axios');
import { useEffect, useState } from "react";
//require('@tailwindcss/aspect-ratio');

export default function Home() {
  const [state, setState] = useState({
    variants: []
    });

  useEffect(() => {retrieveVariants()
  },[]);

  useEffect(() => {Example()
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
  // Each file should include 
  // image of product
  // title of product
  // description of product
  // price of product
  return (
    // <div className= "info" style ={{backgroundColor: '#f5fcff'}}>
    //   {state.variants.map(function (variant, index) {
    //   return (
    //       <div key={index}>
    //       {variant.category}  {variant.brand} {variant.price} {variant.description}
    //       </div>
    //          );
    //   })}   
    // </div>

    <div className= "info" style ={{backgroundColor: '#f5fcff'}}>
      <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {state.variants.map(function (variant, index) {
          return (
          // console.log("inside function");
            <li key={index} className="relative">
            <div key = {index} className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
              <img src={'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80'} alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
              <button type="button" className="absolute inset-0 focus:outline-none">
                <span className="sr-only">View details for {variant.brand}</span>
              </button>
            </div>
            <div align = "center">
            <p className="block text-sm font-medium text-gray-500 pointer-events-none">{'$' + variant.price}</p>
            <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{variant.category}</p>
            <p className="block text-sm font-medium text-gray-500 pointer-events-none" id = "description">{variant.description}</p>
            </div>
          </li>

          );
        })}
        </ul>
    </div>
  ) 
}

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const files = [
  {
    title: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  // More files...
]

function Example() {
  return (
    <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      {files.map((file) => (
        <li key={file.source} className="relative">
          <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
            <img src={file.source} alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
            <button type="button" className="absolute inset-0 focus:outline-none">
              <span className="sr-only">View details for {file.title}</span>
            </button>
          </div>
          <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{file.title}</p>
          <p className="block text-sm font-medium text-gray-500 pointer-events-none">{file.size}</p>
        </li>
      ))}
    </ul>
  )
}
