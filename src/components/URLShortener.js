// src/components/URLShortener.js
import React, { useState } from 'react';
import axios from 'axios';

const URLShortener = () => {
    const [longUrl, setLongUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');

    const handleShorten = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/urls', { longUrl }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setShortUrl(response.data.shortUrl);
        } catch (error) {
            alert("Failed to shorten URL");
        }
    };

    return (
        <form onSubmit={handleShorten}>
            <h2>URL Shortener</h2>
            <input type="url" placeholder="Enter URL" value={longUrl} onChange={(e) => setLongUrl(e.target.value)} required />
            <button type="submit">Shorten URL</button>
            {shortUrl && (
                <div>
                    <p>Shortened URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a></p>
                </div>
            )}
        </form>
    );
};

export default URLShortener;
