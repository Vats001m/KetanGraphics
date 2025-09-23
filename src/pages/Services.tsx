// src/pages/Services.tsx
import React from "react";
import {
  Printer,
  FileText,
  Package,
  Palette,
  CheckCircle,
  Zap,
  Award,
  Shield,
} from "lucide-react";
// import { Page } from "../routes";



export default function Services(): JSX.Element {
  return (
    <section className="py-20 bg-gradient-to-br from-black to-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Our Printing Services</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional multi-colour offset printing with CMYK precision, vibrant color reproduction,
            and state-of-the-art equipment for all your printing needs.
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
                <h2 className="text-2xl font-bold text-white">Digital Printing</h2>
                <p className="text-gray-400">High-quality, fast turnaround</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              State-of-the-art digital printing technology for quick, high-quality results. Perfect for small to medium runs
              with exceptional color accuracy and detail.
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
                <h2 className="text-2xl font-bold text-white">Offset Printing</h2>
                <p className="text-gray-400">Commercial grade, large volumes</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Professional offset printing for large volume commercial projects. Superior quality with consistent color reproduction
              and cost-effective pricing.
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
                <h2 className="text-2xl font-bold text-white">Large Format Printing</h2>
                <p className="text-gray-400">Banners, signage & displays</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Eye-catching large format printing for advertising, events, and promotional displays. Weather-resistant materials and vibrant
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
                <h2 className="text-2xl font-bold text-white">Specialty Services</h2>
                <p className="text-gray-400">Custom solutions & finishing</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Specialized printing services with custom finishing options. Premium materials and unique techniques for distinctive results.
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Printing Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Fast Turnaround</h3>
              <p className="text-gray-400">Quick processing and delivery without compromising on quality standards.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Premium Quality</h3>
              <p className="text-gray-400">State-of-the-art equipment and premium materials for exceptional results.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-magenta-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-magenta-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Quality Guarantee</h3>
              <p className="text-gray-400">100% satisfaction guarantee with professional quality assurance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
