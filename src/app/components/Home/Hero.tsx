import React from "react";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <div>
      <section className="relative bg-white text-white">
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-extrabold text-black sm:text-5xl">
              Find Your Perfect Home
              <span className="text-blue-500"> Today</span>
            </h1>
            <p className="mt-4 text-lg sm:leading-relaxed text-black">
              Discover a wide range of residential and commercial properties.
              Whether buying, renting, or investing, we make it easy to find
              your dream property.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 sm:justify-start">
              <a
                href="#properties"
                className="block w-full rounded bg-blue-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-600 sm:w-auto"
              >
                View Properties
              </a>
              <a
                href="#learn-more"
                className="block text-black w-full rounded border border-gray-700 px-12 py-3 text-sm font-medium shadow hover:border-gray-600 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:ml-10">
            <img
              src="/assets/images/real-estate.avif"
              alt="Real Estate Hero Image"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
