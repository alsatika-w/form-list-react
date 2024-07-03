import React, { useState } from 'react';

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });      
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted successfully');
        } else {
            console.log('Form submitted failed due to validation errors');
        }
    };

    const validateForm = (data) => {
        const errors = {};

        if (!data.username.trim()) {
            errors.username = 'Username is required';
        }

        if (!data.password) {
            errors.password = 'Password is required';
        } 

        return errors;
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
            <div className="imgcontainer">
                <img src="avatar.png" className='avatar' alt="avatar" />
            </div>
                <div className="container mb-3">
                    <label className="form-label">Username</label>
                    <input
                        type="username"
                        className={`form-control ${errors.username ? 'error' : ''}`}
                        name="username"
                        placeholder='Enter username'
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && (
                        <span className="error-message">{errors.username}</span>
                    )}
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className={`form-control ${errors.password ? 'error' : ''}`}
                        name="password"
                        placeholder='Enter your password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && (
                        <span className="error-message">{errors.password}</span>
                    )}
                </div>
                <button type="submit" className="button">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
