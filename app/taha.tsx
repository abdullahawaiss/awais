'use client'; // Yeh line zaroori hai interactive buttons ke liye

import { useState } from 'react';

export default function CounterHome() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Interactive Main Page</h1>
      <div style={{ border: '1px solid #ddd', padding: '30px', borderRadius: '8px', display: 'inline-block' }}>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Clicks: {count}</p>
        <button 
          onClick={() => setCount(count + 1)}
          style={{ backgroundColor: '#0070f3', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginTop: '10px', fontSize: '1rem' }}
        >
          Click Me!
        </button>
      </div>
    </div>
  );
}
