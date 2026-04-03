import React, { useState } from "react";

const glassesProducts = [
  { brand: "adidas", model: "SP0109-1 SUN", price: "GH₵ 2,890" },
  { brand: "HUGO", model: "HG 33", price: "GH₵ 2,550" },
  { brand: "Specsavers", model: "SANDHAMMAREN SUN RX", price: "GH₵ 1,190" },
  { brand: "Kylie Minogue", model: "BREATHE", price: "GH₵ 2,210" },
];

const contactLensProducts = [
  { brand: "easyvision Sential", model: "Daily disposables", price: "GH₵ 230" },
  { brand: "easyvision Umere", model: "Daily disposables", price: "GH₵ 280" },
  { brand: "easyvision Linarial", model: "Daily disposables", price: "GH₵ 306" },
  { brand: "easyvision Vitrea", model: "Daily disposables", price: "GH₵ 230" },
];

const ProductCard = ({ brand, model, price }) => (
  <div className="flex flex-col border border-gray-200 rounded-lg flex-1 mx-2 overflow-hidden">
    <div className="h-48 w-full" />
    <div className="p-4">
      <p className="font-bold text-gray-900 text-base">{brand}</p>
      <p className="text-gray-500 text-sm uppercase tracking-wide mt-1">{model}</p>
      <p className="font-semibold text-gray-900 mt-2">{price}</p>
    </div>
  </div>
);

const GlassesIcon = () => (
  <svg width="80" height="48" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="28" r="16" stroke="#1a1a1a" strokeWidth="6" fill="none" />
    <circle cx="60" cy="28" r="16" stroke="#1a1a1a" strokeWidth="6" fill="none" />
    <path d="M36 28 Q40 22 44 28" stroke="#1a1a1a" strokeWidth="5" fill="none" strokeLinecap="round" />
    <path d="M4 28 Q2 18 1 12" stroke="#1a1a1a" strokeWidth="5" fill="none" strokeLinecap="round" />
    <path d="M76 28 Q78 18 79 12" stroke="#1a1a1a" strokeWidth="5" fill="none" strokeLinecap="round" />
  </svg>
);

const LensIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M30 4 C50 4 56 30 30 56 C4 30 10 4 30 4Z"
      stroke="#1a1a1a"
      strokeWidth="6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Product = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="flex flex-col w-full">

      {/* Section 1 - Our freshest frames */}
      <div className="flex flex-col px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
          Our freshest frames
        </h2>
        <p className="text-center text-gray-600 text-base mb-8">
          Explore our most popular styles, from in-house looks to top designer picks. There's sure to be something for you.
        </p>

        <div className="flex flex-row justify-between">
          {glassesProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="flex flex-row justify-center gap-6 mt-10">
          <button className="border-2 border-green-800 text-green-800 font-semibold rounded-full px-10 py-3 hover:bg-green-50 transition">
            Browse glasses
          </button>
          <button className="border-2 border-green-800 text-green-800 font-semibold rounded-full px-10 py-3 hover:bg-green-50 transition">
            Browse sunglasses
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 mx-4" />

      {/* Section 2 - Our best-loved contact lenses */}
      <div className="flex flex-col px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
          Our best-loved contact lenses
        </h2>
        <p className="text-center text-gray-600 text-base mb-8">
          Looking for great value contact lenses? You've come to the right place – buy yours in store or online.
        </p>

        <div className="flex flex-row justify-between">
          {contactLensProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="flex flex-row justify-center gap-2 mt-6">
          <button
            onClick={() => setActiveSlide(0)}
            className={`w-3 h-3 rounded-full ${activeSlide === 0 ? "bg-green-700" : "bg-gray-300"}`}
          />
          <button
            onClick={() => setActiveSlide(1)}
            className={`w-3 h-3 rounded-full ${activeSlide === 1 ? "bg-green-700" : "bg-gray-300"}`}
          />
        </div>

        <div className="flex flex-row justify-center gap-6 mt-8">
          <button className="border-2 border-green-800 text-green-800 font-semibold rounded-full px-10 py-3 hover:bg-green-50 transition">
            Shop contact lenses
          </button>
          <button className="border-2 border-green-800 text-green-800 font-semibold rounded-full px-10 py-3 hover:bg-green-50 transition">
            Express re-order
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 mx-4" />

      {/* Section 3 - Offers banner */}
      <div className="flex flex-row w-full bg-gray-100">

        {/* Left - Complete glasses */}
        <div className="flex flex-row items-start gap-6 w-1/2 px-16 py-16">
          <div className="mt-1 flex-shrink-0">
            <GlassesIcon />
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Complete glasses from GH₵ 255
            </h3>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Stylish frames including single vision lenses and scratch-resistant treatment from just GH₵ 255 a pair
            </p>
            <a href="#" className="text-green-800 font-semibold underline flex items-center gap-1">
              Find out more <span>›</span>
            </a>
          </div>
        </div>

        {/* Vertical divider */}
        <div className="w-px bg-gray-300 my-12" />

        {/* Right - Contact lens free trial */}
        <div className="flex flex-row items-start gap-6 w-1/2 px-16 py-16">
          <div className="mt-1 flex-shrink-0">
            <LensIcon />
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Contact lens free trial
            </h3>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              We're confident that you'll enjoy wearing contact lenses, but we want you to be sure too. That's why we let you try before you buy.
            </p>
            <a href="#" className="text-green-800 font-semibold underline flex items-center gap-1">
              Find out more <span>›</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Product;