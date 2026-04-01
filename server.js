const sql = require('mssql');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// TASK 5: Database Configuration
const dbConfig = {
    user: 'sa',
    password: '123',
    server: 'localhost',
    database: 'RozgarDB',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

// Test database connection when server starts
sql.connect(dbConfig).then(() => {
    console.log("Connected to RozgarDB successfully!");
}).catch(err => {
    console.error("Database connection failed:", err);
});

// LOGIN API
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        let pool = await sql.connect(dbConfig);
        let result = await pool.request()
            .input('Email', sql.VarChar, email)
            .input('Password', sql.VarChar, password)
            .execute('sp_LoginUser');
        res.json(result.recordset);
    } catch (err) {
        console.error(err);
        res.status(500).send("Database Error");
    }
});

// TASK 7: GET Experience API (READ)
app.get('/api/getExp', async (req, res) => {
    try {
        let pool = await sql.connect(dbConfig);
        let result = await pool.request()
            .input('UserID', sql.Int, 1)
            .execute('sp_GetExperience');
        res.json(result.recordset);
    } catch (err) {
        console.error(err);
        res.status(500).send("Database Error");
    }
});

// TASK 6: POST Add Experience API (CREATE)
app.post('/api/addExp', async (req, res) => {
    try {
        const { UserID, JobTitle, CompanyName, YearsWorked } = req.body;
        let pool = await sql.connect(dbConfig);
        await pool.request()
            .input('UserID', sql.Int, UserID || 1)
            .input('JobTitle', sql.VarChar, JobTitle || 'Software Engineer')
            .input('CompanyName', sql.VarChar, CompanyName || 'Systems Ltd')
            .input('YearsWorked', sql.Int, YearsWorked || 2)
            .execute('sp_AddExperience');
        res.json({ message: "Experience added successfully!" });
    } catch (err) {
        console.error(err);
        res.status(500).send("Database Error");
    }
});

// Start server
app.listen(5000, () => {
    console.log("Backend server running on http://localhost:5000");
});