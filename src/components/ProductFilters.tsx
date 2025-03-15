import React from 'react';
import { Category, SortOption } from '../types';

interface ProductFiltersProps {
  selectedCategory: Category | 'all';
  setSelectedCategory: (category: Category | 'all') => void;
  selectedSort: SortOption;
  setSelectedSort: (sort: SortOption) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  maxPrice: number;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedSort,
  setSelectedSort,
  priceRange,
  setPriceRange,
  maxPrice,
}) => {
  const categories: (Category | 'all')[] = ['all', 'CPU', 'GPU', 'RAM', 'SSD', 'Keyboard', 'Mouse', 'Monitor'];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
      <div>
        <h3 className="font-semibold mb-2">Category</h3>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value as Category | 'all')}
          className="w-full p-2 border rounded-md"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category === 'all' ? 'All Categories' : category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Sort By</h3>
        <select
          value={selectedSort}
          onChange={(e) => setSelectedSort(e.target.value as SortOption)}
          className="w-full p-2 border rounded-md"
        >
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Price Range</h3>
        <div className="space-y-2">
          <input
            type="range"
            min={0}
            max={maxPrice}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>Rs{priceRange[0]}00</span>
            <span>Rs{priceRange[1]}00</span>
          </div>
        </div>
      </div>
    </div>
  );
};