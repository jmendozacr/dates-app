import React, { useState, useEffect } from 'react';
import Form                           from './components/Form';

function App() {
  const [medicalAppointments, setMedicalAppointments] = useState([]);

  const addMedicalAppointments = appointment => {
    const newAppointment = [...medicalAppointments, appointment];

    setMedicalAppointments(newAppointment);
  }
  
  console.log(medicalAppointments);
  return (
    <>
      <h1>Appointment Manager App</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form addMedicalAppointments={addMedicalAppointments} />
          </div>
          <div className="one-half column">

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
