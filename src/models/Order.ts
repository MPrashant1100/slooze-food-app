import mongoose, { Schema, model, models, Types } from 'mongoose';

const OrderSchema = new Schema({
  user: { type: Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      itemName: { type: String },
      price: { type: Number },
      quantity: { type: Number, default: 1 },
    },
  ],
  totalPrice: { type: Number, default: 0 },
  country: { type: String }, 
  status: {
    type: String,
    enum: ['CREATED', 'PAID', 'CANCELED'],
    default: 'CREATED',
  },
});

const Order = models.Order || model('Order', OrderSchema);
export default Order;
