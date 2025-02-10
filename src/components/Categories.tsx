import React from 'react';
import ProductCategory from './ProductCategory';

const categories = [
  {
    title: 'VEGETABLE & FRUIT PRODUCTS',
    description: 'Relish our range of mouth watering pickles, lip smacking Fruit Jam, Jelly, tomato ketchup, and chili sauce. Green Agro products prepared from the best quality vegetables and fresh fruit pulp are the perfect balance of taste and nutrition.'
  },
  {
    title: 'DRY FRUITS & NUTS',
    description: 'Green Agro sources the best quality dry fruit and nuts from the origin and process in impeccable hygiene environment packs them into attractive tamper proof jar to bring a variety of crunchy and rich tastes leaving you asking for more.'
  },
  {
    title: 'SPICES & SEASONINGS',
    description: 'Experience the authentic taste of Nepal with our premium spices and seasonings. Each blend is carefully crafted to bring out the true flavors of traditional cuisine, ensuring your dishes are rich in taste and aroma.'
  },
  {
    title: 'TRADITIONAL SNACKS',
    description: 'Discover our collection of traditional Nepali snacks, made with authentic recipes and quality ingredients. Perfect for any time of day, our snacks offer a genuine taste of Nepal&apos;s rich culinary heritage.'
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#37474F] mb-12">
          Product Categories
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {categories.map((category) => (
            <ProductCategory
              key={category.title}
              title={category.title}
              description={category.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;