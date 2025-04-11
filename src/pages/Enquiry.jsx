import EnquiryForm from "../components/EnquiryForm";
import { Link } from "react-router-dom";

export default function Enquiry() {
  return (
    <div className="container mx-auto px-6">
      {/* Header with New Background Image */}
      <section
        className="relative py-24 text-center bg-fit bg-center rounded-b-xl overflow-hidden"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/5e/f4/f8/5ef4f81c415a9345fddb7f6876b09087.jpg')`, // New plumbing image
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className="relative text-5xl md:text-6xl font-bold text-white mb-6 z-10 drop-shadow-lg">
          Send Us an Enquiry
        </h1>
        <p className="relative text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto z-10 drop-shadow-md">
          Questions or quotes? We’re here to assist with all your plumbing
          needs.
        </p>
      </section>

      {/* Contact Overview */}
      <section className="py-20 -mt-12 relative z-10">
        <div className="bg-white shadow-xl rounded-xl p-8 max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            How We Can Assist
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
                Service Quotes
              </h3>
              <p className="text-gray-600">
                Detailed estimates for any plumbing project.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
                General Questions
              </h3>
              <p className="text-gray-600">
                Clarify our services, timing, or processes.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
                Follow-Ups
              </h3>
              <p className="text-gray-600">
                Track past services or plan additional work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-20 bg-gray-100 rounded-xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Submit Your Enquiry
        </h2>
        <div className="max-w-lg mx-auto">
          <EnquiryForm />
        </div>
      </section>

      {/* Team Intro */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Meet Our Team
        </h2>
        <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <img
            src="https://i.pinimg.com/736x/01/b1/25/01b1258bb7253436a2db75ee530abd8a.jpg"
            alt="Team"
            className="w-full md:w-1/2 h-72 object-cover rounded-lg mb-6 md:mb-0 md:mr-8 transform transition duration-500 hover:scale-[1.02]"
          />
          <div>
            <p className="text-lg text-gray-600 mb-4">
              Our skilled plumbers are here to tackle your enquiries with
              precision and care.
            </p>
            <p className="text-lg text-gray-600">
              Backed by years of expertise, we ensure every response is thorough
              and every job is flawless.
            </p>
          </div>
        </div>
      </section>

      {/* Enquiry Tips */}
      <section className="py-20 bg-gray-100 rounded-xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Enquiry Tips
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-50 transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Be Specific
            </h3>
            <p className="text-gray-600">
              Detail your issue, location, and urgency for a quicker, tailored
              response.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-50 transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Check Your Email
            </h3>
            <p className="text-gray-600">
              Expect a reply within 24-48 hours—watch your inbox (and spam
              folder).
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-50 transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Call for Urgency
            </h3>
            <p className="text-gray-600">
              Need immediate help? Reach us at{" "}
              <span className="text-indigo-600 font-medium">
                (123) 456-7890
              </span>
              .
            </p>
          </div>
        </div>
        <p className="text-center mt-10">
          <Link
            to="/contact"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-500 transition duration-300 shadow-md"
          >
            Need More Help? Contact Us
          </Link>
        </p>
      </section>
    </div>
  );
}
