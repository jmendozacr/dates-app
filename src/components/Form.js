import React, { useState } from "react";

function Form({ addMedicalAppointments }) {
  const initialState = {
    pet: "",
    owner: "",
    date: "",
    time: "",
    description: "",
  }

  const [appointment, setAppointment] = useState(initialState);

  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    addMedicalAppointments(appointment);
    setAppointment(initialState);
  }

  return (
    <>
      <h2>create appointment</h2>

      <form onSubmit={handleSubmit}>
        <label>Pet Name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Pet Name"
          onChange={handleChange}
          value={appointment.pet}
        />

        <label>Owner Name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner Name"
          onChange={handleChange}
          value={appointment.owner}
        />

        <label>Date</label>
        <input type="date" className="u-full-width" name="date" onChange={handleChange} value={appointment.date} />

        <label>Time</label>
        <input type="time" className="u-full-width" name="time" onChange={handleChange} value={appointment.time} />

        <label>Symptom</label>
        <textarea className="u-full-width" name="description" onChange={handleChange} value={appointment.description}></textarea>

        <button type="submit" className="button-primary u-full-width">
          Agregar
        </button>
      </form>
    </>
  );
}

export default Form;
