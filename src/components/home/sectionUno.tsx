import img from "../../assets/img/img.png";

function SectionUno() {
  const events = [
    {
      image: img,
    },
    {
      image: img,
    },
    {
      image: img,
    },
    {
      image: img,
    },
    {
      image: img,
    },
    {
      image: img,
    },
  ];

  return (
    <section className="py-10 px-4 white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl font-semibold text-gray-800">
          Encuentra y adquiere tus fotos favoritas de eventos fácilmente con el
          reconocimiento avanzado de{" "}
          <span className="font-bold">número de corredor y facial</span>.
        </h2>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative bg-white border rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-4 h-64 bg-cover bg-center">
              <img src={event.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionUno;
