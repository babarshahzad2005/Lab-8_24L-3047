import React from 'react';

function ExperienceTable({ data }) {
    return (
        <div style={{ margin: '30px auto', maxWidth: '800px' }}>
            <h2 style={{ textAlign: 'center' }}>Work Experience</h2>
            <table
                border="1"
                cellPadding="10"
                cellSpacing="0"
                style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    textAlign: 'center'
                }}
            >
                <thead style={{ backgroundColor: '#007bff', color: 'white' }}>
                    <tr>
                        <th>Exp ID</th>
                        <th>Job Title</th>
                        <th>Company</th>
                        <th>Years Worked</th>
                        <th>Current Job?</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((job) => (
                        <tr key={job.ExpID}>
                            <td>{job.ExpID}</td>
                            <td>{job.JobTitle}</td>
                            <td>{job.CompanyName}</td>
                            <td>{job.YearsWorked}</td>
                            <td>{job.IsCurrentJob ? "Yes" : "No"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ExperienceTable;
