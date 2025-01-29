import mongoose, { Schema } from "mongoose";

const fiatSchema = new Schema({
  fiatSymbol: { type: String, required: true, default: "USD" },
  fiatName: { type: String, required: true, default: "United States dollar" },
  fiatBalance: { type: Number, required: true, default: 0 },
});

const FiatCurrencies =
  mongoose?.models?.FiatCurrencies ||
  mongoose?.model("FiatCurrencies", fiatSchema);

export default FiatCurrencies;
