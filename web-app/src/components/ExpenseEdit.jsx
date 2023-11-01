import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";

import {
	Link,
	useNavigate,
	useParams,
} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ExpenseEdit = () => {
	let navigate = useNavigate();

	const { id } = useParams();

	const [expense, setExpense] = useState({
		name : "",
		description : "",
		date: "",
		amount : "",
	});
	const {
		name,
		description,
		date,
		amount,
	} = expense;

	

    const fetchData = () => {
        axios
          .get(`http://localhost:9001/api/expenses/${id}`)
          .then((response) => {
            setExpense(response.data)
            console.log(response.data)
          })
          .catch((error) => console.log(error));
      };

    useEffect(() => {
		fetchData();
	}, []);

	const handleInputChange = (e) => {
		setExpense({
			...expense,
			[e.target.name]: e.target.value,
		});
	};
	const updateExpense = async (e) => {
		e.preventDefault();
		await axios.put(
			`http://localhost:9001/api/expenses/${id}`,
			expense
		);
		navigate("/");
	};

	return (
		<div className="d-flex flex-column min-vh-100">
      <Navbar />
		<div className="col-sm-8 py-2 px-5 offset-2 shadow">
			<h2 className="mt-5 "> Edit Expense</h2>
			<form onSubmit={(e) => updateExpense(e)}>
				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="Name">
						Name
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="name"
						id="name"
						required
						value={name}
						placeholder={expense.name}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="description">
						Description
					</label>
					<input
						className="form-control col-sm-6"
						type="description"
						name="description"
						id="description"
						required
						value={description}
						placeholder={expense.description}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="email">
						Date
					</label>
					<input
						className="form-control col-sm-6"
						type="date"
						name="date"
						id="date"
						required
						value={date}
						placeholder={expense.date}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="amount">
						Amount
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="amount"
						id="amount"
						required
						value={amount}
						placeholder={expense.amount}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="row mb-5">
					<div className="col-sm-2">
						<button
							type="submit"
							className="btn btn-success btn-lg">
							Save
						</button>
					</div>

					<div className="col-sm-2">
						<Link
							to={"/"}
							type="submit"
							className="btn btn-warning btn-lg">
							Cancel
						</Link>
					</div>
				</div>
			</form>
		</div>
		<Footer/>
		</div>
	);
};

export default ExpenseEdit;