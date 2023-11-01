import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ExpenseCreate = () => {

    const navigate = useNavigate()
    const [requestResponse, setRequestResponse] = useState({
        textMessage: '',
        alertClass: ''
    })

  const initialValues = {
    name: "",
    date: "",
    description : "",
    amount : "",
    status : "Pending"
  };

  const onSubmit = (values) => {
    axios
      .post("http://localhost:9001/api/expenses", values)
      .then((response) => {
        console.log(response.data);
        setRequestResponse({
            textMessage: 'expense added successfully',
            alertClass: 'alert alert-success'
        })
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
        setRequestResponse({
            textMessage: error.response.data.error,
            alertClass: 'alert alert-danger'
        })
      });
  };

  const validationSchema = Yup.object({
    name : Yup.string().required("name is required"),
    date: Yup.string().required("date is required"),
    description: Yup.string().required("description is required"),
    amount : Yup.string().required('amount is required')

  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="d-flex flex-column min-vh-100">
    <Navbar />
    <div className="container flex-grow-1">
      <div className="row">
        <div className="col-md-12">
          <br />
          <div class={requestResponse.alertClass} role="alert">
            {requestResponse.textMessage}
          </div>
          <br />
          <div className="wrapper">
          <h2 >Create a new Expense</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className={
                  formik.errors.name && formik.touched.name
                    ? "form-control is-invalid"
                    : "form-control"
                }
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.name && formik.touched.name ? (
                <small className="text-danger">{formik.errors.name}</small>
              ) : null}
            </div>

            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                name="date"
                className={
                  formik.errors.date && formik.touched.date
                    ? "form-control is-invalid"
                    : "form-control"
                }
                value={formik.values.date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.date && formik.touched.date ? (
                <small className="text-danger">{formik.errors.date}</small>
              ) : null}
            </div>

            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                name="description"
                className={
                  formik.errors.description && formik.touched.description
                    ? "form-control is-invalid"
                    : "form-control"
                }
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.description && formik.touched.description ? (
                <small className="text-danger">{formik.errors.description}</small>
              ) : null}
            </div>

            <div className="form-group">
              <label>Amount</label>
              <input
                type="text"
                name="amount"
                className={
                  formik.errors.amount && formik.touched.amount
                    ? "form-control is-invalid"
                    : "form-control"
                }
                value={formik.values.amount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.amount && formik.touched.amount ? (
                <small className="text-danger">{formik.errors.amount}</small>
              ) : null}
            </div>

            <input
              type="submit"
              value="Save"
              className="btn btn-primary"
              disabled={!formik.isValid}
            />
          </form>
          </div>
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <Footer/>
    </div>
  );
};
export default ExpenseCreate;
