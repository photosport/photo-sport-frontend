import Header from "../../components/home/header";
import fototerms from "../../assets/img/foto-terms.jpg";
import Footer from "../../components/home/footer";
import Chat from "../../components/chat/chat";

function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <div className="flex flex-grow flex-wrap">
        <div className="w-full md:w-1/2 bg-red-200 flex items-center justify-center p-6">
          <div className="relative w-full h-full">
            <img
              src={fototerms}
              alt="Ilustración"
              className="w-full h-full object-cover rounded-lg"
            />
            <p className="absolute bottom-4 left-4 text-lg font-bold text-white">
              Conoce nuestros términos
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-white flex items-center justify-center px-6 py-10">
          <div className="w-full max-w-2xl overflow-y-auto h-[80vh]">
            <h2 className="text-2xl font-bold text-gray-800">
              Términos y Condiciones
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Por favor, lee cuidadosamente los términos y condiciones antes de
              utilizar nuestro servicio.
            </p>

            <div className="mt-6 space-y-4 text-justify text-gray-700">
              <section>
                <h3 className="text-lg font-semibold text-gray-800">
                  Introducción
                </h3>
                <p>
                  Bienvenido a Lumepic. Estos términos regulan el uso del
                  servicio (el "Servicio") y aplican al acceder a nuestra
                  plataforma ubicada en{" "}
                  <a
                    href="http://www.lumepic.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:underline"
                  >
                    http://www.photsport.com
                  </a>
                  .
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-800">
                  Sobre el servicio
                </h3>
                <p>
                  Lumepic es una plataforma virtual que conecta fotógrafos y
                  atletas de todo el mundo. Permite a los fotógrafos compartir y
                  vender imágenes deportivas.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-800">
                  Conducta del usuario
                </h3>
                <p>
                  Los usuarios se comprometen a no publicar material ofensivo,
                  utilizar el servicio con fines ilegales ni interferir con el
                  funcionamiento adecuado de la plataforma.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-800">
                  Obras intelectuales
                </h3>
                <p>
                  Las fotografías publicadas en Lumepic son propiedad exclusiva
                  de los fotógrafos. No está permitido el uso comercial de las
                  mismas sin autorización.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-800">
                  Exclusión de responsabilidad
                </h3>
                <p>
                  La Compañía no es responsable por pérdidas o daños derivados
                  del uso del servicio. Los usuarios asumen toda la
                  responsabilidad al utilizar la plataforma.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-800">
                  Modificaciones a los términos
                </h3>
                <p>
                  Lumepic puede modificar estos términos en cualquier momento.
                  Es responsabilidad del usuario revisarlos periódicamente para
                  mantenerse informado.
                </p>
              </section>
            </div>

            <div className="mt-6">
              <a
                href="/register"
                className="block w-full text-center py-2 px-4 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Registrate
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Chat/>
    </div>
  );
}

export default Terms;
