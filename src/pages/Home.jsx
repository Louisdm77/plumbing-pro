import ServiceCard from "../components/ServiceCard";
import { services } from "../utils/services";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      {/* Hero Section with Image Background */}
      <section
        className="relative py-20 bg-contain bg-center"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/c9/69/2f/c9692f8416f16535c28e78a5d69579f0.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>{" "}
        {/* Dark overlay for readability */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Plumbing Pro
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto drop-shadow-md">
            Expert plumbing solutions for your home and business—reliable, fast,
            and trusted since 2005.
          </p>
          <Link
            to="/booking"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition shadow-lg"
          >
            Book Now
          </Link>
        </div>
        {/* Foreground image removed since background now serves this purpose */}
      </section>

      {/* Services Overview */}
      <section className="py-20 -mt-16 relative z-10">
        <div className="bg-white shadow-xl rounded-xl p-8 max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
            From emergency repairs to routine maintenance, we’ve got you covered
            with professional service every time.
          </p>
          <Link
            to="/services"
            className="block text-center mt-6 text-indigo-600 hover:underline font-semibold"
          >
            Explore All Services
          </Link>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-gray-200">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Why Choose Plumbing Pro?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="text-center">
            <img
              src="https://i.pinimg.com/736x/f4/f1/d8/f4f1d874843bb852596a210a91ca7072.jpg"
              alt="Expertise"
              className="w-40 h-40 object-cover rounded-full mx-auto mb-6 shadow-md"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Proven Expertise
            </h3>
            <p className="text-gray-600">
              Over 20 years of solving plumbing challenges with skill and
              precision.
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://i.pinimg.com/736x/8d/e6/67/8de6671b3c06cbd569a4b95cef5b0fd5.jpg"
              alt="Fast Service"
              className="w-40 h-40 object-cover rounded-full mx-auto mb-6 shadow-md"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Fast Response
            </h3>
            <p className="text-gray-600">
              24/7 availability to tackle emergencies when you need us most.
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://i.pinimg.com/736x/75/7a/4b/757a4bc8948ec40f826b818d4e2d8866.jpg"
              alt="Trusted"
              className="w-40 h-40 object-cover rounded-full mx-auto mb-6 shadow-md"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Trusted Quality
            </h3>
            <p className="text-gray-600">
              Certified plumbers delivering lasting results you can rely on.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Happy Customers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-600 italic mb-4">
              "Plumbing Pro turned a stressful leak into a quick fix. Their team
              was professional and courteous!"
            </p>
            <p className="text-indigo-600 font-semibold">— Sarah K.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-600 italic mb-4">
              "Fast, reliable, and affordable. They installed my water heater
              perfectly—couldn’t be happier!"
            </p>
            <p className="text-indigo-600 font-semibold">— Tom R.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-600 italic mb-4">
              "I called them at midnight for an emergency, and they were here in
              30 minutes. Lifesavers!"
            </p>
            <p className="text-indigo-600 font-semibold">— Emily P.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-600 italic mb-4">
              "Great service from start to finish. The team explained everything
              clearly and did an amazing job."
            </p>
            <p className="text-indigo-600 font-semibold">— James L.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-indigo-600 text-white text-center rounded-lg">
        <h2 className="text-4xl font-bold mb-6">Need Plumbing Help?</h2>
        <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
          Whether it’s a small repair or a big installation, we’re ready to
          assist you today.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link
            to="/booking"
            className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition shadow-lg"
          >
            Schedule a Service
          </Link>
          <Link
            to="/contact"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-indigo-600 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
