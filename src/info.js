import React from 'react';
import "./styles/style.css";

const Info = (name,age) => {
  console.log(props)

  let friends=["貓熊兔","波兒","煙火人"];

  return (
    <div className='info'>
      <h1>朋友名稱：{name}</h1>
      <h1>朋友年齡：{age}</h1>
    </div> 
  );
};

export default Info;