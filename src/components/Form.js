import React, { useState } from "react";

function Form({ addMedicalAppointments }) {
  const [appointment, setAppointment] = useState({
    pet: "",
    owner: "",
    date: "",
    time: "",
    description: "",
  });

  const handleChange = (e) => {
    // console.log(e.target);
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    addMedicalAppointments(appointment);
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
        />

        <label>Owner Name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner Name"
          onChange={handleChange}
        />

        <label>Date</label>
        <input type="date" className="u-full-width" name="date" onChange={handleChange} />

        <label>Time</label>
        <input type="time" className="u-full-width" name="time" onChange={handleChange} />

        <label>Symptom</label>
        <textarea className="u-full-width" name="description" onChange={handleChange}></textarea>

        <button type="submit" className="button-primary u-full-width">
          Agregar
        </button>
      </form>
    </>
  );
}

export default Form;
