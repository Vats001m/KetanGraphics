import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  Camera,
  Instagram,
  Facebook,
  MessageCircle,
  Map,
} from "lucide-react";
// import { Page } from "../routes";

// type Props = {
//   setCurrentPage?: (p: Page) => void;
// };

export default function Home(): JSX.Element {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-black to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Your Complete
              <span className="text-red-500 block">Printing Solution</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Professional multi-colour offset printing services with vibrant colors and exceptional quality.
              From business cards to large format printing, we are your one-stop printing solution.
            </p>

            {/* Social Media Buttons */}
            <div className="flex gap-4 justify-center">
              <a
                href="https://instagram.com/ketangraphics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-110"
              >
                <Instagram className="h-6 w-6 text-white" />
              </a>

              <a
                href="https://facebook.com/ketangraphics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-110"
              >
                <Facebook className="h-6 w-6 text-white" />
              </a>

              <a
                href="https://wa.me/919377729955"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-green-500/25 hover:scale-110"
              >
                <MessageCircle className="h-6 w-6 text-white" />
              </a>

              <a
                href="https://maps.google.com/?q=Somnath+Road+Opp+Aliporiya+Society+Bilimora+Navsari"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-red-500/25 hover:scale-110"
              >
                <Map className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Printing Services</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Professional multi-colour offset printing with CMYK precision and vibrant color reproduction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl hover:shadow-2xl transition-shadow border-t-4 border-red-500 hover:bg-gray-800">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Digital Printing</h3>
              <p className="text-gray-400 mb-6">
                High-quality digital printing for business cards, flyers, brochures, and marketing materials.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="h-4 w-4 text-red-400 mr-2" /> Business Cards & Stationery
                </li>
                <li className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="h-4 w-4 text-red-400 mr-2" /> Brochures & Catalogs
                </li>
                <li className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="h-4 w-4 text-red-400 mr-2" /> Flyers & Leaflets
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl hover:shadow-2xl transition-shadow border-t-4 border-cyan-400 hover:bg-gray-800">
              <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-6">
                <Star className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Offset Printing</h3>
              <p className="text-gray-400 mb-6">
                Large volume commercial printing with superior quality and cost-effectiveness.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" /> Books & Magazines
                </li>
                <li className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" /> Newspapers & Journals
                </li>
                <li className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" /> Packaging Materials
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl hover:shadow-2xl transition-shadow border-t-4 border-magenta-500 hover:bg-gray-800">
              <div className="w-12 h-12 bg-magenta-500/20 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-magenta-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Large Format</h3>
              <p className="text-gray-400 mb-6">
                Banners, posters, signage, and display materials for events and advertising.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="h-4 w-4 text-magenta-400 mr-2" /> Vinyl Banners & Hoardings
                </li>
                <li className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="h-4 w-4 text-magenta-400 mr-2" /> Exhibition Displays
                </li>
                <li className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="h-4 w-4 text-magenta-400 mr-2" /> Vehicle Graphics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="gallery" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Camera className="h-8 w-8 text-red-500 mr-3" />
              <h2 className="text-4xl font-bold text-white">Our Work Gallery</h2>
            </div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Take a look at some of our recent printing projects and state-of-the-art facilities that make quality printing possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Digital Printing Press", description: "State-of-the-art digital equipment", color: "red" },
              { image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Business Cards Collection", description: "Premium quality business cards", color: "cyan" },
              { image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Offset Printing Machine", description: "Large volume commercial printing", color: "magenta" },
              { image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Brochures and Catalogs", description: "Marketing materials that impress", color: "yellow" },
              { image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Large Format Banner", description: "Eye-catching outdoor advertising", color: "red" },
              { image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Book and Magazine Printing", description: "Publishing quality printing", color: "cyan" },
              { image: "https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Printing Facility", description: "Modern printing infrastructure", color: "magenta" },
              { image: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Quality Control", description: "Ensuring perfect results", color: "yellow" },
              { image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Packaging Solutions", description: "Custom packaging designs", color: "red" },
            ].map((item, index) => (
              <div key={index} className={`group relative overflow-hidden rounded-xl shadow-2xl transition-all duration-300`}>
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
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
            <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg">
              View More Projects
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Ketan Graphics?</h2>
              <p className="text-lg text-gray-400 mb-8">
                Your one-stop printing solution with professional multi-colour offset printing services. We specialize in vibrant color reproduction and high-quality printing solutions for businesses and individuals across Navsari and surrounding areas.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Professional Quality</h3>
                    <p className="text-gray-400">Multi-colour offset printing with precise CMYK color matching and superior finish.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Quick Turnaround</h3>
                    <p className="text-gray-400">Efficient production processes ensuring timely delivery without quality compromise.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-magenta-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-magenta-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Complete Solutions</h3>
                    <p className="text-gray-400">From design to delivery, we provide comprehensive printing services under one roof.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Get Your Quote Today</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Project Requirements</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-500" placeholder="Describe your printing needs..." />
                </div>
                <button type="submit" className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg">Request Free Quote</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Contact Ketan Graphics</h2>
            <p className="text-lg text-gray-400">Ready to discuss your printing project? Get in touch with our experienced team today.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-950 p-8 rounded-xl border border-gray-900">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 text-lg font-mono">9377729955</p>
              <p className="text-sm text-gray-500">Mon-Sat 9AM-7PM</p>
            </div>

            <div className="text-center bg-gray-950 p-8 rounded-xl border border-gray-900">
              <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">ketangraphics@gmail.com</p>
              <p className="text-sm text-gray-500">Response within 4 hours</p>
            </div>

            <div className="text-center bg-gray-950 p-8 rounded-xl border border-gray-900">
              <div className="w-16 h-16 bg-magenta-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-magenta-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Our Shop</h3>
              <p className="text-gray-300">
                Somnath Road, Opp. Aliporiya Society
                <br />
                Bilimora, Ta. Gandevi
                <br />
                Dist. Navsari
              </p>
              <p className="text-sm text-gray-500">Free parking available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
