import React, { useState } from "react";
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
  Printer,
  Package,
  FileText,
  Palette,
  Zap,
  Shield,
} from "lucide-react";
import Logo from "./components/Logo";

type Page = "home" | "services" | "gallery" | "about" | "contact";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const renderHeader = () => (
    <header className="bg-black shadow-2xl sticky top-0 z-50 border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => setCurrentPage("home")}
          >
            <Logo className="h-12 w-12" />
            <div>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-red-500">KETAN</span>
                <span className="text-2xl font-bold text-white ml-2">
                  GRAPHICS
                </span>
              </div>
              <div className="text-xs text-gray-400 font-medium tracking-wider">
                ONE STOP PRINTING SOLUTION
              </div>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => setCurrentPage("home")}
              className={`font-medium transition-colors ${
                currentPage === "home"
                  ? "text-red-400"
                  : "text-gray-400 hover:text-red-400"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage("services")}
              className={`font-medium transition-colors ${
                currentPage === "services"
                  ? "text-red-400"
                  : "text-gray-400 hover:text-red-400"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => setCurrentPage("gallery")}
              className={`font-medium transition-colors ${
                currentPage === "gallery"
                  ? "text-red-400"
                  : "text-gray-400 hover:text-red-400"
              }`}
            >
              Gallery
            </button>
            <button
              onClick={() => setCurrentPage("about")}
              className={`font-medium transition-colors ${
                currentPage === "about"
                  ? "text-red-400"
                  : "text-gray-400 hover:text-red-400"
              }`}
            >
              About
            </button>
            <button
              onClick={() => setCurrentPage("contact")}
              className={`font-medium transition-colors ${
                currentPage === "contact"
                  ? "text-red-400"
                  : "text-gray-400 hover:text-red-400"
              }`}
            >
              Contact
            </button>
          </nav>
          <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors font-medium shadow-lg">
            Get Quote
          </button>
        </div>
      </div>
    </header>
  );

  const renderFooter = () => (
    <footer className="bg-black text-white py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Logo className="h-10 w-10" />
              <div>
                <div className="flex items-center">
                  <span className="text-xl font-bold text-red-500">KETAN</span>
                  <span className="text-xl font-bold text-white ml-2">
                    GRAPHICS
                  </span>
                </div>
                <div className="text-xs text-gray-500 font-medium tracking-wider">
                  ONE STOP PRINTING SOLUTION
                </div>
              </div>
            </div>
            <p className="text-gray-500">
              Your complete printing solution with professional multi-colour
              offset printing services and vibrant color reproduction.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Our Services
            </h4>
            <ul className="space-y-2 text-gray-500">
              <li>Digital Printing</li>
              <li>Offset Printing</li>
              <li>Large Format Printing</li>
              <li>Business Cards</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Specialties
            </h4>
            <ul className="space-y-2 text-gray-500">
              <li>Multi Colour Printing</li>
              <li>CMYK Color Matching</li>
              <li>Commercial Printing</li>
              <li>Custom Solutions</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Contact Info
            </h4>
            <ul className="space-y-2 text-gray-500">
              <li className="font-mono">9377729955</li>
              <li>ketangraphics@gmail.com</li>
              <li>Somnath Road, Bilimora</li>
              <li>Dist. Navsari, Gujarat</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 mt-8 pt-8 text-center text-gray-500">
          <p>
            &copy; 2024 Ketan Graphics. All rights reserved. | One Stop Printing
            Solution
          </p>
        </div>
      </div>
    </footer>
  );

  const renderHomePage = () => (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-black to-gray-900 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Your Complete
              <span className="text-red-500 block">Printing Solution</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Professional multi-colour offset printing services with vibrant
              colors and exceptional quality. From business cards to large
              format printing, we are your one-stop printing solution.
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Printing Services
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Professional multi-colour offset printing with CMYK precision and
              vibrant color reproduction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl hover:shadow-2xl transition-shadow border-t-4 border-red-500 hover:bg-gray-800">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6">
                {/* <Logo className="h-6 w-6" /> */}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Digital Printing
              </h3>
              <p className="text-gray-400 mb-6">
                High-quality digital printing for business cards, flyers,
                brochures, and marketing materials.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="h-4 w-4 text-red-400 mr-2" />
                  Business Cards & Stationery
                </li>
                <li className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="h-4 w-4 text-red-400 mr-2" />
                  Brochures & Catalogs
                </li>
                <li className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="h-4 w-4 text-red-400 mr-2" />
                  Flyers & Leaflets
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl hover:shadow-2xl transition-shadow border-t-4 border-cyan-400 hover:bg-gray-800">
              <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-6">
                <Star className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Offset Printing
              </h3>
              <p className="text-gray-400 mb-6">
                Large volume commercial printing with superior quality and
                cost-effectiveness.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" />
                  Books & Magazines
                </li>
                <li className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" />
                  Newspapers & Journals
                </li>
                <li className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" />
                  Packaging Materials
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl hover:shadow-2xl transition-shadow border-t-4 border-magenta-500 hover:bg-gray-800">
              <div className="w-12 h-12 bg-magenta-500/20 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-magenta-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Large Format
              </h3>
              <p className="text-gray-400 mb-6">
                Banners, posters, signage, and display materials for events and
                advertising.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="h-4 w-4 text-magenta-400 mr-2" />
                  Vinyl Banners & Hoardings
                </li>
                <li className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="h-4 w-4 text-magenta-400 mr-2" />
                  Exhibition Displays
                </li>
                <li className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="h-4 w-4 text-magenta-400 mr-2" />
                  Vehicle Graphics
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
              <h2 className="text-4xl font-bold text-white">
                Our Work Gallery
              </h2>
            </div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Take a look at some of our recent printing projects and
              state-of-the-art facilities that make quality printing possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery Item 1 */}
            <div className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-red-500/20 transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Digital Printing Press"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">
                    Digital Printing Press
                  </h3>
                  <p className="text-sm text-gray-300">
                    State-of-the-art digital equipment
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Business Cards Collection"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Business Cards</h3>
                  <p className="text-sm text-gray-300">
                    Premium quality business cards
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-magenta-500/20 transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Offset Printing Machine"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Offset Printing</h3>
                  <p className="text-sm text-gray-300">
                    Large volume commercial printing
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery Item 4 */}
            <div className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Brochures and Catalogs"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">
                    Brochures & Catalogs
                  </h3>
                  <p className="text-sm text-gray-300">
                    Marketing materials that impress
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery Item 5 */}
            <div className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-red-500/20 transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Large Format Banner"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">
                    Large Format Banners
                  </h3>
                  <p className="text-sm text-gray-300">
                    Eye-catching outdoor advertising
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery Item 6 */}
            <div className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Book and Magazine Printing"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Books & Magazines</h3>
                  <p className="text-sm text-gray-300">
                    Publishing quality printing
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery Item 7 */}
            <div className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-magenta-500/20 transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Printing Facility"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Our Facility</h3>
                  <p className="text-sm text-gray-300">
                    Modern printing infrastructure
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery Item 8 */}
            <div className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Quality Control"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Quality Control</h3>
                  <p className="text-sm text-gray-300">
                    Ensuring perfect results
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery Item 9 */}
            <div className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-red-500/20 transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Packaging Solutions"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Packaging Solutions</h3>
                  <p className="text-sm text-gray-300">
                    Custom packaging designs
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg">
              View More Projects
            </button>
          </div>
        </div>
      </section>

      {/* About Section
      <section id="about" className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Ketan Graphics?
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Your one-stop printing solution with professional multi-colour
                offset printing services. We specialize in vibrant color
                reproduction and high-quality printing solutions for businesses
                and individuals across Navsari and surrounding areas.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Professional Quality
                    </h3>
                    <p className="text-gray-400">
                      Multi-colour offset printing with precise CMYK color
                      matching and superior finish.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Quick Turnaround
                    </h3>
                    <p className="text-gray-400">
                      Efficient production processes ensuring timely delivery
                      without quality compromise.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-magenta-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-magenta-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Complete Solutions
                    </h3>
                    <p className="text-gray-400">
                      From design to delivery, we provide comprehensive printing
                      services under one roof.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">
                Get Your Quote Today
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Project Requirements
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-500"
                    placeholder="Describe your printing needs..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg"
                >
                  Request Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Contact Ketan Graphics
            </h2>
            <p className="text-lg text-gray-400">
              Ready to discuss your printing project? Get in touch with our
              experienced team today.
            </p>
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
              <h3 className="text-xl font-semibold text-white mb-2">
                Email Us
              </h3>
              <p className="text-gray-300">ketangraphics@gmail.com</p>
              <p className="text-sm text-gray-500">Response within 4 hours</p>
            </div>

            <div className="text-center bg-gray-950 p-8 rounded-xl border border-gray-900">
              <div className="w-16 h-16 bg-magenta-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-magenta-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Visit Our Shop
              </h3>
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

      {/* Footer */}
      {/* <footer className="bg-black text-white py-12 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                
                <div>
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-red-500">
                      KETAN
                    </span>
                    <span className="text-xl font-bold text-white ml-2">
                      GRAPHICS
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 font-medium tracking-wider">
                    ONE STOP PRINTING SOLUTION
                  </div>
                </div>
              </div>
              <p className="text-gray-500">
                Your complete printing solution with professional multi-colour
                offset printing services and vibrant color reproduction.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Our Services
              </h4>
              <ul className="space-y-2 text-gray-500">
                <li>Digital Printing</li>
                <li>Offset Printing</li>
                <li>Large Format Printing</li>
                <li>Business Cards</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Specialties
              </h4>
              <ul className="space-y-2 text-gray-500">
                <li>Multi Colour Printing</li>
                <li>CMYK Color Matching</li>
                <li>Commercial Printing</li>
                <li>Custom Solutions</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Contact Info
              </h4>
              <ul className="space-y-2 text-gray-500">
                <li className="font-mono">9377729955</li>
                <li>ketangraphics@gmail.com</li>
                <li>Somnath Road, Bilimora</li>
                <li>Dist. Navsari, Gujarat</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-900 mt-8 pt-8 text-center text-gray-500">
            <p>
              &copy; 2024 Ketan Graphics. All rights reserved. | One Stop
              Printing Solution
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  );

  const renderServicesPage = () => (
    <section className="py-20 bg-gradient-to-br from-black to-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Printing Services
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional multi-colour offset printing with CMYK precision,
            vibrant color reproduction, and state-of-the-art equipment for all
            your printing needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Digital Printing */}
          <div className="bg-gray-950 p-8 rounded-xl border border-gray-800 hover:border-red-500/50 transition-colors">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mr-4">
                <Printer className="h-8 w-8 text-red-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Digital Printing
                </h2>
                <p className="text-gray-400">High-quality, fast turnaround</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              State-of-the-art digital printing technology for quick,
              high-quality results. Perfect for small to medium runs with
              exceptional color accuracy and detail.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-red-400 mr-3" />
                  Business Cards
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-red-400 mr-3" />
                  Letterheads & Stationery
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-red-400 mr-3" />
                  Brochures & Flyers
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-red-400 mr-3" />
                  Postcards & Invitations
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-red-400 mr-3" />
                  Certificates & Awards
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-red-400 mr-3" />
                  Photo Printing
                </div>
              </div>
            </div>
          </div>

          {/* Offset Printing */}
          <div className="bg-gray-950 p-8 rounded-xl border border-gray-800 hover:border-cyan-400/50 transition-colors">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-cyan-400/20 rounded-xl flex items-center justify-center mr-4">
                <FileText className="h-8 w-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Offset Printing
                </h2>
                <p className="text-gray-400">Commercial grade, large volumes</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Professional offset printing for large volume commercial projects.
              Superior quality with consistent color reproduction and
              cost-effective pricing.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-cyan-400 mr-3" />
                  Books & Magazines
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-cyan-400 mr-3" />
                  Newspapers & Journals
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-cyan-400 mr-3" />
                  Catalogs & Directories
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-cyan-400 mr-3" />
                  Annual Reports
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-cyan-400 mr-3" />
                  Packaging Materials
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-cyan-400 mr-3" />
                  Marketing Collateral
                </div>
              </div>
            </div>
          </div>

          {/* Large Format */}
          <div className="bg-gray-950 p-8 rounded-xl border border-gray-800 hover:border-magenta-500/50 transition-colors">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-magenta-500/20 rounded-xl flex items-center justify-center mr-4">
                <Package className="h-8 w-8 text-magenta-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Large Format Printing
                </h2>
                <p className="text-gray-400">Banners, signage & displays</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Eye-catching large format printing for advertising, events, and
              promotional displays. Weather-resistant materials and vibrant
              colors that make an impact.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-magenta-400 mr-3" />
                  Vinyl Banners
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-magenta-400 mr-3" />
                  Hoardings & Billboards
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-magenta-400 mr-3" />
                  Exhibition Displays
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-magenta-400 mr-3" />
                  Vehicle Graphics
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-magenta-400 mr-3" />
                  Wall Graphics
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-magenta-400 mr-3" />
                  Event Signage
                </div>
              </div>
            </div>
          </div>

          {/* Specialty Services */}
          <div className="bg-gray-950 p-8 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-colors">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mr-4">
                <Palette className="h-8 w-8 text-yellow-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Specialty Services
                </h2>
                <p className="text-gray-400">Custom solutions & finishing</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Specialized printing services with custom finishing options.
              Premium materials and unique techniques for distinctive results.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-yellow-400 mr-3" />
                  Embossing & Debossing
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-yellow-400 mr-3" />
                  Foil Stamping
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-yellow-400 mr-3" />
                  Die Cutting
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-yellow-400 mr-3" />
                  Lamination
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-yellow-400 mr-3" />
                  Binding Services
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-yellow-400 mr-3" />
                  Custom Packaging
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Our Services */}
        <div className="bg-gray-950 p-8 rounded-xl border border-gray-800">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Why Choose Our Printing Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Fast Turnaround
              </h3>
              <p className="text-gray-400">
                Quick processing and delivery without compromising on quality
                standards.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Premium Quality
              </h3>
              <p className="text-gray-400">
                State-of-the-art equipment and premium materials for exceptional
                results.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-magenta-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-magenta-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Quality Guarantee
              </h3>
              <p className="text-gray-400">
                100% satisfaction guarantee with professional quality assurance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderGalleryPage = () => (
    <section className="py-20 bg-gradient-to-br from-black to-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Camera className="h-8 w-8 text-red-500 mr-3" />
            <h1 className="text-5xl font-bold text-white">Our Work Gallery</h1>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our portfolio of printing projects showcasing quality
            craftsmanship, vibrant colors, and professional finishing across
            various printing services.
          </p>
        </div>

        {/* Gallery Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-red-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors">
            All Projects
          </button>
          <button className="bg-gray-800 text-gray-300 px-6 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors">
            Digital Printing
          </button>
          <button className="bg-gray-800 text-gray-300 px-6 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors">
            Offset Printing
          </button>
          <button className="bg-gray-800 text-gray-300 px-6 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors">
            Large Format
          </button>
          <button className="bg-gray-800 text-gray-300 px-6 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors">
            Specialty Work
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Gallery Items */}
          {[
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
              title: "Brochures and Catalogs",
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
              title: "Book and Magazine Printing",
              description: "Publishing quality printing",
              color: "cyan",
            },
            {
              image:
                "https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=600",
              title: "Our Printing Facility",
              description: "Modern printing infrastructure",
              color: "magenta",
            },
            {
              image:
                "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=600",
              title: "Quality Control Process",
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
            {
              image:
                "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=600",
              title: "Wedding Invitations",
              description: "Elegant invitation printing",
              color: "cyan",
            },
            {
              image:
                "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
              title: "Corporate Stationery",
              description: "Professional business materials",
              color: "magenta",
            },
            {
              image:
                "https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=600",
              title: "Exhibition Displays",
              description: "Trade show and event graphics",
              color: "yellow",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-${item.color}-500/20 transition-all duration-300`}
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
          <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg mr-4">
            Load More Projects
          </button>
          <button
            onClick={() => setCurrentPage("contact")}
            className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors shadow-lg"
          >
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );

  const renderAboutPage = () => (
    <section className="py-20 bg-gradient-to-br from-black to-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            About Ketan Graphics
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Your trusted partner for professional printing solutions with years
            of experience in delivering exceptional quality and service to
            businesses across Navsari and beyond.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-950 p-8 rounded-xl border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-gray-300 mb-6">
              Established with a vision to provide comprehensive printing
              solutions, Ketan Graphics has grown to become a trusted name in
              the printing industry. We specialize in multi-colour offset
              printing with state-of-the-art equipment and a commitment to
              excellence.
            </p>
            <p className="text-gray-300 mb-6">
              Our journey began with a simple mission: to deliver high-quality
              printing services that exceed customer expectations. Today, we
              serve businesses of all sizes, from small startups to large
              corporations, providing them with professional printing solutions
              that help their brands shine.
            </p>
            <p className="text-gray-300">
              Located in the heart of Bilimora, Navsari, we combine traditional
              printing expertise with modern technology to offer a complete
              range of printing services under one roof.
            </p>
          </div>

          <div className="bg-gray-950 p-8 rounded-xl border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Quality Excellence
                  </h3>
                  <p className="text-gray-400">
                    Delivering superior printing quality with precise color
                    matching and professional finishing.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Customer Satisfaction
                  </h3>
                  <p className="text-gray-400">
                    Building lasting relationships through exceptional service
                    and reliable delivery.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-magenta-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="h-5 w-5 text-magenta-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Innovation
                  </h3>
                  <p className="text-gray-400">
                    Embracing latest printing technologies and techniques for
                    better results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="bg-gray-950 p-8 rounded-xl border border-gray-800 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Printer className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Digital Printing
              </h3>
              <p className="text-gray-400 text-sm">
                High-quality digital printing for quick turnaround projects.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Offset Printing
              </h3>
              <p className="text-gray-400 text-sm">
                Commercial grade printing for large volume projects.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-magenta-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-magenta-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Large Format
              </h3>
              <p className="text-gray-400 text-sm">
                Banners, signage, and display materials for events.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Specialty Services
              </h3>
              <p className="text-gray-400 text-sm">
                Custom finishing and specialty printing solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-950 p-8 rounded-xl border border-gray-800">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Why Choose Ketan Graphics?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-10 w-10 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Quick Turnaround
              </h3>
              <p className="text-gray-400">
                Fast processing and delivery without compromising quality. We
                understand the importance of meeting deadlines.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Professional Quality
              </h3>
              <p className="text-gray-400">
                Multi-colour offset printing with precise CMYK color matching
                and superior finish using premium materials.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-magenta-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-magenta-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Complete Solutions
              </h3>
              <p className="text-gray-400">
                From design consultation to final delivery, we provide
                comprehensive printing services under one roof.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderContactPage = () => (
    <section className="py-20 bg-gradient-to-br from-black to-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Contact Ketan Graphics
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to discuss your printing project? Get in touch with our
            experienced team today. We're here to help bring your ideas to life
            with professional printing solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-gray-950 p-8 rounded-xl border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-6">
              Get Your Quote Today
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-500"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-500"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-500"
                  placeholder="+91 9377729955"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Service Required
                </label>
                <select className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white">
                  <option value="">Select a service</option>
                  <option value="digital">Digital Printing</option>
                  <option value="offset">Offset Printing</option>
                  <option value="large-format">Large Format Printing</option>
                  <option value="specialty">Specialty Services</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-500"
                  placeholder="Describe your printing requirements, quantity, timeline, and any specific needs..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg"
              >
                Request Free Quote
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-950 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Call Us
                    </h4>
                    <p className="text-gray-300 text-lg font-mono">
                      9377729955
                    </p>
                    <p className="text-sm text-gray-500">
                      Mon-Sat 9:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Email Us
                    </h4>
                    <p className="text-gray-300">ketangraphics@gmail.com</p>
                    <p className="text-sm text-gray-500">
                      Response within 4 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-magenta-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-magenta-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Visit Our Shop
                    </h4>
                    <p className="text-gray-300">
                      Somnath Road, Opp. Aliporiya Society
                      <br />
                      Bilimora, Ta. Gandevi
                      <br />
                      Dist. Navsari, Gujarat
                    </p>
                    <p className="text-sm text-gray-500">
                      Free parking available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gray-950 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">
                Business Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-white font-medium">
                    9:00 AM - 7:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-white font-medium">
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-red-400 font-medium">Closed</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gray-950 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">
                Quick Connect
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://wa.me/919377729955"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors text-center"
                >
                  WhatsApp
                </a>
                <a
                  href="tel:9377729955"
                  className="flex-1 bg-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors text-center"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return renderHomePage();
      case "services":
        return renderServicesPage();
      case "gallery":
        return renderGalleryPage();
      case "about":
        return renderAboutPage();
      case "contact":
        return renderContactPage();
      default:
        return renderHomePage();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {renderHeader()}
      {renderCurrentPage()}
      {renderFooter()}
    </div>
  );
}

export default App;
