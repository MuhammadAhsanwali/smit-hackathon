import React, { useState } from 'react';

const LoanForm = () => {
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [deposit, setDeposit] = useState(0);
  const [loanPeriod, setLoanPeriod] = useState(1);
  const [loanAmount, setLoanAmount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const loanCategories = {
    wedding: ['Valima', 'Furniture', 'Valima Food', 'Jahez'],
    home: ['Structure', 'Finishing', 'Loan'],
    business: ['Buy Stall', 'Advance Rent', 'Shop Assets', 'Shop Machinery'],
    education: ['University Fees', 'Child Fees'],
  };

  const calculateLoan = () => {
    let maxLoan = 0;
    if (category === 'wedding') maxLoan = 500000;
    else if (category === 'home' || category === 'business') maxLoan = 1000000;
    else if (category === 'education') maxLoan = 500000;

    const calculatedLoan = maxLoan - deposit;
    setLoanAmount(calculatedLoan);
  };

  return (
    <div className="container mx-auto p-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-xl shadow-xl">
      <h1 className="text-3xl font-extrabold text-white mb-8 text-center">
        Loan Application Form
      </h1>

      {/* Loan Category and Subcategory */}
      <div className="mb-6">
        <label className="block text-lg text-white mb-2">Select Loan Category</label>
        <select
          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="wedding">Wedding Loans</option>
          <option value="home">Home Construction Loans</option>
          <option value="business">Business Startup Loans</option>
          <option value="education">Education Loans</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-lg text-white mb-2">Select Subcategory</label>
        <select
          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
          value={subcategory}
          onChange={(e) => setSubcategory(e.target.value)}
        >
          <option value="">Select Subcategory</option>
          {category &&
            loanCategories[category]?.map((sub, index) => (
              <option key={index} value={sub}>
                {sub}
              </option>
            ))}
        </select>
      </div>

      {/* Deposit and Loan Period */}
      <div className="mb-6">
        <label className="block text-lg text-white mb-2">Initial Deposit (PKR)</label>
        <input
          type="number"
          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
          value={deposit}
          onChange={(e) => setDeposit(Number(e.target.value))}
        />
      </div>

      <div className="mb-6">
        <label className="block text-lg text-white mb-2">Loan Period (Years)</label>
        <input
          type="number"
          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
          value={loanPeriod}
          onChange={(e) => setLoanPeriod(Number(e.target.value))}
        />
      </div>

      {/* Loan Calculation */}
      <div className="mb-6">
        <button
          onClick={calculateLoan}
          className="w-full bg-purple-600 text-white py-3 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
        >
          Calculate Loan
        </button>
      </div>

      <div className="mb-6">
        {loanAmount > 0 && (
          <p className="text-white text-lg">
            Estimated Loan Amount: <strong>PKR {loanAmount}</strong>
          </p>
        )}
      </div>

      {/* Proceed Button */}
      <div>
        <button
          onClick={() => setShowPopup(true)}
          className="w-full bg-green-500 text-white py-3 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
        >
          Proceed
        </button>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96 transform transition-all duration-300 scale-95 hover:scale-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Enter Your Details</h2>
            <input
              type="text"
              placeholder="CNIC"
              className="w-full p-3 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <button
              onClick={() => alert('Account created successfully')}
              className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
            <button
              onClick={() => setShowPopup(false)}
              className="w-full mt-3 bg-red-500 text-white py-3 rounded-lg shadow-lg hover:bg-red-600 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanForm;
