import { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

export default function BookingForm() {
  const [formData, setFormData] = useState({ name: "", email: "", date: "", service: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          date: formData.date,
          service: formData.service,
          message: formData.message,
        },
        "YOUR_USER_ID"
      );
      toast.success("Booking request sent successfully!");
      setFormData({ name: "", email: "", date: "", service: "", message: "" });
    } catch (error) {
      toast.error("Failed to send booking request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Book a Service</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <input
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <select
        value={formData.service}
        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
        className="w-full p-2 mb-4 border rounded"
        required
      >
        <option value="">Select Service</option>
        <option value="Pipe Repair">Pipe Repair</option>
        <option value="Drain Cleaning">Drain Cleaning</option>
        <option value="Water Heater Installation">Water Heater Installation</option>
      </select>
      <textarea
        placeholder="Additional Details"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="w-full p-2 mb-4 border rounded"
        rows="4"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {loading ? "Sending..." : "Book Now"}
      </button>
    </form>
  );
}