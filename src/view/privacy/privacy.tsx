import Footer from "../../components/home/footer";
import Header from "../../components/home/header";

function Privacy() {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Políticas de Privacidad
          </h1>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-lg font-bold text-red-600 mb-4">
              Políticas de Privacidad
            </h2>
            <p className="text-gray-700">
              Photo Sport (la "Compañía") respeta la privacidad de los usuarios
              de su servicio. Este documento explica cómo la Compañía recopila,
              utiliza y divulga información relacionada con su privacidad. Al
              acceder o utilizar el servicio, usted declara que está de acuerdo
              con estas Políticas de Privacidad. Si desea más información o
              tiene alguna pregunta, no dude en contactarnos a través del correo
              electrónico{" "}
              <a
                href="mailto:info@photosport.com"
                className="text-red-600 hover:underline"
              >
                info@photosport.com
              </a>
              . Photo Sport considera la privacidad de los usuarios muy
              importante. Estas Políticas de Privacidad describen en detalle los
              tipos de información personal que el sitio recopila y cómo se
              utiliza.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-lg font-bold text-red-600 mb-4">
              Archivos de Registro
            </h2>
            <p className="text-gray-700">
              Como muchos otros sitios web, Photo Sport utiliza archivos de
              registro. Estos archivos simplemente registran las visitas de los
              usuarios al sitio, lo cual es un procedimiento estándar para las
              empresas de alojamiento y parte de los servicios de análisis. La
              información contenida en estos archivos incluye direcciones de
              Protocolo de Internet (IP), tipo de navegador, proveedor de
              servicios de Internet (ISP), fecha y hora, páginas de
              referencia/salida y posiblemente el número de clics. Esta
              información se utiliza para analizar tendencias, administrar el
              sitio, rastrear el movimiento de los usuarios y recopilar
              información demográfica. Las direcciones IP y otra información no
              están vinculadas a ninguna información personal identificable.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-lg font-bold text-red-600 mb-4">
              Cookies y Web Beacons
            </h2>
            <p className="text-gray-700">
              Photo Sport utiliza cookies para almacenar información sobre las
              preferencias de los usuarios, para registrar información
              específica sobre las páginas que los usuarios acceden o visitan en
              el sitio y para personalizar el contenido del sitio según el tipo
              de navegador del usuario u otra información enviada por el
              navegador.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-lg font-bold text-red-600 mb-4">
              Privacidad de los Niños (COPPA)
            </h2>
            <p className="text-gray-700">
              La Compañía cree que es importante proporcionar protección
              adicional para los niños en línea. Se alienta a los padres y
              tutores a pasar tiempo en línea con sus hijos para observar,
              participar y/o monitorear y guiar su actividad en línea. El sitio
              no recopila intencionalmente ninguna información personal
              identificable de niños menores de 13 años. Si un padre o tutor
              cree que el sitio tiene información personal de un niño menor de
              13 años en su base de datos, puede contactar a la Compañía, la
              cual hará los esfuerzos razonables para eliminar dicha información
              de sus registros de manera inmediata.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-red-600 mb-4">
              Consentimiento
            </h2>
            <p className="text-gray-700">
              Al utilizar el sitio, usted consiente estas Políticas de
              Privacidad y está de acuerdo con sus términos. Estas políticas
              fueron actualizadas por última vez el: 30 de agosto de 2023. Si la
              compañía actualiza, modifica o realiza cambios a las Políticas de
              Privacidad, se publicarán en esta misma dirección.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Privacy;
