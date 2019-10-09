import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

// mapStateToProps function explanation:
// ({car})=>({car})
//      ↓↓↓
// function(state) {
//   const { car } = state
//   return { car }
// }
//      ↓↓↓
// function(state) {
//   const car = state.car
//   return {car: car}
// }
export default connect(({car})=>({car}))(Header)
