import HeaderSesion from "../../components/home/headerSesion";
import fotopassword from "../../assets/img/foto-password.jpg";
import { useState } from "react";
import Message from "../../components/message";
import VerificationUrls from "../../validation/password/verificationUrls";
import Handle from "../../validation/password/handle";
import Footer from "../../components/home/footer";
import Chat from "../../components/chat/chat";

function Password() {
  const [password, setPassword] = useState("");
  const [verPassword, setVerPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  VerificationUrls();

  const { handleSubmit, isLoading } = Handle(
    password,
    verPassword,
    setPassword,
    setVerPassword
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <HeaderSesion />

      <div className="flex flex-grow flex-wrap">
        <div className="w-full md:w-1/2 bg-red-200 flex items-center justify-center p-6">
          <div className="relative w-full h-full">
            <img
              src={fotopassword}
              alt="Illustration"
              className="w-full h-full object-cover rounded-lg"
            />
            <p className="absolute bottom-4 left-4 text-lg font-bold text-white">
              Recupera tu cuenta
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-white flex items-center justify-center px-6 py-10">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800">
              Recuperar Contraseña
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Ingresa tu nueva contraseña para restablecer tu cuenta.
            </p>
            <Message />
            <form onSubmit={handleSubmit} className="mt-6">
              <div className="mb-4 relative">
                <label className="block text-sm font-medium text-gray-700">
                  Nueva Contraseña
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  placeholder="Nueva Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-9 right-3 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>

              <div className="mb-4 relative">
                <label className="block text-sm font-medium text-gray-700">
                  Confirmar Contraseña
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  placeholder="Confirmar Contraseña"
                  value={verPassword}
                  onChange={(e) => setVerPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute top-9 right-3 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                disabled={isLoading}
              >
                {isLoading ? "Procesando..." : "Restablecer Contraseña"}
              </button>
            </form>

            <p className="mt-6 text-sm text-center text-gray-600">
              ¿Recordaste tu contraseña?{" "}
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

export default Password;
