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

  const [registrations, setRegistrations] = useState([]);

  const addRegistration = (registration) => {
    setRegistrations([...registrations, registration]);
  };


  return (
      <div className="form d-flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nama:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Jurusan:</label>
            <input
              type="text"
              className="form-control"
              name="major"
              value={form.major}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Usia:</label>
            <input
              type="number"
              className="form-control"
              name="age"
              value={form.age}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Hobi:</label>
            <input
              type="text"
              className="form-control"
              name="hobby"
              value={form.hobby}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Motivasi:</label>
            <textarea
              className="form-control"
              name="motivation"
              value={form.motivation}
              onChange={handleChange}
              required
            />
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
        <List
        registrations={registrations}
        />
      </div>
  );
};

export default Form;
