import { useState } from "react";
import countries from "world-countries";

function ModalIdioma({ toggleModal }: any, isOpen: any) {
  const [selectedCountry, setSelectedCountry] = useState("Cuba");

  const handleClose = () => {
    toggleModal();
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  const countryOptions = countries.map((country) => ({
    code: country.cca2.toLowerCase(),
    name: country.name.common,
  }));

  return (
    <div
      id="country-modal"
      className="bg-gray-100 bg-opacity-50 fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center"
      aria-hidden={!isOpen ? "true" : undefined}
    >
      <div
        className="relative w-full max-w-md max-h-full bg-white rounded-lg shadow-lg"
        aria-hidden={isOpen ? "false" : "true"}
      >
        <button
          type="button"
          className="absolute top-3 right-2.5 text-gray-500 bg-transparent hover:bg-gray-200 hover:text-black rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
          onClick={handleClose}
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Cerrar modal</span>
        </button>

        <div className="px-6 py-6 lg:px-8">
          <h2 className="text-lg font-medium text-gray-800 mb-4 text-center">
            Seleccione un país
          </h2>

          <div className="relative">
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              onChange={handleCountryChange}
              value={selectedCountry}
            >
              <option value="">Seleccione un país</option>
              {countryOptions.map((country, index) => (
                <option key={index} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          {selectedCountry && (
            <p className="text-sm text-gray-600 mt-4 text-center">
              País seleccionado:{" "}
              <span className="font-medium text-gray-800">
                {selectedCountry}
              </span>
            </p>
          )}

          <div className="mt-6 flex justify-end space-x-3">
            <button
              onClick={toggleModal}
              className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100"
            >
              Cancelar
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600">
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalIdioma;
