import { FormEvent } from "react";
import axios from "axios";
import { mostrarMensaje } from "../../components/toast";
import { apiBackendLocal } from "../url";

export const Submit = async (
  event: FormEvent,
  name: string,
  lastName: string,
  email: string,
  password: string,
  isVerified: boolean,
  setName: React.Dispatch<React.SetStateAction<string>>,
  setLastName: React.Dispatch<React.SetStateAction<string>>,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  setisVerified: React.Dispatch<React.SetStateAction<boolean>>
) => {
  event.preventDefault();

  const MensajeErrUsuario = document.getElementById("err");
  const MensajeActUsuario = document.getElementById("success");

  if (!name || !lastName || !email || !password) {
    mostrarMensaje("Todos los campos son obligatorios", MensajeErrUsuario);
    return false;
  }

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passwordRegex.test(password)) {
    mostrarMensaje(
      "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.",
      MensajeErrUsuario
    );
    return false;
  }

  try {
    const response = await axios.post(`${apiBackendLocal}/users/register`, {
      name,
      lastName,
      email,
      password,
      isVerified,
    });

    mostrarMensaje(response.data.message, MensajeActUsuario);

    setName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setisVerified(false);

    return true;
  } catch (error: any) {
    mostrarMensaje(error.response?.data.message, MensajeErrUsuario);
    return false;
  }
};
