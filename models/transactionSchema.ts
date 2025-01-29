import mongoose, { Schema } from "mongoose";

const transactionSchema = new Schema({
  transacType: { type: Number, required: true },
  senderWalletId: { type: String, required: true },
  receiverWalletId: { type: String, required: true },
  cryptoId: { type: String, required: true },
  fiatAmount: { type: Number, required: true, default: 0 },
  cryptoAmount: { type: Number, required: true, default: 0 },
  transacDate: { type: Date, required: true },
});

const Transaction =
  mongoose?.models?.Transaction ||
  mongoose?.model("Transaction", transactionSchema);

export default Transaction;
