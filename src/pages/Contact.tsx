// src/pages/Contact.tsx
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
// import { Page } from "../routes";



export default function Contact(): JSX.Element {
  return (
    <section className="py-20 bg-gradient-to-br from-black to-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Contact <span className="text-red-500">Ketan Graphics</span>
          </h1>
          <p className="text-lg text-gray-400">
            Ready to discuss your project? Get in touch with our team today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Phone */}
          <div className="text-center bg-gray-950 p-8 rounded-xl border border-gray-900">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-red-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
            <p className="text-gray-300 text-lg font-mono">9377729955</p>
            <p className="text-sm text-gray-500">Mon–Sat 9AM–7PM</p>
          </div>

          {/* Email */}
          <div className="text-center bg-gray-950 p-8 rounded-xl border border-gray-900">
            <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
            <p className="text-gray-300">ketangraphics@gmail.com</p>
            <p className="text-sm text-gray-500">Response within 4 hours</p>
          </div>

          {/* Address */}
          <div className="text-center bg-gray-950 p-8 rounded-xl border border-gray-900">
            <div className="w-16 h-16 bg-magenta-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-magenta-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
            <p className="text-gray-300">
              Somnath Road, Opp. Aliporiya Society <br />
              Bilimora, Ta. Gandevi <br />
              Dist. Navsari, Gujarat
            </p>
            <p className="text-sm text-gray-500">Free parking available</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-gray-950 p-8 rounded-xl border border-gray-800 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Your Message
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-500"
                placeholder="Write your message here..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
