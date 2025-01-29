function Section() {
  return (
    <div className="flex flex-col items-center px-6 py-8">
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-6">
        <a
          href="#"
          className="text-black font-bold hover:text-red-500 border-b-2 border-transparent hover:border-red-500"
        >
          Photo Galleries
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-red-500 border-b-2 border-transparent hover:border-red-500"
        >
          What You Pay
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-red-500 border-b-2 border-transparent hover:border-red-500"
        >
          Join as a Photographer
        </a>
      </div>

      <div className="flex items-center justify-center space-x-2 mb-6">
        <button className="px-4 py-2 text-sm font-medium bg-white border-2 border-red-500 text-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
          Events
        </button>
        <button className="px-4 py-2 text-sm font-medium bg-gray-300 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500">
          Upcoming Events
        </button>
      </div>

      <div className="relative w-full max-w-md">
        <input
          type="text"
          className="w-full border border-gray-300 rounded-md py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder="Search events"
        />
        <button className="absolute top-2 right-2 text-gray-500 hover:text-black focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Section;


