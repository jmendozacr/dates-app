import React, { useState } from 'react';
import Form                from './components/Form';
import Appointment         from './components/Appointment';

function App() {
  const [medicalAppointments, setMedicalAppointments] = useState([]);

  const addMedicalAppointments = appointment => {
    const newAppointment = [...medicalAppointments, appointment];

    setMedicalAppointments(newAppointment);
  }

  const removeAppointment = (index) => {
    const newAppointment = [...medicalAppointments];

    newAppointment.splice(index, 1);
    setMedicalAppointments(newAppointment)
  }

  const title = medicalAppointments.length ? "Manage appointments" : "There are no appointments.";

  return (
    <>
      <h1>Appointment Manager App</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form addMedicalAppointments={addMedicalAppointments} />
          </div>
          <div className="one-half column">
            <h2>{ title }</h2>
            {
              medicalAppointments.map((appointment, index) => (
                <Appointment key={index} index={index} appointment={appointment} removeAppointment={removeAppointment} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
