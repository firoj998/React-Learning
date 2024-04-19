// import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function Update() {
  const { id } = useParams();
  const [inputData, setInputData] = useState({
    id:id,
    name: "",
    email: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3030/users/" + id)
    .then((res) => setInputData(res.data))
    .catch((err) => console.log(err));
    
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put("http://localhost:3030/users/" + id, inputData)
    .then((res) => {
      alert("Data Updated successfully!!" + res);
    });
    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="id">ID:</label>
            <input
              value={inputData.id}
              type="number"
              className="form-control"
              name="Id"
              disabled
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              value={inputData.name}
              type="text"
              className="form-control"
              name="Name"
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              value={inputData.email}
              type="email"
              className="form-control"
              name="Email"
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
          </div>
          <br />
          <button type="submit" className="btn btn-info ">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Update;
