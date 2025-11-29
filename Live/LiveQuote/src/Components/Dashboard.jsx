import React, { use } from 'react'
import { useState, useEffect } from 'react';

const Dashboard = () => {

    const [time, setTime] = useState(new Date());
    const [quote, setQuote] = useState({quote: 'Loading...', author: ''});

    useEffect(() => {
        const timerID = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timerID);
        }, []);

    const fetchNewQuote = async () => {
        try {
            const response = await fetch('https://dummyjson.com/quotes/random');
            const data = await response.json();
            setQuote({text: data.content, author: data.author});
        } catch (error) {
            setQuote({text: 'Failed to fetch quote', author: 'System'});
        }};

        useEffect(() => {
            fetchNewQuote();
        }, []);
  return (
    <div>
        <h2>Dashboard</h2>
        <div>
            <p>Current time</p>
            <h1>{time.toLocaleTimeString()}</h1>

        </div>

        <div>
            <p>{quote.quote} </p>
            <p>-{quote.author}</p>
        </div>
        <button onClick={fetchNewQuote}>Get new quote</button>
    </div>
  )
}

export default Dashboard