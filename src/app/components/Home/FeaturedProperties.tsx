// FeaturedProperties.tsx (Create a new component for featured properties)
import { FC } from "react";
// import { Card } from "flowbite-react";

const FeaturedProperties: FC = () => {
  return (
    <section id="featured-properties" className="py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-black">Featured Properties</h2>
        <p className="text-lg text-gray-600 mt-4">
          Explore our curated selection of premium properties, handpicked just for you.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Property 1 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/assets/images/modernfamilyhome.webp"
              alt="Modern Family Home"
              className="w-full h-72 object-cover group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-6 opacity-75 group-hover:opacity-100 transition-all duration-500">
              <h3 className="text-xl font-semibold text-white">Modern Family Home</h3>
              <p className="text-lg text-white mt-2">$1,250,000</p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-500 hover:text-blue-600 font-semibold"
              >
                View Details
              </a>
            </div>
          </div>

          {/* Property 2 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/assets/images/luxurycondo.jpg"
              alt="Luxury Condo"
              className="w-full h-72 object-cover group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-6 opacity-75 group-hover:opacity-100 transition-all duration-500">
              <h3 className="text-xl font-semibold text-white">Luxury Condo</h3>
              <p className="text-lg text-white mt-2">$850,000</p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-500 hover:text-blue-600 font-semibold"
              >
                View Details
              </a>
            </div>
          </div>

          {/* Property 3 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/assets/images/cozyvilla.jpg"
              alt="Cozy Beachfront Villa"
              className="w-full h-72 object-cover group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-6 opacity-75 group-hover:opacity-100 transition-all duration-500">
              <h3 className="text-xl font-semibold text-white">Cozy Beachfront Villa</h3>
              <p className="text-lg text-white mt-2">$2,000,000</p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-500 hover:text-blue-600 font-semibold"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
