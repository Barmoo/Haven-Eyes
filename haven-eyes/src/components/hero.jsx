import React from "react";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-4xl w-full text-center">

        {/* Heading */}
        <h1 className="text-3xl text-green-600 md:text-5xl font-bold mb-8 whitespace-nowrap">
          Book Your Appointments Today
        </h1>

        {/* Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl justify-center mx-auto">

          <button className="bg-green-700 text-white py-3 px-2 rounded-full font-semibold hover:bg-green-700 transition">
            Book an eye test
          </button>

          <button className="bg-green-700 text-white py-3 px-2 rounded-full font-semibold hover:bg-green-700 transition">
            Book a hearing test
          </button>

          <button className="bg-green-700 text-white py-3 px-2 rounded-full font-semibold hover:bg-green-700 transition">
            Book a contact lens appointment
          </button>

          <button className="bg-green-700 text-white py-3 px-2 rounded-full font-semibold hover:bg-green-700 transition">
            Request a home visit
          </button>

        </div>

      </div>
    </section>
  );
};

export default Hero;