export default function ServiceCard({ title, description, image, price }) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" onError={(e) => (e.target.src = "/fallback-image.jpg")} />
        <h3 className="text-xl font-bold mt-2">{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
        <p className="text-blue-500 font-semibold mt-2">${price}</p>
      </div>
    );
  }