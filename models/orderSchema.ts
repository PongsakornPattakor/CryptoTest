import mongoose, { mongo, Schema } from "mongoose";

const orderSchema = new Schema({
  userId: { type: Schema.ObjectId, required: true },
  cryptoId: { type: String, required: true },
  orderType: { type: String, required: true },
  orderStatus: { type: String, required: true },
});

const Order = mongoose?.models?.Order || mongoose.model("Order", orderSchema);

export default Order;
