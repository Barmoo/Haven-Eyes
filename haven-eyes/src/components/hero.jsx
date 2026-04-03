import React from "react";

const Hero = () => {
  return (
    <section className="min-[150%] px-0 py-0"> {/* full viewport height */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 bg-gray-50 h-full">
        {/* Left: writeup */}
        <div className="w-full flex flex-row justify-center h-100 px-6 md:px-12">
          <h1 className="text-4xl md:text-[76px] font-bold mb-3 leading-tight">
            Book Your Apponitments today
          </h1>
        </div>
        <div>
        <button>Book an eye test</button>
        <button>Book a hearing test</button>
        <button>Book a contact lens Appointment</button>
        <button>Request a home visit</button>
        </div>
      
      </div>
    </section>
  );
};

export default Hero;
