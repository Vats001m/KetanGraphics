// src/pages/Gallery.tsx
import React from "react";
import { Camera } from "lucide-react";
import { Page } from "../routes";

type Props = {
  setCurrentPage?: (p: Page) => void;
};

const galleryItems = [
  {
    image:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Digital Printing Press",
    description: "State-of-the-art digital equipment",
    color: "red",
  },
  {
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Business Cards Collection",
    description: "Premium quality business cards",
    color: "cyan",
  },
  {
    image:
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Offset Printing Machine",
    description: "Large volume commercial printing",
    color: "magenta",
  },
  {
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Brochures & Catalogs",
    description: "Marketing materials that impress",
    color: "yellow",
  },
  {
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Large Format Banner",
    description: "Eye-catching outdoor advertising",
    color: "red",
  },
  {
    image:
      "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Book & Magazine Printing",
    description: "Publishing quality printing",
    color: "cyan",
  },
  {
    image:
      "https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Our Facility",
    description: "Modern printing infrastructure",
    color: "magenta",
  },
  {
    image:
      "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Quality Control",
    description: "Ensuring perfect results",
    color: "yellow",
  },
  {
    image:
      "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Packaging Solutions",
    description: "Custom packaging designs",
    color: "red",
  },
];

export default function Gallery({ setCurrentPage }: Props): JSX.Element {
  return (
    <section className="py-20 bg-gradient-to-br from-black to-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Camera className="h-8 w-8 text-red-500 mr-3" />
            <h1 className="text-5xl font-bold text-white">Our Work Gallery</h1>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our portfolio of printing projects showcasing quality craftsmanship, vibrant colors, and professional finishing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setCurrentPage && setCurrentPage("contact")}
            className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg mr-4"
          >
            Request Custom Quote
          </button>
          <button
            onClick={() => setCurrentPage && setCurrentPage("services")}
            className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors shadow-lg"
          >
            View Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
