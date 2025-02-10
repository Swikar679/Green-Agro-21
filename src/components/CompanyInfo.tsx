import React from 'react';

const CompanyInfo = () => {
  return (
    <section className="bg-[#D32F2F] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
            <div className="w-20 h-1 bg-[#FFC107] mb-6"></div>
            <p className="text-xl leading-relaxed">
              Our vision is not only to grow our business ethically but also to consistently work towards satisfying our valued customers, whether it is through our products or our services. Maintaining brand trust and loyalty is our prime objective as we continue to deliver only the best.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <div className="w-20 h-1 bg-[#FFC107] mb-6"></div>
            <p className="text-xl leading-relaxed">
              Community, sustainability and progress go hand-in-hand. We understand the importance of financial independence from the roots. By providing employment opportunities to the complete value chain linked with us and subsequently citizens from all walks of life, our mission is to empower the communities who work with us, paving our way to becoming market leaders in Nepal. We are committed to adding our bit in the building process of a brighter future for the communities we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;