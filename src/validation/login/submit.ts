import { FormEvent } from "react";
import axios from "axios";
import { mostrarMensaje } from "../../components/toast";
import { apiBackendLocal } from "../url";

export interface SesionData {
  idToken: string;
  accessToken: string;
  refreshToken: string;
}

export const Submit = async (
  event: FormEvent,
  email: string,
  password: string,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setPassword: React.Dispatch<React.SetStateAction<string>>
): Promise<SesionData | null> => {
  event.preventDefault();

  const MensajeErrUsuario = document.getElementById("err");
  const MensajeActUsuario = document.getElementById("success");

  // Validar entrada del usuario
  if (!email) {
    mostrarMensaje("Ingrese su correo", MensajeErrUsuario);
    return null;
  }

  if (!password) {
    mostrarMensaje("Ingrese su contraseña", MensajeErrUsuario);
    return null;
  }

  function resetForm() {
    setEmail("");
    setPassword("");
  }

  try {
    // Petición al backend
    const { data } = await axios.post(`${apiBackendLocal}/users/login`, {
      email,
      password,
    });

    // Extraer los tokens de la respuesta del backend
    const { idToken, accessToken, refreshToken } = data;

    resetForm();
    mostrarMensaje("Inicio de sesión exitoso", MensajeActUsuario);

    return { idToken, accessToken, refreshToken };
  } catch (error: any) {
    const message =
      error.response?.data.message || "Error en el inicio de sesión.";
    mostrarMensaje(message, MensajeErrUsuario);
    resetForm();
    return null;
  }
};
