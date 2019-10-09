import React from 'react';
import { useSelector } from 'react-redux';

import AddedFeature from './AddedFeature';

const AddedFeatures = () => {
  // see Header.js for mapStateToProps function explanation
  const { car } = useSelector(({car})=>({car}))

  return (
    <div className="content">
      <h6>Added features:</h6>
      {car.features.length ? (
        <ol type="1">
          {car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
