import React from 'react';
import './App.css';
import FormularioLogin from './components/FormularioLogin';


function App() {
  return (
    <div className="App">
      <title>Login</title>
      <header className="App-header">
        <img
          src="/LogoUrl4.png"
          alt="Logo"
          style={{ width: '300px', marginBottom: '0px' }}
        />
        <h1 style={{ color: '#b99a3dff', fontSize: '2.5rem', fontWeight: 'bold', letterSpacing: '2px'}}>
          Bienvenido
        </h1>
        <p style={{ color: '#b99a3dff', fontSize: '1.2rem', fontWeight: 'bold', margin: '1px 0' }}>
          Por favor, ingresa tus credenciales para acceder.
        </p>
        <FormularioLogin />
      </header>
    </div>
  );
}

export default App;
