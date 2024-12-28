import React, { useState } from 'react';
import { registerUser } from '../services/authService';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    userFirstname: '',
    userLastname: '',
    userEmail: '',
    userPassword: '',
    rolId: 2, // Fijado como "Usuario"
  });

  const [message, setMessage] = useState(''); // Estado para el mensaje de éxito o error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await registerUser(formData);
      console.log('Registro exitoso', user);
      // Mensaje de éxito
      setMessage('¡Registro exitoso! El usuario ha sido creado.');
    } catch (error) {
      console.error('Error de registro', error);
      // Mensaje de error
      setMessage('Error al registrar el usuario. Intenta nuevamente.');
    }
  };

  return (
    <div>
      {/* Mostrar mensaje si está presente */}
      {message && (
        <div className={`alert ${message.includes('Error') ? 'alert-danger' : 'alert-success'}`}>
          {message}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userFirstname">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="userFirstname"
            name="userFirstname"
            value={formData.userFirstname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userLastname">Apellido</label>
          <input
            type="text"
            className="form-control"
            id="userLastname"
            name="userLastname"
            value={formData.userLastname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userEmail">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            id="userEmail"
            name="userEmail"
            value={formData.userEmail}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userPassword">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="userPassword"
            name="userPassword"
            value={formData.userPassword}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
