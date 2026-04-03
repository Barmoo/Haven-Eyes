import { ShoppingBag, MapPin, Home, Eye } from "lucide-react";

const features = [
  {
    icon: <ShoppingBag size={36} strokeWidth={1.5} />,
    title: "Great offers",
    link: "Browse offers",
  },
  {
    icon: <MapPin size={36} strokeWidth={1.5} />,
    title: "850 local businesses nationwide",
    link: "Find your store",
  },
  {
    icon: <Home size={36} strokeWidth={1.5} />,
    title: "Home eye tests",
    link: "Check eligibility",
  },
  {
    icon: <Eye size={36} strokeWidth={1.5} />,
    title: "Advanced eye tests",
    link: "Find out about OCT",
  },
];

const Feature = () => {
  return (
    <div className="flex flex-col">

      {/* Section 1 - Why choose */}
      <div className="flex flex-col px-4 py-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Why choose Specsavers Opticians and Audiologists?
        </h2>

        <div className="flex flex-row justify-between">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-row items-center gap-4 border border-gray-200 rounded-lg p-6 flex-1 mx-2">
              <div className="text-gray-700">{feature.icon}</div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-800">{feature.title}</span>
                <a href="#" className="text-sm text-green-700 font-semibold underline flex items-center gap-1 mt-1">
                  {feature.link} <span>›</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2 - Advanced eye health scan */}
      <div className="flex flex-row w-full mt-4">

        {/* Left - Image placeholder */}
        <div className="w-1/2 bg-gray-200 min-h-[500px]">
          {/* Image goes here */}
        </div>

        {/* Right - Text content */}
        <div className="w-1/2 flex flex-col justify-center px-12 py-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Advanced eye health scan GH₵1500 or less
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-8">
            OCT technology allows us to take a 3D image of the back of your eye
            to help spot serious eye conditions, including glaucoma, up to four
            years earlier than traditional methods.
          </p>
          <div className="flex flex-row gap-8">
            <a href="#" className="text-green-800 font-semibold underline flex items-center gap-1">
              Book OCT Scan <span>›</span>
            </a>
            <a href="#" className="text-green-800 font-semibold underline flex items-center gap-1">
              Find out more <span>›</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Feature;