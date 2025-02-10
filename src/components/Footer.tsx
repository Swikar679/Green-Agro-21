import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const CompanyInfo = () => (
  <div>
    <h3 className="text-xl font-bold mb-4">Green Agro Products Pvt. Ltd.</h3>
    <ul className="space-y-2 text-gray-300">
      <li className="flex items-start">
        <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
        <span>Balaju -16, Kathmandu</span>
      </li>
      <li className="flex items-center">
        <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
        <span>+977 1234567890</span>
      </li>
      <li className="flex items-center">
        <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
        <span>info@greenagro.com</span>
      </li>
    </ul>
  </div>
);

const LegalInfo = () => (
  <div>
    <h4 className="text-lg font-semibold mb-4">Legal Information</h4>
    <ul className="space-y-2 text-gray-300">
      <li>VAT No: 606875392</li>
      <li>Reg. Date: 2074/06/23</li>
    </ul>
  </div>
);

const QuickLinks = () => (
  <div>
    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
    <ul className="space-y-2">
      <li><a href="/" className="text-gray-300 hover:text-[#FFC107]">Home</a></li>
      <li><a href="/products" className="text-gray-300 hover:text-[#FFC107]">Products</a></li>
      <li><a href="/about" className="text-gray-300 hover:text-[#FFC107]">About Us</a></li>
      <li><a href="/contact" className="text-gray-300 hover:text-[#FFC107]">Contact</a></li>
    </ul>
  </div>
);

const SocialLinks = () => (
  <div>
    <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
    <div className="flex space-x-4">
      <a href="#" className="hover:text-[#FFC107]">
        <Facebook className="h-6 w-6" />
      </a>
      <a href="#" className="hover:text-[#FFC107]">
        <Instagram className="h-6 w-6" />
      </a>
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-[#37474F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CompanyInfo />
          <QuickLinks />
          <LegalInfo />
          <SocialLinks />
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Green Agro Products Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;