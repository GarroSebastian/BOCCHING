// pages/ResetPassword.js
import { useState } from 'react';
import validator from 'validator'; // Importar el módulo validator

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const resetPassword = async () => {
    if (isValidEmail) {
      // Validar si el correo está registrado (deberías implementar esta lógica en el servidor)
      const isEmailRegistered = await checkIfEmailIsRegistered(email);

      if (isEmailRegistered) {
        // Enviar el correo electrónico para restablecer la contraseña (implementar en el servidor)
        await sendPasswordResetEmail(email);
        alert('Se ha enviado un enlace para restablecer la contraseña al correo electrónico proporcionado.');
      } else {
        alert('El correo electrónico no está registrado. Por favor, verifica tu dirección de correo.');
      }
    } else {
      alert('Ingresa una dirección de correo electrónico válida.');
    }
  };

  const checkIfEmailIsRegistered = async (email) => {
    // Simular la verificación en el servidor (deberías implementar esto en el backend)
    // Aquí se asume que la dirección de correo está registrada si tiene un formato válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendPasswordResetEmail = async (email) => {
    // Simular el envío del correo electrónico para restablecer la contraseña (deberías implementar esto en el backend)
    console.log(`Enviando enlace de restablecimiento de contraseña a: ${email}`);
    // Aquí deberías hacer una solicitud al servidor para enviar el enlace
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    setIsValidEmail(validator.isEmail(value)); // Validar el formato del correo electrónico
  };

  return (
    <div>
      <h1>Restablecer Contraseña</h1>
      <label htmlFor="email">Correo Electrónico:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => handleEmailChange(e.target.value)}
        required
      />
      {!isValidEmail && <p style={{ color: 'red' }}>Ingresa un correo electrónico válido.</p>}
      <button type="button" onClick={resetPassword}>
        Restablecer Contraseña
      </button>
    </div>
  );
}
