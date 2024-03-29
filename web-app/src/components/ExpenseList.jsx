import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {FaEdit,FaEye,FaTrash,FaTrashAlt} from "react-icons/fa";



const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  const fetchData = () => {
    axios
      .get("http://localhost:9001/api/expenses")
      .then((response) => {
        setExpenses(response.data)
        console.log(response.data)
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  const handleDelete = async (id) => {
		await axios.delete(
			`http://localhost:9001/api/expenses/${id}`
		);
		fetchData();
	};

  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="col-md-6">
        <h2>Expense List</h2>
        </div>

        <div className="col-md-6 text-right">
          <Link to="/create" className="btn btn-primary">Add New Expense</Link>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <br />
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>#Id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.id}</td>
                  <td>{expense.name}</td>
                  <td>{expense.description}</td>
                  <td>{expense.date}</td>
                  <td>{expense.amount}</td>
                  <td>{expense.status} </td>
                  <td>
                   
                  <Link to={`/edit/${expense.id}`} className="btn btn-primary"> <FaEdit/> </Link>
                  <Link
										to={`/view/${expense.id}`}
										className="btn btn-info">
										<FaEye />
									</Link>
                  <button onClick = {() => handleDelete(expense.id)} className="btn btn-danger"> <FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ExpenseList;