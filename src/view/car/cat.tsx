import Footer from "../../components/home/footer";
import Header from "../../components/home/header";
import google from "../../assets/img/google.png";

function Car() {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Carrito</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex flex-col items-center justify-center h-48 border border-dashed border-gray-300 rounded-lg">
                <div className="text-gray-500">
                  🛍️
                  <p className="text-center">No hay items en el carrito</p>
                </div>
                <a
                  href="/albums"
                  className="text-yellow-600 hover:text-yellow-500 font-medium mt-2"
                >
                  Ir a <span className="underline">álbumes</span>
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Resumen</h2>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600 font-medium">Total</span>
                <span className="text-gray-800 font-bold">UYU 0.00</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Debe iniciar sesión para continuar con la compra
              </p>
              <div className="flex flex-col space-y-2">
                <a href="/login">
                  <button className="w-full py-2 px-4 text-center text-black border border-gray-300 rounded-md hover:bg-gray-100">
                    Ingresar | Registrarse
                  </button>
                </a>
                <button className="w-full py-2 px-4 flex items-center justify-center bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
                  <img src={google} alt="Google" className="h-5 w-5 mr-2" />
                  <span>Iniciar sesión con Google</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Car;
