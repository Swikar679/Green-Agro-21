import React from 'react';

export default function About() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Green Agro Products Pvt. Ltd. was established in 2074/06/23 with a vision to bring the authentic taste of Nepal to the world. Located in Balaju-16, Kathmandu, we specialize in premium Nepali spices, traditional products, and authentic delicacies.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Company Details</h3>
              <ul className="space-y-2 text-gray-600">
                <li>VAT Number: 606875392</li>
                <li>Registration Date: 2074/06/23</li>
                <li>Location: Balaju-16, Kathmandu</li>
              </ul>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1589135233689-c449a69d4526?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Our facility"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}