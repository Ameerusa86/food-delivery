// lib/dummy-data.ts
export type Restaurant = {
  id: string;
  slug: string;
  name: string;
  description: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  imageUrl: string;
};

export const featuredRestaurants: Restaurant[] = [
  {
    id: "1",
    slug: "marios-pizza",
    name: "Mario's Pizza",
    description: "Classic New York–style slices and handcrafted pies.",
    cuisine: "Pizza",
    rating: 4.7,
    deliveryTime: "20-30",
    deliveryFee: 2.99,
    imageUrl:
      "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg",
  },
  {
    id: "2",
    slug: "spice-route",
    name: "Spice Route",
    description: "Modern Indian street food and tandoori specialties.",
    cuisine: "Indian",
    rating: 4.6,
    deliveryTime: "30-40",
    deliveryFee: 1.99,
    imageUrl:
      "https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg",
  },
  {
    id: "3",
    slug: "green-bowl",
    name: "Green Bowl",
    description: "Healthy bowls, salads, and wraps made fresh.",
    cuisine: "Healthy",
    rating: 4.8,
    deliveryTime: "15-25",
    deliveryFee: 0,
    imageUrl:
      "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg",
  },
];
