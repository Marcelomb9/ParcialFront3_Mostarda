import React from "react";

const Card = ({ estudiantes }) => {
  return (
    <div>
      <h2>Estudiantes</h2>
      {estudiantes.map((estudiante, index) => (
        <div key={index} className="card">
          <h3>{estudiante.nombreEstudiante} {estudiante.apellidoEstudiante}</h3>
        </div>
      ))}
    </div>
  );
};

export default Card;
