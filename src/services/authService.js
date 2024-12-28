import axios from 'axios';

const API_URL = 'http://localhost:8080/auth';

export const registerUser = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/nuevoUsuario`, formData);
    return response.data; // Devolver el usuario registrado
  } catch (error) {
    console.error('Error al registrar el usuario', error); // Mostrar error en consola
    throw new Error('Error al registrar el usuario');
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data; // Devuelve el token
  } catch (error) {
    throw new Error('Error al iniciar sesión');
  }
}; 

/* import axios from 'axios';

const API_URL = 'http://localhost:8080/auth';  // URL de tu servidor backend

// Función para registrar un nuevo usuario
export const registerUser = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/nuevoUsuario`, formData);
    return response.data; // Devuelve el usuario registrado
  } catch (error) {
    console.error(error);  // Añadido para depuración
    throw new Error('Error al registrar el usuario');
  }
};

// Función para iniciar sesión
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data; // Devuelve el token de autenticación
  } catch (error) {
    console.error(error);  // Añadido para depuración
    throw new Error('Error al iniciar sesión');
  }
}; */

