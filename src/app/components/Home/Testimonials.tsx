// Testimonials.tsx (Create a new component for the testimonial section)
import { FC } from "react";


const Testimonials: FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-black">What Our Clients Say</h2>
        <p className="text-lg text-gray-600 mt-4">
          See how we’ve helped our clients find their perfect property and make lasting memories.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg bg-white p-6 transform hover:scale-105 transition-all duration-300">
            <img
              src="/assets/images/client.jpg"
              alt="Client Image"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <p className="text-lg text-gray-700 mb-4">
              The service was outstanding, and we found our dream home! We couldnt have asked for a better experience
            </p>
            <h4 className="font-semibold text-xl text-black">John Doe</h4>
            <p className="text-sm text-gray-500">Happy Client</p>
          </div>

          {/* Testimonial 2 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg bg-white p-6 transform hover:scale-105 transition-all duration-300">
            <img
              src="/assets/images/client.jpg"
              alt="Client Image"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <p className="text-lg text-gray-700 mb-4">
              A fantastic team that truly understands the market. They helped me find a perfect investment property
            </p>
            <h4 className="font-semibold text-xl text-black">Sarah Smith</h4>
            <p className="text-sm text-gray-500">Investor</p>
          </div>

          {/* Testimonial 3 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg bg-white p-6 transform hover:scale-105 transition-all duration-300">
            <img
              src="/assets/images/client.jpg"
              alt="Client Image"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <p className="text-lg text-gray-700 mb-4">
              We were so impressed with the professionalism and support we received. They made our home-buying journey so smooth!
            </p>
            <h4 className="font-semibold text-xl text-black">Michael Johnson</h4>
            <p className="text-sm text-gray-500">First-Time Buyer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
