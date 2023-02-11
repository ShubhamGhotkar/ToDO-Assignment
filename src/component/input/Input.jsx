import { useState, useEffect } from "react";
import Result from "../output/Result";
export default function Input() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [formError, setFormError] = useState({});
  const [formData, setFormData] = useState([]);
  const [inputData, setInputData] = useState({
    username: "",
    age: "",
    date: "",
  });
  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
      setFormData([...formData, inputData]);

      setInputData({ username: "", age: "", date: "" });
    }
  }, [formError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(inputData));
    setIsSubmit(true);
  };

  function validate(inputValue) {
    const error = {};
    if (inputValue.username === "") {
      error.username = "Username is required";
    }
    if (inputValue.age === "") {
      error.age = "Age is required";
    } else if (inputValue.age < 0) {
      error.age = "Age not Valid";
    }
    if (inputValue.date === "") {
      error.date = "Date is required";
    }

    return error;
  }

  const HandleEdit = (ind) => {
    const EditData = formData[ind];
    setInputData({ ...EditData });
    const filterData = formData.filter((val, index) => ind !== index);
    setFormData([...filterData]);
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  }
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="form-div">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={inputData.username}
              onChange={handleChange}
            />
          </div>
          <p>{formError.username}</p>
          <div className="field">
            <label>Age</label>
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={inputData.age}
              onChange={handleChange}
            />
          </div>
          <p>{formError.age}</p>
          <div className="field">
            <label>Date</label>
            <input
              type="date"
              name="date"
              placeholder="Date"
              value={inputData.date}
              onChange={handleChange}
            />
          </div>
          <p>{formError.date}</p>
          <button className="submit-button">Submit</button>
        </div>
      </form>

      <Result
        formData={formData}
        className="result"
        HandleEdit={HandleEdit}
        setFormData={setFormData}
      />
    </section>
  );
}
