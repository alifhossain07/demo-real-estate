// services.tsx (Create a new component for services)
import { FC } from "react";
import { Card } from "flowbite-react";
import Image from "next/image";

const OurServices: FC = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-black">Our Services</h2>
        <p className="text-lg text-gray-600 mt-4">
          Whether  buying, selling, or renting, we are here to guide you every step of the way.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Buying Service Card */}
          <Card className="shadow-lg border border-gray-200">
            <img src="/assets/images/buyhouse.jpg" alt="" />
            <h3 className="text-2xl font-semibold text-black mb-4">Buying</h3>
            <p className="text-lg text-gray-700 mb-4">
              Discover your dream home with our expert assistance. From market analysis to closing deals, we provide a seamless buying experience.
            </p>
            <a
              href="#buying"
              className="inline-block mt-4 text-blue-600 hover:text-blue-800"
            >
              Learn More
            </a>
          </Card>

          {/* Selling Service Card */}
          <Card className="shadow-lg border border-gray-200">
          <img src="/assets/images/sellhouse.jpg" alt="" />
            <h3 className="text-2xl font-semibold text-black mb-4">Selling</h3>
            <p className="text-lg text-gray-700 mb-4">
              Ready to sell your property? We offer comprehensive marketing strategies and expert guidance to help you sell at the best price.
            </p>
            <a
              href="#selling"
              className="inline-block mt-4 text-blue-600 hover:text-blue-800"
            >
              Learn More
            </a>
          </Card>

          {/* Renting Service Card */}
          <Card className="shadow-lg border border-gray-200">
          <img src="/assets/images/renthouse.jpg" alt="" />
            <h3 className="text-2xl font-semibold text-black mb-4">Renting</h3>
            <p className="text-lg text-gray-700 mb-4">
              Looking for a rental property? We offer a variety of rental options, from apartments to homes, tailored to your needs.
            </p>
            <a
              href="#renting"
              className="inline-block mt-4 text-blue-600 hover:text-blue-800"
            >
              Learn More
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
