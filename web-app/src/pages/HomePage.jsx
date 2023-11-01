import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ExpenseList from '../components/ExpenseList';

function HomePage() {
    return (
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <div className="container flex-grow-1">
            <h2>Welcome to the Expense Reimbursement System</h2>
            <p>Manage your expenses and reimbursements with ease.</p>
            <ExpenseList/>
          </div>
          <Footer />
        </div>
      );
}

export default HomePage;