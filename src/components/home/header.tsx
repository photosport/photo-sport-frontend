import { useState } from "react";
import logo from "../../assets/img/icon.png";
import españa from "../../assets/img/espana.png";
import ingles from "../../assets/img/ingles.png";
import ModalIdioma from "./modalIdioma";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex flex-wrap items-center justify-between px-4 py-3 bg-white shadow-md md:px-6">
      <a href="/">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-6 w-6 sm:h-8 sm:w-8" />
          <span className="text-sm font-bold text-black sm:text-lg">
            PHOTO SPORT
          </span>
        </div>
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-4 text-gray-500">
        <a href="/albums" className="hover:text-black text-sm sm:text-base">
          Álbumes
        </a>
        <a href="/events" className="hover:text-black text-sm sm:text-base">
          Eventos
        </a>
      </nav>

      <div className="hidden md:flex items-center space-x-4">
        <div className="relative">
          <button
            className="text-gray-500 hover:text-black"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            🌐
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
              <div className="px-4 py-2 border-b">
                <span className="block text-sm font-medium text-gray-700">
                  Idioma
                </span>
                <div className="flex items-center space-x-2 mt-2">
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-black">
                    <img
                      src={españa}
                      alt="Bandera de España"
                      className="h-4 w-4"
                    />
                    <span>ES</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-black">
                    <img
                      src={ingles}
                      alt="Bandera de Inglaterra"
                      className="h-4 w-4"
                    />
                    <span>EN</span>
                  </button>
                </div>
              </div>
              <div className="px-4 py-2">
                <span className="block text-sm font-medium text-gray-700">
                  País
                </span>
                <button className="flex items-center space-x-2 mt-2 text-gray-600 hover:text-black">
                  <span onClick={toggleModal}>CUBA</span>
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            className="relative text-gray-500 hover:text-red-500"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            🛍️
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
              0
            </span>
          </button>
          {isCartOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg">
              <div className="px-4 py-2 text-gray-700 text-sm">
                No hay elementos en el carrito
              </div>
              <div className="px-4 py-2 border-t flex flex-col space-y-2">
                <a
                  href="/car"
                  className="block w-full text-center py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600"
                >
                  Ver Carrito
                </a>
              </div>
            </div>
          )}
        </div>

        <a href="/login">
          <button className="px-3 py-2 text-xs font-medium text-black border border-gray-300 rounded-md sm:px-4 sm:py-2 sm:text-sm hover:bg-gray-100">
            Ingresar
          </button>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-500 hover:text-black"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="w-full mt-3 md:hidden">
          <nav className="flex flex-col space-y-2 text-gray-500">
            <a
              href="/albums"
              className="hover:text-black text-sm sm:text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Álbumes
            </a>
            <a
              href="/events"
              className="hover:text-black text-sm sm:text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Eventos
            </a>
            <a
              href="/login"
              className="hover:text-black text-sm sm:text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Ingresar
            </a>
          </nav>
        </div>
      )}

      {isOpen && <ModalIdioma toggleModal={toggleModal} />}
    </header>
  );
}

export default Header;
