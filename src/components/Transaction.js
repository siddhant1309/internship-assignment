// Transaction.js
import React, { useState } from 'react';

const Transaction = () => {
  const [formData, setFormData] = useState({
    walletAddress: '',
    amount: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     // Validation checks
//     if (!formData.walletAddress.trim()) {
//       alert('Wallet address cannot be empty');
//       return;
//     }
  
//     const walletAddressRegex = /^0x[a-fA-F0-9]{40}$/;
//     if (!walletAddressRegex.test(formData.walletAddress)) {
//       alert('Invalid Ethereum wallet address format');
//       return;
//     }
  
//     const amount = parseFloat(formData.amount);
//     if (isNaN(amount) || amount < 0 || amount > 10000) {
//       alert('Invalid amount. Please enter a number between 0 and 10,000.');
//       return;
//     }
  
//     // If all validations pass, you can proceed with submitting the data
//     // Add logic to send data to Firestore or any other desired action
//     console.log('Form data submitted:', formData);
//   };

const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validation checks
    if (!formData.walletAddress.trim()) {
      alert('Wallet address cannot be empty');
      return;
    }
  
    const walletAddressRegex = /^0x[a-fA-F0-9]{40}$/;
    if (!walletAddressRegex.test(formData.walletAddress)) {
      alert('Invalid Ethereum wallet address format');
      return;
    }
  
    const amount = parseFloat(formData.amount);
    if (isNaN(amount) || amount < 0 || amount > 10000) {
      alert('Invalid amount. Please enter a number between 0 and 10,000.');
      return;
    }
  
    // If all validations pass, you can proceed with submitting the data
    // Add logic to send data to Firestore or any other desired action
    console.log('Form data submitted:', formData);
  };
  
  

  return (
    <div>
      <h2>Transaction Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Wallet Address:
          <input
            type="text"
            name="walletAddress"
            value={formData.walletAddress}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Transaction;
