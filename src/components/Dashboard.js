// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [urls, setUrls] = useState([]);

    useEffect(() => {
        const fetchUrls = async () => {
            try {
                const response = await axios.get('/api/urls', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setUrls(response.data.urls);
            } catch (error) {
                alert("Failed to fetch URLs");
            }
        };
        fetchUrls();
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            <ul>
                {urls.map(url => (
                    <li key={url._id}>
                        <a href={url.shortUrl} target="_blank" rel="noopener noreferrer">{url.shortUrl}</a>
                        <p>Original URL: {url.longUrl}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
