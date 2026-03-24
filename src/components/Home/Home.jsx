import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
    // axios.get('https://my-json-server.typicode.com/Mjunaid65665/user-management-app-CRUD--React-vite/users')
      axios.get("http://localhost:3000/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Delete Function
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios
        .delete(`http://localhost:3000/users/${id}`)
        .then((res) => {
          console.log(res);
          setUsers(users.filter((user) => user.id !== id));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="container d-flex flex-column justify-content-center vh-100">
      <div className="row">
        <div className="heading text-center m-4">
          <h1>List of Users</h1>
        </div>
        <div className="col-lg-10 col-md-12 rounded mx-auto bg-white border shadow p-4">

          <Link to="/create" className="btn btn-primary mb-3">
            + Add User
          </Link>

          <table className="table  table-striped">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Username</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center">
                    No users found
                  </td>
                </tr>
              ) : (
                users.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>{user.phone}</td>
                    <td>
                      <Link to={`/read/${user.id}`} className="btn btn-info btn-sm me-2">Read</Link>
                      <Link to={`/update/${user.id}`} className="btn btn-warning btn-sm me-2">Update</Link>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
};

export default Home;