import { useState } from "react";
import Header from "../../components/home/header";
import Footer from "../../components/home/footer";

function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Qué es Photo Sport?",
      answer:
        "Es una comunidad creada por y para deportistas y fotógrafos. Es el punto de encuentro donde los deportistas pueden encontrar sus mejores fotos y guardar momentos increíbles, mientras los fotógrafos pueden convertir su pasión en una profesión.",
    },
    {
      question: "¿Quién puede usar Photo Sport?",
      answer:
        "Todos pueden usar Photo Sport. Invitamos a todos los fotógrafos deportivos a probarla, y a todos los deportistas a conectarse. Además, los organizadores de eventos deportivos pueden confiar en Photo Sport para la cobertura fotográfica, facilitando que los participantes encuentren sus fotos.",
    },
    {
      question: "¿Cómo funciona Photo Sport?",
      answer:
        "Es simple:\n1. Los fotógrafos toman las fotos.\n2. Suben el álbum en alta calidad a la plataforma, que automáticamente publica las fotos en baja calidad con una marca de agua.\n3. Los deportistas buscan sus fotos y tienen la opción de comprarlas y descargarlas en alta calidad sin marca de agua.",
    },
    {
      question: "¿Cualquier persona puede registrarse como fotógrafo?",
      answer:
        "¡Sí! Invitamos a todos los fotógrafos a registrarse y comenzar a trabajar con Photo Sport. No hay requisitos más allá de tener una dirección de correo electrónico.",
    },
    {
      question: "¿Qué tipo de fotografía se puede vender en Photo Sport?",
      answer: "Actualmente, trabajamos con todo tipo de fotografía deportiva.",
    },
    {
      question: "¿Cómo vendo mis fotos en Photo Sport?",
      answer:
        "Una vez registrado como fotógrafo y completada la conexión con el procesador de pagos Stripe, puedes ir a 'Mis Álbumes' y subir tu primer álbum. Comparte el enlace del álbum en redes sociales y con los interesados en el evento deportivo para alcanzar un mayor público. Las ventas ocurren automáticamente, y recibirás el dinero en la cuenta bancaria vinculada a Stripe.",
    },
    {
      question: "¿Cuándo puedo acceder al dinero de mis ventas?",
      answer:
        "El procesador de pagos, Stripe, realizará transferencias semanales a tu cuenta bancaria vinculada.",
    },

    {
      question: "¿Cómo funciona Photo Sport?",
      answer:
        "Photo Sport es una plataforma donde los fotógrafos suben fotos registradas de un evento en particular, para que los deportistas puedan acceder, ver y comprar sus fotos en alta calidad sin marcas de agua.",
    },
    {
      question: "¿Cómo puedo comprar mis fotos?",
      answer:
        "Busca un álbum o evento filtrando por fecha, ubicación o nombre del evento. Dentro del álbum, busca tus fotos por horarios o número de competidor. Cuando encuentres tus fotos, añádelas al carrito y realiza el pago con tarjeta de crédito o débito.",
    },
    {
      question: "Compré mis fotos, ¿cómo puedo descargarlas?",
      answer:
        "Inicia sesión en Photo Sport y accede a la sección 'Compras'. Allí verás tus compras y las fotos adquiridas. Haz clic en 'Descargar' para iniciar la descarga. Las fotos son de alta calidad, por lo que puede tomar unos minutos.",
    },
  ];

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Preguntas Frecuentes
          </h1>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-gray-800 mb-4">GENÉRICAS</h2>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-none"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full py-4 text-left text-gray-800 font-medium focus:outline-none"
                >
                  {faq.question}
                  <span>
                    {activeIndex === index ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="12" x2="6" y2="12"></line>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="6" x2="12" y2="18"></line>
                        <line x1="6" y1="12" x2="18" y2="12"></line>
                      </svg>
                    )}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Faq;
