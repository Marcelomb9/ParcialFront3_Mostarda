import React, { useState } from 'react';
import Card from './Card';
import './App.css';

    /*NO REALICE NINGUN ESTILO, UTILICE LOS QUE VIENEN POR DEFECTO EN VITE*/

function App() {
  const [estudiantes, setEstudiantes] = useState([]); 
  const [nombreEstudiante, setNombreEstudiante] = useState(""); 
  const [apellidoEstudiante, setApellidoEstudiante] = useState(""); 
  const [error, setError] = useState(""); 

  const addStudent = () => {
    if (
      nombreEstudiante.trim() !== "" &&
      apellidoEstudiante.trim() !== "" &&
      nombreEstudiante.trim().length >= 3 &&
      apellidoEstudiante.trim().length >= 6
    ) {
      setEstudiantes([...estudiantes, { nombreEstudiante, apellidoEstudiante }]);
      setNombreEstudiante("");
      setApellidoEstudiante("");
      setError(""); 
    } else {
      setError("Por favor chequea que la información sea correcta");
    }
  };

  return (
    <div className="App">
      <h1>Datos de Estudiantes</h1>
     
     
      <form>
        <div>
        
          <input
            type="text"
            id="nombre"
            placeholder="Nombre del estudiante"
            value={nombreEstudiante}
            onChange={(e) => setNombreEstudiante(e.target.value)}
          />
        </div>
        <div>
          
          <input
            type="text"
            id="apellido"
            placeholder="Apellido del estudiante"
            value={apellidoEstudiante}
            onChange={(e) => setApellidoEstudiante(e.target.value)}
          />
        </div>
        <button type="button" onClick={addStudent}>Agregar</button>
      </form>

    
      {error && <p className="error">{error}</p>}

    
      {!error && <Card estudiantes={estudiantes} />}
    </div>
  );
}

export default App;
