import mongoose, { Schema, model, models, Types } from 'mongoose';

const RestaurantSchema = new Schema({
    name: { type: String, required: true },
    country: { type: String, required: true }, // "India" or "America"
    menu: [
        {
            itemName: { type: String, required: true },
            price: { type: Number, required: true },
        },
    ],
});

const Restaurant = models.Restaurant || model('Restaurant', RestaurantSchema);
export default Restaurant;
