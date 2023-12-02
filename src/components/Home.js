// Home.js
import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  const navigateToTransactionPage = () => {
    history.push('/transaction');
  };

  const navigateToDataPage = () => {
    history.push('/data');
  };

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={navigateToTransactionPage}>Go to Transaction Page</button>
      <button onClick={navigateToDataPage}>Go to Data Page</button>
    </div>
  );
};

export default Home;
