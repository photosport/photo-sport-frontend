import Footer from "../../components/home/footer";
import Header from "../../components/home/header";

function Count() {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 py-10 px-6">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-2xl font-bold text-gray-800 mb-6">Perfil</h1>

          <div className="bg-white p-6 rounded-lg shadow-md">

            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <h2 className="text-xl font-bold text-gray-800">Woody Jacques</h2>
              <p className="text-sm text-gray-500">Miembro desde: 24/01/2025</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <h3 className="text-lg font-bold text-gray-700 mb-2">
                  Acerca de
                </h3>
                <p className="text-gray-600">
                  Soy{" "}
                  <span className="font-semibold text-red-600">Fotógrafo</span>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-700 mb-2">
                  Detalles Personales
                </h3>
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">Nombre:</span>
                    <span className="text-gray-600">Woody</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">Apellido:</span>
                    <span className="text-gray-600">Jacques</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">
                      Correo Electrónico:
                    </span>
                    <a
                      href="mailto:woodyjacques1@gmail.com"
                      className="text-blue-500 hover:underline"
                    >
                      woodyjacques1@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="country"
                  className="block text-gray-700 font-medium mb-2"
                >
                  País*
                </label>
                <select
                  id="country"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                >
                  <option value="dominican_republic">
                    🇩🇴 República Dominicana
                  </option>
                  <option value="haiti">🇭🇹 Haití</option>
                  <option value="usa">🇺🇸 Estados Unidos</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Count;
