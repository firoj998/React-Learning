import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3030/users", inputData).then((res) => 
    {
        alert("Data posted successfully!!")
      })
      navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
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
              type="email"
              className="form-control"
              name="Email"
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
          </div>
          <br />
          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
