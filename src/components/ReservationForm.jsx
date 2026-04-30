import { useState } from "react";

const ReservationForm = ({ compact = false }) => {
  const [reservation, setReservation] = useState({
    date: "",
    time: "",
    guests: "2",
    name: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setReservation((current) => ({ ...current, [name]: value }));
  };

  const submitReservation = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form className={`reservation-form ${compact ? "is-compact" : ""}`} onSubmit={submitReservation}>
      <div className="form-row">
        <label>
          <span>Date</span>
          <input
            type="date"
            name="date"
            value={reservation.date}
            onChange={updateField}
            required
          />
        </label>
        <label>
          <span>Time</span>
          <select name="time" value={reservation.time} onChange={updateField} required>
            <option value="">Select time</option>
            <option>12:00 PM</option>
            <option>2:30 PM</option>
            <option>5:00 PM</option>
            <option>7:30 PM</option>
            <option>9:00 PM</option>
          </select>
        </label>
      </div>

      <div className="form-row">
        <label>
          <span>Guests</span>
          <input
            type="number"
            name="guests"
            min="1"
            max="12"
            value={reservation.guests}
            onChange={updateField}
            required
          />
        </label>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={reservation.name}
            onChange={updateField}
            required
          />
        </label>
      </div>

      <button className="btn btn-primary" type="submit">
        Reserve Table
      </button>

      {submitted && (
        <p className="form-success" role="status">
          Table request received. We will confirm by phone shortly.
        </p>
      )}
    </form>
  );
};

export default ReservationForm;
