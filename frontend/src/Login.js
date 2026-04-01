import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log("Attempting login with:", email, password);

        fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, password: password })
        })
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    alert("Welcome, " + data[0].FullName + "!");
                } else {
                    alert("Invalid email or password!");
                }
            })
            .catch(err => console.error("Error:", err));
    };

    return (
        <div style={{
            textAlign: 'center',
            margin: '40px auto',
            padding: '30px',
            maxWidth: '400px',
            border: '2px solid #007bff',
            borderRadius: '10px'
        }}>
            <h2>Rozgar Pakistan - Login</h2>
            <div style={{ margin: '10px' }}>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ padding: '10px', width: '250px', fontSize: '14px' }}
                />
            </div>
            <div style={{ margin: '10px' }}>
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ padding: '10px', width: '250px', fontSize: '14px' }}
                />
            </div>
            <button
                onClick={handleLogin}
                style={{
                    padding: '10px 40px',
                    margin: '15px',
                    fontSize: '16px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Login
            </button>
        </div>
    );
}

export default Login;
