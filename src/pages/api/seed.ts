import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../utils/db';
import User from '../../models/User';
import Restaurant from '../../models/Restaurant';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect();

    // Clear existing documents (NOT for production usage!)
    await User.deleteMany({});
    await Restaurant.deleteMany({});

    // Create users
    await User.insertMany([
      {
        username: 'nick',
        password: 'nick@123',
        role: 'ADMIN',
        country: 'Global', // Or empty, up to you
      },
      {
        username: 'marvel',
        password: 'marvel@123',
        role: 'MANAGER',
        country: 'India',
      },
      {
        username: 'america',
        password: 'america@123',
        role: 'MANAGER',
        country: 'America',
      },
      {
        username: 'thanos',
        password: 'thanos@123',
        role: 'MEMBER',
        country: 'India',
      },
      {
        username: 'thor',
        password: 'thor@123',
        role: 'MEMBER',
        country: 'India',
      },
      {
        username: 'travis',
        password: 'travis@123',
        role: 'MEMBER',
        country: 'America',
      },
    ]);

    // Create restaurants
    await Restaurant.insertMany([
      {
        name: 'Indian Spice House',
        country: 'India',
        menu: [
          { itemName: 'Butter Chicken', price: 200 },
          { itemName: 'Paneer Tikka', price: 150 },
        ],
      },
      {
        name: 'Mumbai Express',
        country: 'India',
        menu: [
          { itemName: 'Vada Pav', price: 50 },
          { itemName: 'Pav Bhaji', price: 100 },
        ],
      },
      {
        name: 'American Diner',
        country: 'America',
        menu: [
          { itemName: 'Cheeseburger', price: 120 },
          { itemName: 'Fries', price: 60 },
        ],
      },
      {
        name: 'NY Pizza',
        country: 'America',
        menu: [
          { itemName: 'Pepperoni Pizza', price: 200 },
          { itemName: 'Margherita Pizza', price: 180 },
        ],
      },
    ]);

    return res.status(200).json({ message: 'Database seeded successfully!' });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
}
