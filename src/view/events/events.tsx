import Footer from "../../components/home/footer";
import Header from "../../components/home/header";
import { useState } from "react";
import search from "../../assets/img/busqueda.png";

function Events() {
  const [activeTab, setActiveTab] = useState("past");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Eventos</h1>

          <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-wrap gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Evento
              </label>
              <select className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500">
                <option value="">Evento</option>
                <option value="event1">Evento 1</option>
                <option value="event2">Evento 2</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Ubicación
              </label>
              <select className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500">
                <option value="">Ubicación</option>
                <option value="location1">Ubicación 1</option>
                <option value="location2">Ubicación 2</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Actividad
              </label>
              <select className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500">
                <option value="">Actividad</option>
                <option value="activity1">Actividad 1</option>
                <option value="activity2">Actividad 2</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Rango de fechas
              </label>
              <input
                type="date"
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              />
            </div>
          </div>

          <div className="flex justify-center items-center mb-6">
            <button
              className={`px-4 py-2 rounded-l-full border ${
                activeTab === "past"
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => handleTabChange("past")}
            >
              Eventos Pasados
            </button>
            <button
              className={`px-4 py-2 rounded-r-full border ${
                activeTab === "upcoming"
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => handleTabChange("upcoming")}
            >
              Próximos Eventos
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex flex-col items-center">
              <img src={search} alt=""  className="w-12 h-12"/>
              <p className="mt-4 text-gray-600">
                No se encontraron resultados que coincidan con tu búsqueda.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Events;
