import React, { useState } from 'react';
import { loginUser } from '../services/authService';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // Estado para el mensaje de éxito

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifica que ambos campos no estén vacíos antes de enviar
    if (!email || !password) {
      setErrorMessage('Por favor, ingrese ambos campos');
      setSuccessMessage(''); // Limpiar mensaje de éxito en caso de error
      return;
    }

    try {
      // Cambié el nombre de los campos a los esperados por el backend
      const credentials = {
        userEmail: email, // Enviar 'userEmail' en lugar de 'email'
        userPassword: password, // Enviar 'userPassword' en lugar de 'password'
      };
      const token = await loginUser(credentials); // Llama al servicio para login
      console.log('Login exitoso', token);

      // Mostrar mensaje de éxito
      setSuccessMessage('Inicio de sesión exitoso. Bienvenido!');
      setErrorMessage(''); // Limpiar mensaje de error en caso de éxito
      // Redirigir o realizar alguna acción después del login
    } catch (error) {
      setErrorMessage('Error al iniciar sesión');
      setSuccessMessage(''); // Limpiar mensaje de éxito en caso de error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Mostrar mensaje de éxito */}
      {successMessage && <p className="text-success">{successMessage}</p>}

      {/* Mostrar mensaje de error */}
      {errorMessage && <p className="text-danger">{errorMessage}</p>}

      <button type="submit" className="btn btn-primary">
        Iniciar sesión
      </button>
      <p className="mt-3">
        ¿No tienes cuenta?{' '}
        <a href="/register" className="text-muted">Regístrate aquí</a>
      </p>
    </form>
  );
};

export default LoginForm;
