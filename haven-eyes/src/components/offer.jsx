import React from 'react';

const Offer = () => {
    return (
        <div className="flex flex-col w-full">

            {/* Header */}
            <div className="flex flex-col items-center text-center px-4 py-10 mb-4">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Top offers</h2>
                <p className="text-gray-600 text-base max-w-xl">
                    From glasses to hearing aids, here are some top offers from the world of Specsavers.
                </p>
            </div>

            {/* Offer 1 - 2 for 1 (text left, image right) */}
            <div className="flex flex-row w-full min-h-[500px]">

                {/* Left - Text */}
                <div className="flex flex-col justify-center w-1/2 px-16 py-16">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">
                        Offer
                    </span>
                    <h3 className="text-4xl font-bold text-gray-900 mb-6">
                        Our great 2 for 1 offers
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed mb-8">
                        With 2 for 1 you can mix styles, switch looks and choose sunnies, safety specs or even contacts as one of your two. A pair for work, a pair for play. One for nightlife, one for the everyday. Why stop at one?
                    </p>
                    <div className="flex flex-row gap-8">
                        <a href="#" className="text-green-800 font-semibold underline flex items-center gap-1">
                            Check out 2 for 1 <span>›</span>
                        </a>
                        <a href="#" className="text-green-800 font-semibold underline flex items-center gap-1">
                            View glasses <span>›</span>
                        </a>
                    </div>
                </div>

                {/* Right - Image placeholder */}
                <div className="w-1/2 bg-gray-200 min-h-[500px]">
                    {/* Image goes here */}
                </div>

            </div>

            {/* Offer 2 - Hearing aid promise (image left, text right) */}
            <div className="flex flex-row w-full min-h-[500px] mt-12">

                {/* Left - Image placeholder */}
                <div className="w-1/2 bg-gray-200 min-h-[500px]">
                    {/* Image goes here */}
                </div>

                {/* Right - Text */}
                <div className="flex flex-col justify-center w-1/2 px-16 py-16 ">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">
                        Hearing Aids
                    </span>
                    <h3 className="text-4xl font-bold text-gray-900 mb-6">
                        Hearing aid promise
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed mb-8">
                        Found cheaper comparable hearing on the high street? We'll double the difference
                    </p>
                    <div className="flex flex-row gap-8">
                        <a href="#" className="text-green-800 font-semibold underline flex items-center gap-1">
                            Browse <span>›</span>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Offer;