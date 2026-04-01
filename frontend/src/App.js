import React, { useState, useEffect } from 'react';
import Login from './Login';
import ExperienceTable from './ExperienceTable';

function App() {
    const [experience, setExperience] = useState([]);

    // TASK 7: useEffect to READ data from backend
    useEffect(() => {
        fetch('http://localhost:5000/api/getExp')
            .then(response => response.json())
            .then(data => {
                console.log("Fetched experience data:", data);
                setExperience(data);
            })
            .catch(err => console.error("Fetch error:", err));
    }, []);

    // TASK 8: handleSave function to CREATE data
    const handleSave = () => {
        fetch('http://localhost:5000/api/addExp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                UserID: 1,
                JobTitle: 'Software Engineer',
                CompanyName: 'Systems Ltd',
                YearsWorked: 2
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log("Save response:", data);
                alert("Experience added successfully!");
                fetch('http://localhost:5000/api/getExp')
                    .then(response => response.json())
                    .then(data => setExperience(data));
            })
            .catch(err => console.error("Error:", err));
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center', color: '#007bff', marginTop: '20px' }}>
                Rozgar Pakistan - E-Resume Builder
            </h1>
            <Login />
            <hr style={{ margin: '30px 50px' }} />
            <ExperienceTable data={experience} />
            <div style={{ textAlign: 'center', margin: '20px' }}>
                <button
                    onClick={handleSave}
                    style={{
                        padding: '12px 40px',
                        fontSize: '16px',
                        backgroundColor: '#28a745',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    + Add Sample Experience
                </button>
            </div>
        </div>
    );
}

export default App;
