export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white p-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Plumbing Pro</h3>
            <p className="text-gray-300">Your trusted plumbing experts since 2005, delivering quality service across the region.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/booking" className="hover:underline">Book Now</a></li>
              <li><a href="/enquiry" className="hover:underline">Enquiry</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p className="text-gray-300">Phone: (123) 456-7890</p>
            <p className="text-gray-300">Email: info@plumbingpro.com</p>
            <p className="text-gray-300">Address: 123 Plumbing Lane, City, State</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>© 2025 Plumbing Pro. All rights reserved.</p>
        </div>
      </footer>
    );
  }