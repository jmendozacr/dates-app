import React from "react";

function Appointment({appointment, index, removeAppointment}) {

    return(
        <div className="date">
            <p>Pet: <span>{appointment.pet}</span></p>
            <p>Owner: <span>{appointment.owner}</span></p>
            <p>Date: <span>{appointment.date}</span></p>
            <p>Time: <span>{appointment.time}</span></p>
            <p>Description: <span>{appointment.description}</span></p>
            <button
                onClick={() => removeAppointment(index)}
                type="button"
                className="button delete u-full-width">
                    Delete X
                </button>
        </div>
    );
}

export default Appointment;