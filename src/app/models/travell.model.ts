// src/app/models/travel.model.ts

export interface Destination {
  id: number;
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  pricePerNight: number;
}

export interface Package extends Destination {
  price: number;
  itinerary: string[];
  duration: string;
}

export interface Booking {
  bookingId: string;
  destinationId: number;
  customerName: string;
  travelDate: Date;
  guests: number;
}

export interface Booking {
  id: number;
  userName: string;
  email: string;
  date: string;
  destinationName: string; // The name of the place booked
  totalPrice: number;
}