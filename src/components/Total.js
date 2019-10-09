import React from 'react';
import { useSelector } from 'react-redux';

const Total = () => {
  // see Header.js for mapStateToProps function explanation
  const {car, additionalPrice} = useSelector(({car, additionalPrice})=>({car, additionalPrice}))
  
  return (
    <div className="content">
      <h4>Total Amount: ${car.price + additionalPrice}</h4>
    </div>
  );
};

export default Total;
