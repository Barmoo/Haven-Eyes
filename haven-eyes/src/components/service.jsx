import React from 'react';

const services = [
    {
        title: "Home eye tests available",
        description:
            "Our team of mobile opticians provide a comprehensive eyecare service to those who cannot get to one of our stores unaccompanied.",
        link: "Find out more",
    },
    {
        title: "Myopia management",
        description:
            "Myopia, also known as being near-sighted or short-sighted, is a very common cause of blurred vision. At Specsavers, we can offer glasses lenses or contact lenses to help minimise the progression of myopia in children.",
        link: "Find out more",
    },
    {
        title: "Optical Coherence Tomography",
        description:
            "An Optical Coherence Tomography scan helps us to view the health of your eyes in greater detail.",
        link: "Read more about OCT",
    },
];

const Service = () => {
    return (
        <div className="flex flex-col w-full px-4 py-12">

            {/* Heading */}
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
                Other ways we can help
            </h2>

            {/* Cards */}
            <div className="flex flex-row gap-6 justify-between">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex flex-col flex-1 border border-gray-200 rounded-lg overflow-hidden"
                    >
                        {/* Image placeholder */}
                        <div className="w-full h-56 bg-white" />

                        {/* Text content */}
                        <div className="flex flex-col flex-1 px-6 py-6">
                            <h3 className="text-lg font-bold text-gray- mb-3">
                                {service.title}
                            </h3>
                            <p className=" text-sm leading-relaxed flex-1">
                                {service.description}
                            </p>
                            <a
                                href="#"
                                className="mt-8 text-green-800 font-semibold underline flex items-center gap-2 text-sm"
                            >
                                {service.link}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Service;