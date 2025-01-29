import { useState } from "react";

function Chat() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={toggleChat}
        className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-lg border border-gray-200">
          <div className="bg-green-500 text-white px-4 py-3 flex justify-between items-center rounded-t-lg">
            <span className="font-bold">Chat de Soporte</span>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>

          <div className="p-4 h-64 overflow-y-auto">
            <div className="text-sm text-gray-600 mb-2">
              ¡Hola! ¿En qué podemos ayudarte?
            </div>

            <div className="flex flex-col space-y-3">
              <div className="bg-gray-100 p-3 rounded-lg self-start text-sm text-gray-800">
                Hola, tengo una consulta.
              </div>
              <div className="bg-green-500 text-white p-3 rounded-lg self-end text-sm">
                Claro, ¿cómo podemos ayudarte?
              </div>
            </div>
          </div>

          <div className="p-3 border-t border-gray-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();

              }}
              className="flex items-center space-x-3"
            >
              <input
                type="text"
                placeholder="Escribe un mensaje..."
                className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
