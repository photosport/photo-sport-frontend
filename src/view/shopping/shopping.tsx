import Footer from "../../components/home/footer";
import HeaderSesion from "../../components/home/headerSesion";

function Shopping() {
  return (
    <div>
      <HeaderSesion />
      <div className="min-h-screen bg-gray-100 py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Mis Compras <span className="text-gray-500">(0)</span>
          </h1>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-gray-700 mb-4">
              Historial de compras
            </h2>
            <div className="py-4 text-center text-gray-600">
              <p className="text-sm font-medium">
                <span className="text-gray-500">Aún no hay compras</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shopping;
