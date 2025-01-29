export function mostrarMensaje(mensaje: string, elemento: HTMLElement | null) {
  if (elemento) {
    elemento.textContent = mensaje;
    elemento.classList.remove("hidden");
    setTimeout(() => {
      elemento.classList.add("hidden");
    }, 4000);
  }
}

type ModalProps = {
  isVisible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
};

export const Modal: React.FC<ModalProps> = ({
  isVisible,
  onClose,
  onConfirm,
  message,
}) => {
  if (!isVisible) return null;

  return (
    <div className="bg-black/60 backdrop-blur-md fixed inset-0 flex justify-center items-center z-50">
      <div
        id="popup-modal"
        className="relative rounded-2xl shadow-lg bg-white border-4 border-green-500 p-6 max-w-md w-full text-center"
      >
        <button
          onClick={onClose}
          type="button"
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 transition duration-300 transform hover:scale-110"
        >
          ✖
        </button>

        <svg
          className="mx-auto mb-4 text-red-600 w-14 h-14"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        <h3 className="mb-5 text-lg font-semibold text-gray-800">{message}</h3>

        <div className="flex justify-center gap-3">
          <button
            onClick={onConfirm}
            type="button"
            className="transition duration-300 transform hover:scale-105 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg px-5 py-2.5"
          >
            ✅ Sí, confirmar
          </button>
          <button
            onClick={onClose}
            type="button"
            className="transition duration-300 transform hover:scale-105 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg px-5 py-2.5"
          >
            ❌ No, cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
