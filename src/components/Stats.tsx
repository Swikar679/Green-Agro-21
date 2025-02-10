import React from 'react';

const stats = [
  { number: '100+', label: 'DIFFERENT VARIETIES' },
  { number: '40', label: 'YEARS OF EXPERIENCE' },
  { number: '500', label: 'DEDICATED EMPLOYEES' },
  { number: '15', label: 'AVAILABLE IN COUNTRIES' }
];

const Stats = () => {
  return (
    <section className="py-16 bg-black bg-opacity-80 text-white relative">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Spices background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <div className="text-5xl font-bold text-[#FFC107]">{stat.number}</div>
              <div className="text-sm tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;