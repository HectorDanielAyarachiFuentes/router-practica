import React, { useState } from 'react';
import './App.css'; // Importa el archivo CSS aquí

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="app-container">
      <h1 className="heading">Welcome to My Retro React App</h1>
      <div className="card retro-card">
        <p className="retro-text">This is a simple React application with a retro web style.</p>
        <p className="retro-text">Current count: {count}</p>
        <button onClick={incrementCount} className="retro-button">Increment Count</button>
        <a href="/another-page" className="retro-link">Go to Another Page</a>
      </div>
    </div>
  );
}

export default App;

