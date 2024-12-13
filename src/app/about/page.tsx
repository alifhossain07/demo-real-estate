// AboutUsPage.tsx
import { FC } from "react";

const AboutUsPage: FC = () => {
  return (
    <div>
      <section id="about-us" className="py-16 bg-gray-50">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black">About Us</h2>
          <p className="text-lg text-gray-600 mt-4">
            We are a dedicated team providing exceptional real estate solutions and premium properties for your future.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Section: Our Mission */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg p-6 bg-white">
              <h3 className="text-2xl font-semibold text-black">Our Mission</h3>
              <p className="text-gray-600 mt-4">
                Our mission is to connect people with their dream homes by offering a curated selection of high-quality properties that match their lifestyle needs and desires.
              </p>
            </div>

            {/* Section: Our Values */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg p-6 bg-white">
              <h3 className="text-2xl font-semibold text-black">Our Values</h3>
              <p className="text-gray-600 mt-4">
                Integrity, trust, and excellence guide everything we do. We value customer satisfaction above all and aim to make each experience seamless and rewarding.
              </p>
            </div>

            {/* Section: Our Vision */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg p-6 bg-white">
              <h3 className="text-2xl font-semibold text-black">Our Vision</h3>
              <p className="text-gray-600 mt-4">
                Our vision is to be the leading real estate platform, helping individuals and families find the perfect home through our easy-to-use and reliable services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="meet-the-team" className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black">Meet The Team</h2>
          <p className="text-lg text-gray-600 mt-4">
            Our team consists of passionate, experienced professionals dedicated to making your real estate experience smooth and successful.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-6 opacity-75 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-xl font-semibold text-white">John Doe</h3>
                <p className="text-lg text-white mt-2">Founder & CEO</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-blue-500 hover:text-blue-600 font-semibold"
                >
                  View Profile
                </a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-6 opacity-75 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-xl font-semibold text-white">Jane Smith</h3>
                <p className="text-lg text-white mt-2">Head of Marketing</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-blue-500 hover:text-blue-600 font-semibold"
                >
                  View Profile
                </a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-6 opacity-75 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-xl font-semibold text-white">Michael Lee</h3>
                <p className="text-lg text-white mt-2">Real Estate Agent</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-blue-500 hover:text-blue-600 font-semibold"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-us" className="py-16 bg-gray-50">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black">Contact Us</h2>
          <p className="text-lg text-gray-600 mt-4">
            Have questions? Feel free to reach out to us.
          </p>

          <div className="mt-8">
            <form action="#" method="POST" className="max-w-xl mx-auto">
              <div className="mb-6">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 text-lg border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 text-lg border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-6">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 text-lg border border-gray-300 rounded-md"
                  rows={5}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-md font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
