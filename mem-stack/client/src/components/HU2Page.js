import React from 'react';
import { Link } from 'react-router-dom';
import './HU2Page.css';
import Header from './components/Header';
const HU2Page = () => {
  const generateReport = (event) => {
    event.preventDefault();
    // Lógica para generar el informe
    console.log('Informe generado');

    // Redirigir a la página de informe generado (puedes ajustar la ruta según tu estructura)
    // Por ejemplo, si tienes una ruta '/report', deberías cambiar '/report' en el 'to' prop.
    window.location.href = '/report';
  };

  return (
    <div>
      <Header/>
      <div className="container">
        <h2>Generar Informe de Trabajo</h2>
        <form id="reportForm" onSubmit={generateReport}>
          <div className="form-group">
            <label htmlFor="startDate">Fecha de Inicio:</label>
            <input type="date" id="startDate" name="startDate" required />
          </div>

          <div className="form-group">
            <label htmlFor="endDate">Fecha de Fin:</label>
            <input type="date" id="endDate" name="endDate" required />
          </div>

          <div className="form-group">
            <label htmlFor="personnel">Personal:</label>
            <input
              type="text"
              id="personnel"
              name="personnel"
              placeholder="Nombre del personal"
              required
            />
          </div>

          <button type="submit">Generar Informe</button>
        </form>
      </div>
    </div>
  );
};

export default HU2Page;
