import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Expense Reimbursement System</p>
      </div>
    </footer>
  );
};

export default Footer;
