// src/components/ForgotPassword.js
import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/auth/forgot-password', { email });
            alert("Password reset link sent to your email.");
        } catch (error) {
            alert("Failed to send password reset link.");
        }
    };

    return (
        <form onSubmit={handleForgotPassword}>
            <h2>Forgot Password</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <button type="submit">Send Reset Link</button>
        </form>
    );
};

export default ForgotPassword;
