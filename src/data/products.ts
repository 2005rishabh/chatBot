import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'AMD Ryzen 9 5950X',
    category: 'CPU',
    brand: 'AMD',
    price: 599.99,
    description: 'High-performance CPU with 16 cores and 32 threads',
    specifications: {
      'Cores': '16',
      'Threads': '32',
      'Base Clock': '3.4 GHz',
      'Boost Clock': '4.9 GHz',
      'TDP': '105W'
    },
    imageUrl: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    name: 'NVIDIA RTX 4080',
    category: 'GPU',
    brand: 'NVIDIA',
    price: 1199.99,
    description: 'High-end graphics card for gaming and content creation',
    specifications: {
      'VRAM': '16GB GDDR6X',
      'Boost Clock': '2.51 GHz',
      'CUDA Cores': '9728',
      'Power Consumption': '320W'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    name: 'Corsair Vengeance RGB Pro',
    category: 'RAM',
    brand: 'Corsair',
    price: 189.99,
    description: '32GB (2x16GB) DDR4-3600 RAM with RGB lighting',
    specifications: {
      'Capacity': '32GB',
      'Speed': '3600MHz',
      'Latency': 'CL18',
      'RGB': 'Yes'
    },
    imageUrl: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    name: 'Samsung 970 EVO Plus',
    category: 'SSD',
    brand: 'Samsung',
    price: 129.99,
    description: '1TB NVMe M.2 SSD for high-speed storage',
    specifications: {
      'Capacity': '1TB',
      'Read Speed': '3500MB/s',
      'Write Speed': '3300MB/s',
      'Form Factor': 'M.2'
    },
    imageUrl: 'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    name: 'Intel Core i9-12900K',
    category: 'CPU',
    brand: 'Intel',
    price: 629.99,
    description: '12th Gen processor with 16 cores and 24 threads',
    specifications: {
      'Cores': '16',
      'Threads': '24',
      'Base Clock': '3.2 GHz',
      'Boost Clock': '5.2 GHz',
      'TDP': '125W'
    },
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    name: 'ASUS ROG Strix Z690-E',
    category: 'Motherboard',
    brand: 'ASUS',
    price: 399.99,
    description: 'Gaming motherboard with DDR5 support',
    specifications: {
      'Chipset': 'Z690',
      'Form Factor': 'ATX',
      'Memory Support': 'DDR5',
      'WiFi': 'Yes'
    },
    imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSpMzY7GOcH1qDJy3k6-x47pLYwOJJ_i7X_3dVy4tEIzRMJ9jFQc_aHNfX6v51-sGgeZFvgyBo4pEzsNBRZx30inR2w_68o6L1aYU62tbE&usqp=CAE'
  },
  {
    id: '7',
    name: 'EVGA SuperNOVA 850 G5',
    category: 'Power Supply',
    brand: 'EVGA',
    price: 149.99,
    description: '850W Gold-certified modular power supply',
    specifications: {
      'Wattage': '850W',
      'Efficiency': '80+ Gold',
      'Modular': 'Yes'
    },
    imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSFrQSljxzfqTLukR6ZRTELju7H1MRYjUtk7Rja7vmAVTev3dnsCRLrV-3DYNtdl43OqROfb_J1XoTHjU8wiWhrLomime9gkECNGJN_bybD_zXyYRo8OeL_&usqp=CAE'
  },
  {
    id: '8',
    name: 'Crucial P5 Plus',
    category: 'SSD',
    brand: 'Crucial',
    price: 149.99,
    description: '1TB NVMe PCIe 4.0 SSD for high performance',
    specifications: {
      'Capacity': '1TB',
      'Read Speed': '6600MB/s',
      'Write Speed': '5000MB/s',
      'Form Factor': 'M.2'
    },
    imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQLWPZnQw2iQKCPjUWXWuc4vaShUDPAoTLx4MV22xkDXGgOQbB5x8GEOTHNNnaKzyke9P1yLwVJWubciyZy_GsJuglu_JP6U4h5gjJpD0FMWzM5W0nNhcVz&usqp=CAE'
  },
  {
    id: '9',
    name: 'Gigabyte AORUS Master',
    category: 'Motherboard',
    brand: 'Gigabyte',
    price: 499.99,
    description: 'Z790 motherboard with advanced thermal design',
    specifications: {
      'Chipset': 'Z790',
      'Form Factor': 'ATX',
      'Memory Support': 'DDR5',
      'WiFi': 'Yes'
    },
    imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTpZ4SUeNOOAT8JJvvg_6jYyubz6jTe0ZJsXW2yK2LdEn63duO6PI9StjFMyqRxcqlErXwc096mvAzxMVqOlJHnEn5tuioIyGsCd3y-iY_j2iFTxFWeX_Yvhw&usqp=CAE'
  },
  {
    id: '10',
    name: 'Kingston Fury Beast',
    category: 'RAM',
    brand: 'Kingston',
    price: 159.99,
    description: '32GB (2x16GB) DDR4-3200 RAM for gaming',
    specifications: {
      'Capacity': '32GB',
      'Speed': '3200MHz',
      'Latency': 'CL16',
      'RGB': 'No'
    },
    imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRA-cY3XBIlJOVKAjY2s5Wl1bbxA2dWPpF8nJQFEmBhi8_6MM4lJ3XMGACIQZkZLAC237TfwFx0ao2CN_MeBNRmboB6T4ARG4AEfyN1wGFp&usqp=CAE'
  }
];
