import ServiceCard from "../components/ServiceCard";
import { services } from "../utils/services";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How quickly can you respond to an emergency?",
      answer:
        "We provide 24/7 emergency services and strive to arrive within an hour in most cases, ensuring your issue is addressed promptly.",
    },
    {
      question: "Do you provide free estimates?",
      answer:
        "Yes, we offer free, no-obligation estimates for all our services—just reach out to get started.",
    },
    {
      question: "Are your services guaranteed?",
      answer:
        "Absolutely—our work comes with a satisfaction guarantee and a one-year warranty on parts and labor for your peace of mind.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="container mx-auto px-6">
      {/* Header Section */}
      <section className="relative py-14 text-center bg-gray-100 rounded-b-xl">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-transparent opacity-50"></div>
        <h1 className="relative text-5xl md:text-6xl font-bold text-gray-800 mb-6 z-10">
          Our Plumbing Services
        </h1>
        <p className="relative text-xl text-gray-600 mb-8 max-w-3xl mx-auto z-10">
          Discover comprehensive plumbing solutions tailored to your needs,
          delivered with expertise and unmatched care.
        </p>
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Services Header"
          className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg mt-6"
          onError={(e) => (e.target.src = "/fallback-image.jpg")}
        />
      </section>

      {/* Services List */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Explore Our Offerings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="space-y-4">
              <ServiceCard {...service} />
              <p className="text-gray-600 text-center">
                Our {service.title} service delivers prompt, lasting results
                with premium materials and cutting-edge techniques.
              </p>
              <Link
                to="/booking"
                className="block text-center text-indigo-600 hover:text-indigo-400 font-semibold transition duration-300"
              >
                Book This Service
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 rounded-xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Why Choose Plumbing Pro?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <img
              src="https://i.pinimg.com/736x/a8/cb/46/a8cb46562f39a7928d48c04b75dea6ca.jpg"
              alt="Experience"
              className="w-40 h-40 object-cover rounded-full mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              20+ Years Experience
            </h3>
            <p className="text-gray-600">
              Decades of mastering the plumbing trade, ensuring top-tier
              solutions every time.
            </p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <img
              src="https://i.pinimg.com/736x/ed/f3/6d/edf36dc0073c9d5e8494749390fbf5d6.jpg"
              alt="24/7"
              className="w-40 h-40 object-cover rounded-full mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              24/7 Availability
            </h3>
            <p className="text-gray-600">
              Always ready to assist, day or night, for any plumbing emergency.
            </p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <img
              src="https://i.pinimg.com/736x/fa/cf/93/facf93a96d7ea1d78b95a354473b16e8.jpg"
              alt="Certified"
              className="w-40 h-40 object-cover rounded-full mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Certified Plumbers
            </h3>
            <p className="text-gray-600">
              Licensed experts trained to deliver reliable, high-quality
              service.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-100 rounded-xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <span className="text-indigo-600 text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`${
                  openIndex === index ? "block" : "hidden"
                } px-6 pb-5 text-gray-600`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-12">
          <Link
            to="/enquiry"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-500 transition duration-300 shadow-md"
          >
            Have More Questions? Contact Us
          </Link>
        </p>
      </section>
    </div>
  );
}
