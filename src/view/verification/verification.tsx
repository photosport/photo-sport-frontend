import { useState } from "react";
import axios from "axios";
import { apiBackendLocal } from "../../validation/url";
import { useNavigate } from "react-router-dom";

function Verification() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const response = await axios.post(`${apiBackendLocal}/users/verification`, {
        email,
        code,
      });

      setMessage(response.data.message || "Usuario verificado exitosamente.");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error: any) {
      setMessage(
        error.response?.data.message || "Error al verificar el usuario."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white">
      <section className="font-quicksand text-center z-10">
        <div className="px-4 py-8 sm:py-12 max-w-2xl mx-auto">
          <h1 className="mb-6 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-gray-800">
            Verificación
          </h1>
          <p className="mb-8 text-lg sm:text-xl text-gray-600">
            Revisa tu correo electrónico, te hemos enviado un código para
            completar el proceso.
          </p>

          <form onSubmit={handleVerification} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                placeholder="Ingresa tu correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="code"
                className="block text-sm font-medium text-gray-700"
              >
                Código de Verificación
              </label>
              <input
                type="text"
                id="code"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                placeholder="Ingresa el código"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 px-4 text-white font-medium rounded-md focus:outline-none focus:ring-2 ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600 focus:ring-red-500"
              }`}
            >
              {isLoading ? "Verificando..." : "Verificar"}
            </button>
          </form>

          {message && (
            <p
              className={`mt-4 text-sm font-medium ${
                message.includes("exitosamente")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Verification;
