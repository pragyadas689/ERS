import React from 'react';

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Expense Reimbursement System</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/expenses">Expenses</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/reimbursements">Reimbursements</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/profile">My Profile</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
