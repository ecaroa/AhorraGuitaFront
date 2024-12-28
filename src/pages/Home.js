// src/pages/Home.js

import React from 'react';

const Home = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
      <div className="text-center">
        <h1 className="display-4">Ahorra Guita</h1>
        <p className="lead">Encuentra el mejor precio para tu producto fácilmente</p>
        
        <div className="input-group mb-3" style={{ maxWidth: '600px' }}>
          <input
            type="text"
            className="form-control"
            placeholder="Buscar..."
            aria-label="Buscar"
            aria-describedby="button-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button" id="button-addon2">
              Buscar
            </button>
          </div>
        </div>
        
        <p className="mt-3">
          <a href="/login" className="text-muted">¿No tienes cuenta? Inicia sesión</a>
        </p>
      </div>
    </div>
  );
};

export default Home;
