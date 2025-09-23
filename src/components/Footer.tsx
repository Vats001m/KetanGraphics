import React from "react";
import Logo from "./Logo";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Logo className="h-12 w-35" />
              {/* <div>
                <div className="flex items-center">
                  <span className="text-xl font-bold text-red-500">KETAN</span>
                  <span className="text-xl font-bold text-white ml-2">
                    GRAPHICS
                  </span>
                </div>
                <div className="text-xs text-gray-500 font-medium tracking-wider">
                  ONE STOP PRINTING SOLUTION
                </div>
              </div> */}
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
}
