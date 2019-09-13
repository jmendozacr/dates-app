import React, { useState, useEffect } from 'react';
import Form                           from './components/Form';

function App() {
  const [dates, setDates] = useState([]);

  return (
    <>
      <h1>Appointment Manager App</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form />
          </div>
          <div className="one-half column">

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
