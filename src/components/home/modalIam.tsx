function ModalIam({ toggleModalIam }: any, isOpenIam: any) {
  const handleClose = () => {
    toggleModalIam();
  };

  return (
    <div
      id="country-modal"
      className="bg-gray-100 bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center p-4 overflow-auto"
      aria-hidden={!isOpenIam ? "true" : undefined}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-2xl overflow-y-auto max-h-[90vh]"
        aria-hidden={isOpenIam ? "false" : "true"}
      >
        <button
          type="button"
          className="absolute top-3 right-2.5 text-gray-500 bg-transparent hover:bg-gray-200 hover:text-black rounded-lg text-sm w-8 h-8 flex justify-center items-center"
          onClick={handleClose}
        >
          <svg
            className="w-3 h-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Cerrar modal</span>
        </button>

        <div className="p-6 sm:p-8">

          <div className="bg-red-500 rounded-t-lg px-4 py-2 sm:px-6 sm:py-4">
            <h2 className="text-lg font-bold text-black">¿Eres fotógrafo?</h2>
            <p className="text-sm text-gray-800">
              ¡Rellená los siguientes campos y empezá a vender con Photo Sport!
            </p>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">

            <div className="flex flex-col items-center justify-center border-dashed border-2 border-gray-300 rounded-lg p-4 sm:p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5V21h4.5M16.5 3H21v4.5M16.5 21H21v-4.5M3 3h4.5v4.5M16.5 7.5L21 3M3 16.5l4.5 4.5M16.5 3L21 7.5M3 3l4.5 4.5"
                />
              </svg>
              <p className="text-gray-600 mt-4">Arrastra tu archivo aquí</p>
              <p className="text-gray-400 text-sm">- o -</p>
              <button className="mt-4 px-4 py-2 bg-gray-500 text-white text-sm rounded-md hover:bg-gray-600">
                Seleccionar imagen
              </button>
              <p className="text-gray-500 text-sm mt-2">
                Sube una foto de perfil
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="alias"
                  className="block text-sm font-medium text-gray-700"
                >
                  Alias *
                </label>
                <input
                  type="text"
                  id="alias"
                  className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Alias público"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Número de Teléfono *
                </label>
                <div className="flex">
                  <select className="border border-gray-300 rounded-l-md p-2 focus:ring-red-500 focus:border-red-500">
                    <option value="FR">FR (+33)</option>
                    <option value="US">US (+1)</option>
                    <option value="ES">ES (+34)</option>
                  </select>
                  <input
                    type="text"
                    id="phone"
                    className="flex-1 border border-gray-300 rounded-r-md p-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="123456789"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="instagram"
                  className="block text-sm font-medium text-gray-700"
                >
                  Instagram Username
                </label>
                <input
                  type="text"
                  id="instagram"
                  className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="@usuario"
                />
              </div>

              <div>
                <label
                  htmlFor="facebook"
                  className="block text-sm font-medium text-gray-700"
                >
                  Facebook Username
                </label>
                <input
                  type="text"
                  id="facebook"
                  className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Facebook usuario"
                />
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  País *
                </label>
                <select
                  id="country"
                  className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500"
                >
                  <option value="FR">🇫🇷 France</option>
                  <option value="ES">🇪🇸 España</option>
                  <option value="US">🇺🇸 Estados Unidos</option>
                  <option value="DO">🇩🇴 República Dominicana</option>
                </select>
                <p className="text-sm text-gray-500 mt-2">
                  Selecciona el país donde tienes la cuenta bancaria para
                  recibir tus ingresos. Esto no podrá modificarse.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button className="px-6 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600">
              Solicitar rol
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalIam;
