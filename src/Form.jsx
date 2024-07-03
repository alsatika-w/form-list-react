import React, { useState } from 'react';
import List from './List';

const Form = () => {
  const initialFormState = {
    name: '',
    major: '',
    age: '',
    hobby: '',
    motivation: ''
  };

  const [form, setForm] = useState(initialFormState);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRegistration(form);
    setForm(initialFormState);
  };

// const handleSelectedTodoForEdit = (todo) => {
//     this.setState({ form: todo });
//   };

  const [registrations, setRegistrations] = useState([]);

  const addRegistration = (registration) => {
    setRegistrations([...registrations, registration]);
  };


  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
        <h2>Biodata Form</h2>

            <label className="form-label">FullName</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder='Enter your name'
              value={form.name}
              onChange={handleChange}
              required
              />
        
          <div className="mb-3">
            <label className="form-label">Major</label>
            <input
              type="text"
              className="form-control"
              name="major"
              placeholder='Enter your major'
              value={form.major}
              onChange={handleChange}
              required
              />
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="text"
              className="form-control"
              name="age"
              placeholder='Enter your age'
              value={form.age}
              onChange={handleChange}
              required
              />
          </div>
          <div className="mb-3">
            <label className="form-label">Your Hobby</label>
            <input
              type="text"
              className="form-control"
              name="hobby"
              placeholder='Enter your hobby'
              value={form.hobby}
              onChange={handleChange}
              required
              />
          </div>
          <div className="mb-3">
            <label className="form-label">Motivation</label>
            <textarea
              className="form-control"
              name="motivation"
              placeholder='Enter your motivation for joining this organization'
              value={form.motivation}
              onChange={handleChange}
              required
              />
          </div>
          <button className="button" type="submit">Register</button>
        </form>
        <List
        registrations={registrations}
        />
        </div>
  );
};

export default Form;
