import Header from "../../components/home/header";
import google from "../../assets/img/google.png";
import fotologin from "../../assets/img/foto-login.jpeg";
import Footer from "../../components/home/footer";
import Chat from "../../components/chat/chat";
import authRedirectToken from "../../validation/authRedirectToken";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import VerificationUrls from "../../validation/login/verificationUrls";
import Handle from "../../validation/login/handle";
import Message from "../../components/message";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  authRedirectToken("/");

  const navigate = useNavigate();
  const tokens = new URLSearchParams(window.location.search).get("token");

  useEffect(() => {
    const verify = async () => {
      await VerificationUrls(tokens, navigate);
    };
    verify();
  }, [tokens, navigate]);

  const { handleSubmit, isLoading } = Handle(
    email,
    password,
    setEmail,
    setPassword
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <div className="flex flex-grow flex-wrap">
        <div className="w-full md:w-1/2 bg-red-200 flex items-center justify-center p-6">
          <div className="relative w-full h-full">
            <img
              src={fotologin}
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
            <h2 className="text-2xl font-bold text-gray-800">Ingresar</h2>
            <p className="text-sm text-gray-600 mt-2">
              Selecciona un método para acceder.
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
                <div className="mt-1">
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                    placeholder="Correo Electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contraseña
                </label>
                <div className="mt-1 relative">
                  <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <a
                    href="/email"
                    className="absolute right-2 top-2 text-sm text-gray-500 hover:text-red-500"
                  >
                    Olvidé mi contraseña
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                disabled={isLoading}
              >
                {isLoading ? "Ingresando..." : "Ingresar"}
              </button>
            </form>

            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-3 text-sm text-gray-500">o</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <a href="/register">
              <button className="w-full py-2 px-4 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500">
                Registrarse
              </button>
            </a>

            <button className="mt-4 w-full py-2 px-4 flex items-center justify-center bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500">
              <img src={google} alt="Google" className="h-5 w-5 mr-2" />
              <span>Iniciar sesión con Google</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <Chat />
    </div>
  );
}

export default Login;
