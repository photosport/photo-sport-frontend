import Header from "../../components/home/header";
import google from "../../assets/img/google.png";
import fotoregister from "../../assets/img/foto-register.jpg";
import { useState } from "react";
import Footer from "../../components/home/footer";
import Chat from "../../components/chat/chat";
import authRedirectToken from "../../validation/authRedirectToken";
import Handle from "../../validation/register/handle";
import Message from "../../components/message";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVerified, setisVerified] = useState(false);

  authRedirectToken("/");

  const { handleSubmit, isLoading } = Handle(
    name,
    lastName,
    email,
    password,
    isVerified,
    setName,
    setLastName,
    setEmail,
    setPassword,
    setisVerified
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <div className="flex flex-grow flex-wrap">
        <div className="w-full md:w-1/2 bg-red-200 flex items-center justify-center p-6">
          <div className="relative w-full h-full">
            <img
              src={fotoregister}
              alt="Illustration"
              className="w-full h-full object-cover rounded-lg"
            />
            <p className="absolute bottom-4 left-4 text-lg font-bold text-white">
              ¡Hola! Bienvenido nuevamente.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-white flex items-center justify-center px-6 py-10">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800">Registrarse</h2>
            <p className="text-sm text-gray-600 mt-2">
              Completa los campos para crear una cuenta.
            </p>
            <Message />
            <form onSubmit={handleSubmit} className="mt-6">
              <div className="mb-4">
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  placeholder="Nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="apellido"
                  className="block text-sm font-medium text-gray-700"
                >
                  Apellido
                </label>
                <input
                  type="text"
                  id="apellido"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  placeholder="Apellido"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  placeholder="Correo Electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-2 text-sm text-gray-500 hover:text-red-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Ocultar" : "Mostrar"}
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <label className="flex items-center text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="mr-2 h-4 w-4 border-gray-300 rounded focus:ring-red-500"
                    checked={isTermsAccepted}
                    onChange={(e) => setIsTermsAccepted(e.target.checked)}
                  />
                  Acepto los{" "}
                  <a
                    href="/terms"
                    className="text-red-500 hover:text-red-600 ml-1"
                  >
                    términos y condiciones
                  </a>
                </label>
              </div>

              <button
                type="submit"
                disabled={!isTermsAccepted || isLoading} 
                className={`w-full py-2 px-4 text-white font-medium rounded-md focus:outline-none focus:ring-2 ${
                  isTermsAccepted && !isLoading
                    ? "bg-red-500 hover:bg-red-600 focus:ring-red-500"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {isLoading ? "Registrando..." : "Regístrate"}
              </button>
            </form>

            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-3 text-sm text-gray-500">o</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <button className="mt-4 w-full py-2 px-4 flex items-center justify-center bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500">
              <img src={google} alt="Google" className="h-5 w-5 mr-2" />
              <span>Registrarse con Google</span>
            </button>

            <p className="mt-6 text-sm text-center text-gray-600">
              ¿Ya tienes una cuenta?{" "}
              <a
                href="/login"
                className="font-medium text-red-500 hover:text-red-600"
              >
                Inicia sesión aquí
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <Chat />
    </div>
  );
}

export default Register;
