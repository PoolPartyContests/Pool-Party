// React component in App.js
import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/v1/testapi`)
        .then(response => response.json())
        .then(data => {
          setMessage(data.message);
        })
        .catch(error => {
          console.log('Fetch error: ', error);
        });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {message}
      </header>
    </div>
  );
}

export default App;