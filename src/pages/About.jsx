export default function About() {
  return (
    <div className="container mx-auto px-6">
      {/* Header with New Background Image */}
      <section
        className="relative py-24 text-center bg-cover bg-center rounded-b-xl overflow-hidden"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/7d/2a/a2/7d2aa2faa2d8ef196c429c84e10921b8.jpg')`, // New plumbing team image
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className="relative text-5xl md:text-6xl font-bold text-white mb-6 z-10 drop-shadow-lg">
          About Plumbing Pro
        </h1>
        <p className="relative text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto z-10 drop-shadow-md">
          Over 20 years of delivering exceptional plumbing services to homes and businesses.
        </p>
      </section>

      {/* Company History */}
      <section className="py-20 -mt-12 relative z-10">
        <div className="bg-white shadow-xl rounded-xl p-8 max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Journey</h2>
          <div className="flex flex-col md:flex-row items-center">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="History"
              className="w-full md:w-1/2 h-72 object-cover rounded-lg mb-6 md:mb-0 md:mr-8 transform transition duration-500 hover:scale-[1.02]"
            />
            <div>
              <p className="text-lg text-gray-600 mb-4">
                Established in 2005, Plumbing Pro began as a family-run operation, tackling local leaks and pipe installations with dedication.
              </p>
              <p className="text-lg text-gray-600">
                Today, we’re a trusted leader, expanding our expertise and team while staying true to our commitment to quality and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Bios */}
      <section className="py-20 bg-gray-100 rounded-xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Expert Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
              alt="John"
              className="w-40 h-40 object-cover rounded-full mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">John Doe</h3>
            <p className="text-gray-600 font-medium mb-2">Lead Plumber</p>
            <p className="text-gray-600">
              With 15 years of mastery, John excels in complex installations and urgent repairs.
            </p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              alt="Jane"
              className="w-40 h-40 object-cover rounded-full mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Jane Smith</h3>
            <p className="text-gray-600 font-medium mb-2">Service Manager</p>
            <p className="text-gray-600">
              Jane ensures seamless service and prompt, friendly customer support.
            </p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              alt="Mike"
              className="w-40 h-40 object-cover rounded-full mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Mike Brown</h3>
            <p className="text-gray-600 font-medium mb-2">Technician</p>
            <p className="text-gray-600">
              Mike specializes in drain cleaning and water heater maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Mission</h2>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <p className="text-lg text-gray-600 text-center">
            At Plumbing Pro, we’re driven to deliver reliable, efficient, and affordable plumbing solutions that prioritize your comfort and safety. From small fixes to major projects, we aim to exceed expectations every time.
          </p>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 bg-gray-100 rounded-xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Certifications & Awards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img
              src="https://i.pinimg.com/736x/02/e3/5a/02e35af69c889531973c334cf6bbe4b2.jpg"
              alt="Cert"
              className="w-40 h-40 object-cover rounded-full mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Certified Plumbing Contractor</h3>
            <p className="text-gray-600">Fully licensed by the State Plumbing Board.</p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img
              src="https://i.pinimg.com/736x/d9/78/69/d978693eb524bce778dc28798a33ba3b.jpg"
              alt="Award"
              className="w-40 h-40 object-cover rounded-full mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Best Local Service 2023</h3>
            <p className="text-gray-600">Honored by the City Chamber of Commerce.</p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img
              src="https://i.pinimg.com/736x/e4/06/3e/e4063ecf3c6bcf4c03d35036046adfde.jpg"
              alt="Eco"
              className="w-40 h-40 object-cover rounded-full mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Eco-Friendly Practices</h3>
            <p className="text-gray-600">Awarded for sustainable plumbing innovations.</p>
          </div>
        </div>
      </section>
    </div>
  );
}