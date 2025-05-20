import { MapPin, Calendar, DollarSign } from "lucide-react";

interface ActivityProps {
  title: string;
  description: string;
  location: string;
  price: string;
  date: string;
  image: string;
}

export default function ActivityCard({ title, description, location, price, date, image }: ActivityProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <div className="flex items-center text-gray-500 text-sm">
          <MapPin size={16} className="mr-1" />
          {location}
        </div>
        <div className="flex items-center text-gray-500 text-sm mt-1">
          <Calendar size={16} className="mr-1" />
          {date}
        </div>
        <div className="flex items-center text-gray-500 text-sm mt-1">
          <DollarSign size={16} className="mr-1" />
          {price}
        </div>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700 transition">Book Now</button>
      </div>
    </div>
  );
}
