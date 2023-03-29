// Import the required modules
import mongoose from "mongoose";

// Define a new Mongoose schema for the Product collection
const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // The title is a required field
      maxLength: 60, // The title should not exceed 60 characters
    },
    desc: {
      type: String,
      required: true, // The description is a required field
      maxLength: 200, // The description should not exceed 200 characters
    },
    img: {
      type: String,
      required: true, // The image URL is a required field
      maxLength: 200, // The image URL should not exceed 200 characters
    },

    prices: {
      type: [Number],
      required: true, // The prices are a required field
    },
    type: {
      type: String,
    },
    // The product's extra options (if any)
    extraOptions: {
      type: [
        {
          // The option text
          text: { type: String, required: true },
          // The option price
          price: { type: Number, required: true },
        },
      ],
    },
  },
  // Additional options for the schema
  { timestamps: true }
);

// Export the Mongoose model for the Product collection
export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
