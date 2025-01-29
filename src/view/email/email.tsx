import Header from "../../components/home/header";
import fotoemail from "../../assets/img/foto.email.jpg"
import Footer from "../../components/home/footer";
import Chat from "../../components/chat/chat";
import { useState } from "react";
import authRedirectToken from "../../validation/authRedirectToken";
import Handle from "../../validation/email/handle";
import Message from "../../components/message";

function Email() {
  const [email, setEmail] = useState("");

  authRedirectToken("/explorar");

  const { handleSubmit, isLoading } = Handle(email, setEmail);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <div className="flex flex-grow flex-wrap">
        <div className="w-full md:w-1/2 bg-red-200 flex items-center justify-center p-6">
          <div className="relative w-full h-full">
            <img
              src={fotoemail}
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
              Ingresa tu correo electrónico para restablecer tu contraseña.
            </p>
            <Message />
            <form onSubmit={handleSubmit} className="mt-6">
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

              <button
                type="submit"
                className="w-full py-2 px-4 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                disabled={isLoading}
              >
                {isLoading ? "Ingresando..." : "Ingresar"}
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

export default Email;
