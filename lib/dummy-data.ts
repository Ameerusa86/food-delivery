// lib/dummy-data.ts

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price: number;
  isPopular?: boolean;
};

export type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

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

export type RestaurantWithMenu = Restaurant & {
  menu: MenuCategory[];
};

export const restaurants: RestaurantWithMenu[] = [
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
    menu: [
      {
        id: "starters",
        name: "Starters",
        items: [
          {
            id: "garlic-knots",
            name: "Garlic Knots",
            description: "Fresh-baked knots with garlic butter and parmesan.",
            price: 5.99,
            isPopular: true,
          },
          {
            id: "mozzarella-sticks",
            name: "Mozzarella Sticks",
            description: "Crispy fried mozzarella with marinara.",
            price: 6.99,
          },
        ],
      },
      {
        id: "pizzas",
        name: "Pizzas",
        items: [
          {
            id: "margherita",
            name: "Margherita",
            description: "Tomato, fresh mozzarella, basil, olive oil.",
            price: 14.5,
            isPopular: true,
          },
          {
            id: "pepperoni",
            name: "Pepperoni",
            description: "Classic pepperoni with mozzarella and tomato sauce.",
            price: 15.0,
          },
          {
            id: "veggie",
            name: "Veggie Supreme",
            description: "Peppers, onions, mushrooms, olives, and tomatoes.",
            price: 16.0,
          },
        ],
      },
    ],
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
    menu: [
      {
        id: "small-plates",
        name: "Small Plates",
        items: [
          {
            id: "samosa",
            name: "Vegetable Samosas",
            description:
              "Crispy pastries stuffed with spiced potatoes and peas.",
            price: 5.5,
            isPopular: true,
          },
          {
            id: "pakora",
            name: "Onion Pakora",
            description: "Onion fritters with tamarind chutney.",
            price: 5.0,
          },
        ],
      },
      {
        id: "mains",
        name: "Mains",
        items: [
          {
            id: "butter-chicken",
            name: "Butter Chicken",
            description: "Creamy tomato curry with tender chicken.",
            price: 17.0,
          },
          {
            id: "chana-masala",
            name: "Chana Masala",
            description: "Chickpeas in spiced tomato gravy.",
            price: 14.0,
            isPopular: true,
          },
        ],
      },
    ],
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
    menu: [
      {
        id: "bowls",
        name: "Signature Bowls",
        items: [
          {
            id: "mediterranean-bowl",
            name: "Mediterranean Bowl",
            description:
              "Greens, quinoa, hummus, cucumbers, tomatoes, feta, olives.",
            price: 13.5,
            isPopular: true,
          },
          {
            id: "protein-bowl",
            name: "Protein Power Bowl",
            description:
              "Brown rice, grilled chicken, black beans, avocado, salsa.",
            price: 14.5,
          },
        ],
      },
      {
        id: "salads",
        name: "Salads",
        items: [
          {
            id: "classic-caesar",
            name: "Classic Caesar",
            description: "Romaine, parmesan, croutons, caesar dressing.",
            price: 11.0,
          },
        ],
      },
    ],
  },
];

export const featuredRestaurants: Restaurant[] = restaurants.slice(0, 3);
