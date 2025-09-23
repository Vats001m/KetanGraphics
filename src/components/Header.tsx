import React from "react";
import Logo from "./Logo";
import { Page } from "../routes";

type HeaderProps = {
  currentPage: Page;
  setCurrentPage: (p: Page) => void;
};

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const pages: Page[] = ["home", "services", "gallery", "about", "contact"];

  return (
    <header className="bg-black shadow-2xl sticky top-0 z-50 border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => setCurrentPage("home")}
            role="button"
            aria-label="Go to home"
          >
            <Logo className="h-12 w-full" />
            {/* <div>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-red-500">KETAN</span>
                <span className="text-2xl font-bold text-white ml-2">
                  GRAPHICS
                </span>
              </div>
              <div className="text-xs text-gray-400 font-medium tracking-wider">
                ONE STOP PRINTING SOLUTION
              </div>
            </div> */}
          </div>

          <nav
            className="hidden md:flex space-x-8"
            aria-label="Main navigation"
          >
            {pages.map((p) => (
              <button
                key={p}
                onClick={() => setCurrentPage(p)}
                className={`font-medium transition-colors ${
                  currentPage === p
                    ? "text-red-400"
                    : "text-gray-400 hover:text-red-400"
                }`}
                aria-current={currentPage === p ? "page" : undefined}
              >
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </button>
            ))}
          </nav>

          <button
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors font-medium shadow-lg"
            type="button"
          >
            Get Quote
          </button>
        </div>
      </div>
    </header>
  );
}
