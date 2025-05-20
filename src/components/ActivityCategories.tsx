import React from "react";
import ActivityCard from "./ActivityCard";
import { Palette, Dumbbell, Music, Brain, Leaf, Heart } from "lucide-react";

const activities = [
  {
    title: "Arts & Creativity",
    description: "Painting, Dance, Theater, and more creative activities to inspire your child's imagination.",
    image: "https://images.unsplash.com/photo-1607457561901-e6ec3a6d16cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    icon: <Palette size={24} className="text-pink-500" />,
    link: "#"
  },
  {
    title: "Sports & Fitness",
    description: "Soccer, Gymnastics, Martial Arts, and other activities to keep your child active and healthy.",
    image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    icon: <Dumbbell size={24} className="text-blue-500" />,
    link: "#"
  },
  {
    title: "Music & Performance",
    description: "Piano, Singing, Drums, and other musical activities to develop your child's talents.",
    image: "https://images.unsplash.com/photo-1588731247530-4076fc99173e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    icon: <Music size={24} className="text-purple-500" />,
    link: "#"
  },
  {
    title: "Academics & STEM",
    description: "Math, Robotics, Coding, and other educational activities to boost your child's learning.",
    image: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    icon: <Brain size={24} className="text-orange-500" />,
    link: "#"
  },
  {
    title: "Nature & Adventure",
    description: "Camping, Gardening, Scouts, and other outdoor activities to connect your child with nature.",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    icon: <Leaf size={24} className="text-green-500" />,
    link: "#"
  },
  {
    title: "Special Needs & Personalized",
    description: "Tailored activities for children with special needs, ensuring inclusive learning experiences.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    icon: <Heart size={24} className="text-red-500" />,
    link: "#"
  }
];

const ActivityCategories: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Explore Activity Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <ActivityCard
              key={index}
              title={activity.title}
              description={activity.description}
              image={activity.image}
              icon={activity.icon}
              link={activity.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivityCategories;
