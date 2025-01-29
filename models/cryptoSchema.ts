import mongoose, { Schema } from "mongoose";

const cryptoSchema = new Schema({
  cryptoSymbol: { type: String, required: true, default: "BTC" },
  cryptoName: { type: String, required: true, default: "Bit coin" },
  cryptoBalance: { type: Number, required: true, default: 0 },
});

const CryptoCurrencies =
  mongoose.models.CryptoCurrencies ||
  mongoose.model("CryptoCurrencies", cryptoSchema);

export default CryptoCurrencies;
