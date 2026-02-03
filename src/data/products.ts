export type Product = {
  id: number
  name: string
  price: number
  image: string
  description: string
  categories: string[]  // multiple groups allowed
}

export const CATEGORIES = [
  'Air Purifying',
  'Aromatic',
  'Medicinal'
] as const

export const products: Product[] = [
  {
    id: 1,
    name: 'Snake Plant',
    price: 499,
    image: 'https://images.unsplash.com/photo-1614594852503-b54d4f3d90b7?q=80&w=1200&auto=format&fit=crop',
    description: 'Hardy air purifier; thrives on neglect.',
    categories: ['Air Purifying']
  },
  {
    id: 2,
    name: 'Aloe Vera',
    price: 399,
    image: 'https://images.unsplash.com/photo-1601771382387-9f4c2e9c3f3f?q=80&w=1200&auto=format&fit=crop',
    description: 'Soothing gel; sunny windowsill lover.',
    categories: ['Medicinal', 'Air Purifying']
  },
  {
    id: 3,
    name: 'Lavender',
    price: 549,
    image: 'https://images.unsplash.com/photo-1469536526925-9b5547cd6a10?q=80&w=1200&auto=format&fit=crop',
    description: 'Calming fragrance; bright light.',
    categories: ['Aromatic']
  },
  {
    id: 4,
    name: 'Peace Lily',
    price: 599,
    image: 'https://images.unsplash.com/photo-1602992708529-c9fdb12905d4?q=80&w=1200&auto=format&fit=crop',
    description: 'Elegant blooms; low to medium light.',
    categories: ['Air Purifying']
  },
  {
    id: 5,
    name: 'Basil',
    price: 299,
    image: 'https://images.unsplash.com/photo-1458013479010-7d660c2e2d61?q=80&w=1200&auto=format&fit=crop',
    description: 'Kitchen favorite; great aroma.',
    categories: ['Aromatic', 'Medicinal']
  },
  {
    id: 6,
    name: 'Mint',
    price: 279,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1200&auto=format&fit=crop',
    description: 'Refreshing scent; spreads quickly.',
    categories: ['Aromatic', 'Medicinal']
  },
  {
    id: 7,
    name: 'Areca Palm',
    price: 899,
    image: 'https://images.unsplash.com/photo-1525171254930-643fc658b64e?q=80&w=1200&auto=format&fit=crop',
    description: 'Tropical feel; filters indoor air.',
    categories: ['Air Purifying']
  }
]