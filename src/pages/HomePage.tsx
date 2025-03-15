import React, { useState, useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { ProductFilters } from '../components/ProductFilters';
import { products } from '../data/products';
import { Category, SortOption } from '../types';

export const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [selectedSort, setSelectedSort] = useState<SortOption>('price-asc');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);

  const maxPrice = Math.max(...products.map(p => p.price));

  const filteredProducts = useMemo(() => {
    return products
      .filter(product => 
        (selectedCategory === 'all' || product.category === selectedCategory) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
      )
      .sort((a, b) => {
        if (selectedSort === 'price-asc') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
  }, [selectedCategory, selectedSort, priceRange]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">TechParts Store</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <ProductFilters
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            maxPrice={maxPrice}
          />
        </div>
        
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};