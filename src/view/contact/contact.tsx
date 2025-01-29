import Footer from "../../components/home/footer";
import Header from "../../components/home/header";

function Contact() {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
        <div className="max-w-4xl w-full bg-gray-900 text-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6">Contáctenos</h1>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium">
                  Nombre*
                </label>
                <input
                  type="text"
                  id="nombre"
                  placeholder="Nombre"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              <div>
                <label htmlFor="apellido" className="block text-sm font-medium">
                  Apellido*
                </label>
                <input
                  type="text"
                  id="apellido"
                  placeholder="Apellido"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Correo Electrónico*
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Correo Electrónico"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  placeholder="Teléfono"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium">
                Mensaje*
              </label>
              <textarea
                id="mensaje"
                rows={4}
                placeholder="Escriba su mensaje aquí..."
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              ></textarea>
            </div>

            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
                />
                <span className="ml-2 text-sm">Soy Fotógrafo</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
                />
                <span className="ml-2 text-sm">Soy Deportista</span>
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-red-500 text-black font-medium rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
