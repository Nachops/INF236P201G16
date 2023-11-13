import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HU1Page.css';
import Header from './components/Header';

const HU1Page = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [doctorsAvailability, setDoctorsAvailability] = useState([]);

  const generateRandomAvailability = () => {
    const availableDoctors = [
      { name: 'Dr. Smith', time: '10:00 AM - 12:00 PM' },
      { name: 'Dr. Johnson', time: '02:00 PM - 04:00 PM' },
      { name: 'Dr. Williams', time: '04:30 PM - 06:30 PM' },
    ];

    const randomIndex = Math.floor(Math.random() * availableDoctors.length);
    return availableDoctors[randomIndex];
  };

  const generateReport = (event) => {
    event.preventDefault();

    // Simular la obtención de horarios disponibles para la fecha seleccionada
    const availability = generateRandomAvailability();
    setDoctorsAvailability([availability]);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h2>Agendar Hora</h2>
        <form id="reportForm" onSubmit={generateReport}>
          <div className="form-group">
            <label htmlFor="startDate">Fecha:</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
            />
          </div>

          <button type="submit">Horario disponibles</button>
        </form>

        <div className="results">
          <h3>Resultados:</h3>
          {doctorsAvailability.length > 0 ? (
            doctorsAvailability.map((doctor, index) => (
              <div key={index}>
                <p>{doctor.name}</p>
                <p>{doctor.time}</p>
              </div>
            ))
          ) : (
            <p>No hay resultados disponibles para la fecha seleccionada.</p>
          )}
        </div>

        {/* Agregar enlace para regresar al menú principal */}
        <div className="return-link">
          <Link to="/">Regresar a Menú</Link>
        </div>
      </div>
    </div>
  );
}

export default HU1Page;
