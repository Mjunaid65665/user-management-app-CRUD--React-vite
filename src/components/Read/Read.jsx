import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Read = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container d-flex flex-column justify-content-center vh-100">
      <div className="row">
        <div className="heading text-center m-4">
          <h1>User Details</h1>
        </div>
        <div className="col-lg-6 col-md-8 rounded mx-auto bg-white border shadow p-4">

          {/* Back Button */}
          <Link to="/" className="btn btn-secondary mb-4">
            ← Back
          </Link>

          {user ? (
            <>
              {/* User Card */}
              <div className="text-center mb-4">
                {/* Avatar */}
                <div
                  className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{ width: "80px", height: "80px", fontSize: "2rem" }}
                >
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <h4 className="fw-bold">{user.name}</h4>
                <p className="text-muted">@{user.username}</p>
              </div>

              <hr />

              {/* User Info */}
              <div className="mb-3 row">
                <label className="col-sm-4 fw-bold text-muted">Name</label>
                <div className="col-sm-8">{user.name}</div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-4 fw-bold text-muted">Email</label>
                <div className="col-sm-8">{user.email}</div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-4 fw-bold text-muted">Username</label>
                <div className="col-sm-8">@{user.username}</div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-4 fw-bold text-muted">Phone No</label>
                <div className="col-sm-8">{user.phone}</div>
              </div>

              <hr />

              {/* Action Buttons */}
              <div className="d-flex gap-2">
                <Link to={`/update/${user.id}`} className="btn btn-warning w-50">
                  ✏️ Update
                </Link>
                <Link to="/" className="btn btn-secondary w-50">
                  🏠 Home
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3 text-muted">Loading user details...</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Read;