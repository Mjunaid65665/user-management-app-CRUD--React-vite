import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  // Fetch existing user data
  useEffect(() => {
    
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  // Validation
  const validate = () => {
    let err = {};
    if (!values.name) err.name = "Name is required";
    if (!values.email) err.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(values.email)) err.email = "Email is invalid";
    if (!values.username) err.username = "Username is required";
    if (!values.phone) err.phone = "Phone number is required";
    return err;
  };

  // Handle Input Change
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length > 0) {
      setErrors(err);
    } else {
      axios
      // .put(`https://my-json-server.typicode.com/Mjunaid65665/user-management-app-CRUD--React-vite/users/${id}`, values)
        .put(`http://localhost:3000/users/${id}`, values)
        .then((res) => {
          console.log(res);
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="container d-flex flex-column justify-content-center vh-100">
      <div className="row">
        <div className="heading text-center m-4">
          <h1>Update User</h1>
        </div>
        <div className="col-lg-6 col-md-8 rounded mx-auto bg-white border shadow p-4">

          {/* Back Button */}
          <Link to="/" className="btn btn-secondary mb-4">
            ← Back
          </Link>

          <form onSubmit={handleSubmit}>

            {/* Name */}
            <div className="mb-3">
              <label className="form-label fw-bold">Name</label>
              <input
                type="text"
                name="name"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                placeholder="Enter name"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label fw-bold">Email</label>
              <input
                type="email"
                name="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                placeholder="Enter email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            {/* Username */}
            <div className="mb-3">
              <label className="form-label fw-bold">Username</label>
              <input
                type="text"
                name="username"
                className={`form-control ${errors.username ? "is-invalid" : ""}`}
                placeholder="Enter username"
                value={values.username}
                onChange={handleChange}
              />
              {errors.username && <div className="invalid-feedback">{errors.username}</div>}
            </div>

            {/* Phone */}
            <div className="mb-3">
              <label className="form-label fw-bold">Phone No</label>
              <div className="input-group">
                <span className="input-group-text">+92</span>
                <input
                  type="text"
                  name="phone"
                  className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                  placeholder="3001234567"
                  value={values.phone.replace("+92", "")}
                  onChange={handleChange}
                  maxLength={10}
                />
                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-warning w-100 fw-bold">
              ✏️ Update User
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;