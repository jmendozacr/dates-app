import React, { useState, useEffect } from 'react';
import Form                           from './components/Form';
import Appointment                    from './components/Appointment';

function App() {
  let initialMedicalAppointments = JSON.parse(localStorage.getItem("medicalAppointments"));

  if(!initialMedicalAppointments) {
    initialMedicalAppointments = [];
  }

  const [medicalAppointments, setMedicalAppointments] = useState(initialMedicalAppointments);

  const addMedicalAppointments = appointment => {
    const newAppointment = [...medicalAppointments, appointment];

    setMedicalAppointments(newAppointment);
  }

  const removeAppointment = (index) => {
    const newAppointment = [...medicalAppointments];

    newAppointment.splice(index, 1);
    setMedicalAppointments(newAppointment)
  }

  useEffect(
    () => {
      let initialMedicalAppointments = JSON.parse(localStorage.getItem("medicalAppointments"));

      if(initialMedicalAppointments) {
        localStorage.setItem("medicalAppointments", JSON.stringify(medicalAppointments));
      } else {
        localStorage.setItem("medicalAppointments", JSON.stringify([]));
      }
    }, [medicalAppointments]);

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
