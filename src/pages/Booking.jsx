import BookingForm from "../components/BookingForm";
import { Link } from "react-router-dom";

export default function Booking() {
  return (
    <div className="container mx-auto px-6">
      {/* Header with New Background Image */}
      <section
        className="relative py-24 text-center bg-fit bg-center rounded-b-xl overflow-hidden"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/97/ef/6e/97ef6e1d0a5f7a422b8162fb50f6b3a1.jpg')`, // New plumbing image
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Dark overlay for text contrast */}
        <h1 className="relative text-5xl md:text-6xl font-bold text-white mb-6 z-10 drop-shadow-lg">
          Book a Plumbing Service
        </h1>
        <p className="relative text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto z-10 drop-shadow-md">
          Schedule with ease—our experts are ready to deliver top-tier solutions.
        </p>
      </section>

      {/* Booking Instructions */}
      <section className="py-20 -mt-12 relative z-10">
        <div className="bg-white shadow-xl rounded-xl p-8 max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">1. Submit Your Details</h3>
              <p className="text-gray-600">Fill out the form below with your service needs.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">2. Get Confirmation</h3>
              <p className="text-gray-600">We’ll email you within 24 hours to confirm your slot.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">3. Expert Service</h3>
              <p className="text-gray-600">Our plumber arrives on time, fully equipped.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-gray-100 rounded-xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Make Your Appointment</h2>
        <div className="max-w-lg mx-auto">
          <BookingForm />
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">Pipe Repair</h3>
            <p className="text-gray-600">
              Swift repairs for leaks, bursts, and corrosion—restoring your pipes seamlessly.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">Drain Cleaning</h3>
            <p className="text-gray-600">
              Professional blockage removal for smooth, efficient drainage.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">Water Heater Installation</h3>
            <p className="text-gray-600">
              Precision installation for reliable hot water, every time.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-100 rounded-xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Booking FAQs</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-50 transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Can I book for the same day?</h3>
            <p className="text-gray-600">
              Yes, call us at <span className="text-indigo-600 font-medium">(123) 456-7890</span> for same-day emergencies.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-50 transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">What if I need to reschedule?</h3>
            <p className="text-gray-600">
              Reply to your confirmation email or call us to adjust your appointment effortlessly.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-50 transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Is there a cancellation fee?</h3>
            <p className="text-gray-600">
              No fees if canceled 24 hours in advance; a small charge may apply otherwise.
            </p>
          </div>
        </div>
        <p className="text-center mt-10">
          <Link
            to="/contact"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-500 transition duration-300 shadow-md"
          >
            More Questions? Reach Out
          </Link>
        </p>
      </section>
    </div>
  );
}