import { Link } from "react-router-dom";
import authRedirectToken from "../../validation/authRedirectToken";

function Verification() {
  authRedirectToken("/explorar");

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white">
      <section className="font-quicksand text-center z-10">
        <div className="px-4 py-8 sm:py-12 max-w-2xl mx-auto">
          <h1 className="mb-6 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-gray-800">
            Verificación
          </h1>
          <p className="mb-8 text-lg sm:text-xl text-gray-600">
            Revisa tu correo electrónico, te hemos enviado un enlace para
            completar el proceso.
          </p>
          <Link to="/login">
            <button className="px-6 py-3 rounded-lg bg-red-500 text-white text-lg font-semibold shadow-lg hover:opacity-90 hover:scale-105 transition-transform duration-300">
              Ir a sesión
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Verification;
