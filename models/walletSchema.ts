import mongoose, { Schema, Document, Types } from "mongoose";

const walletSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  cryptoId: {
    type: Schema.Types.ObjectId,
    ref: "Cryptocurrencies",
    required: true,
  },
  cryptoBalance: { type: Number, required: true, default: 0 },
});

console.log("This is Wallet ");
const Wallet =
  mongoose?.models?.Wallet || mongoose.model("Wallet", walletSchema);

export default Wallet;
