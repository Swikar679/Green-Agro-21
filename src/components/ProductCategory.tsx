import React from 'react';

interface ProductCategoryProps {
  title: string;
  description: string;
}

const ProductCategory = ({ title, description }: ProductCategoryProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
      <h2 className="text-3xl font-bold text-[#D32F2F] mb-4">{title}</h2>
      <p className="text-[#37474F] text-lg leading-relaxed">{description}</p>
    </div>
  );
};

export default ProductCategory;