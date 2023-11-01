import React, {
	useEffect,
	useState,
} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ExpenseView = () => {
	const { id } = useParams();

	const [expense, setExpense] = useState({
		id : "",
		name : "",
		date : "",
		description : "",
        amount : "",
        status : "",
	});

	useEffect(() => {
		loadStudent();
	}, []);

	const loadStudent = async () => {
		const result = await axios.get(
			`http://localhost:9001/api/expenses/${id}`
		);
		setExpense(result.data);
	};

  let statusClass = '';
  if (expense.status === 'Approved') {
    statusClass = 'text-success'; 
  } else if (expense.status === 'Pending') {
    statusClass = 'text-warning'; 
  } else if (expense.status === 'Declined') {
    statusClass = 'text-danger'; 
  }

	return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container flex-grow-1">
        <br />
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card border-pink">
              <div className="card-header bg-black text-black text-center">
                Expense Details
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">ID :</h6>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{expense.id}</p>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">NAME :</h6>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{expense.name}</p>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">DATE :</h6>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{expense.date}</p>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">DESCRIPTION :</h6>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{expense.description}</p>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">AMOUNT :</h6>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{expense.amount}</p>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">STATUS :</h6>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{expense.status}</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
    }
export default ExpenseView;