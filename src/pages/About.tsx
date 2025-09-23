// src/pages/About.tsx
import React from "react";
import { Award, Clock, Users } from "lucide-react";
import { Page } from "../routes";

type Props = {
  setCurrentPage?: (p: Page) => void;
};

export default function About({ setCurrentPage }: Props): JSX.Element {
  return (
    <section className="py-20 bg-gradient-to-br from-black to-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div>
            <h1 className="text-5xl font-bold text-white mb-6">
              About <span className="text-red-500">Ketan Graphics</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              At Ketan Graphics, we are more than just a printing company — we
              are your creative partner. With years of expertise in multi-colour
              offset and digital printing, we deliver professional quality,
              vibrant results, and exceptional customer service.
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
                    without compromising on quality.
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

            <div className="mt-8">
              <button
                onClick={() => setCurrentPage && setCurrentPage("services")}
                className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg"
              >
                Explore Our Services
              </button>
            </div>
          </div>

          {/* Quote Form */}
          <div className="bg-gray-950 p-8 rounded-xl shadow-2xl border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">
              Get Your Free Quote
            </h2>
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
                  Project Details
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-500"
                  placeholder="Tell us about your printing requirements..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg"
              >
                Request Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
