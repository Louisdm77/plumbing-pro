import { Link } from "react-router-dom";
import EnquiryForm from "../components/EnquiryForm";

export default function Contact() {
  return (
    <div className="container mx-auto px-6">
      {/* Header with New Background Image */}
      <section
        className="relative py-24 text-center bg-cover bg-center rounded-b-xl overflow-hidden"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/6d/1d/f3/6d1df3c439c6b943e66a614255334540.jpg')`, // New contact-related image
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className="relative text-5xl md:text-6xl font-bold text-white mb-6 z-10 drop-shadow-lg">
          Contact Plumbing Pro
        </h1>
        <p className="relative text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto z-10 drop-shadow-md">
          We’re here to help with all your plumbing needs—reach out today!
        </p>
      </section>

      {/* Contact Info */}
      <section className="py-20 -mt-12 relative z-10">
        <div className="bg-white shadow-xl rounded-xl p-8 max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Get in Touch</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Contact Details</h3>
              <p className="text-gray-600 mb-3">
                <strong>Phone:</strong> <span className="text-indigo-600">(123) 456-7890</span>
              </p>
              <p className="text-gray-600 mb-3">
                <strong>Email:</strong>{" "}
                <a href="mailto:info@plumbingpro.com" className="text-indigo-600 hover:underline">
                  info@plumbingpro.com
                </a>
              </p>
              <p className="text-gray-600 mb-3">
                <strong>Address:</strong> 123 Plumbing Lane, City, State, ZIP
              </p>
              <p className="text-gray-600">
                <strong>Fax:</strong> (123) 456-7891
              </p>
            </div>
            <img
              src="https://i.pinimg.com/736x/e4/8b/7a/e48b7a561d38ce0cb3d130521b124149.jpg"
              alt="Office"
              className="w-full md:w-1/2 h-72 object-cover rounded-lg transform transition duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-gray-100 rounded-xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Business Hours</h2>
        <div className="max-w-2xl mx-auto text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <p className="text-gray-600 mb-3">Monday - Friday: <span className="font-medium">8:00 AM - 6:00 PM</span></p>
          <p className="text-gray-600 mb-3">Saturday: <span className="font-medium">9:00 AM - 4:00 PM</span></p>
          <p className="text-gray-600 mb-3">Sunday: <span className="font-medium">Closed</span> (Emergency Services Available)</p>
          <p className="text-gray-600">
            24/7 Emergency Hotline: <span className="text-indigo-600 font-medium">(123) 456-7890</span>
          </p>
        </div>
      </section>

      {/* Working Google Map */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Find Us</h2>
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d-122.41941548468144!3d37.774929779759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f5d3b2b4b%3A0x1c0f8f8e8f8e8f8e!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1698771234567!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Plumbing Pro Location"
          ></iframe>
        </div>
        <p className="text-center mt-6 text-gray-600">
          Conveniently located at 123 Plumbing Lane, easily accessible from all major routes.
        </p>
      </section>

      {/* Quick Enquiry */}
      <section className="py-20 bg-gray-100 rounded-xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Quick Enquiry</h2>
        <p className="text-center text-gray-600 mb-8">
          For detailed inquiries, visit our{" "}
          <Link to="/enquiry" className="text-indigo-600 hover:underline font-medium">
            Enquiry Page
          </Link>
          , or call us now!
        </p>
        <div className="max-w-md mx-auto">
          <EnquiryForm />
        </div>
      </section>
    </div>
  );
}