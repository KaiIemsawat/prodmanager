const mongoose = require("mongoose");

const Product = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is requird"],
            minLength: [2, "The title must be at lease 2 characters"],
            maxLength: [50, "The title can not be over 25 characters"],
        },
        price: {
            type: Number,
            required: [true, "Price is required"],
            min: [1, "Price can not be lower than 1"],
        },
        description: {
            type: String,
            required: [true, "Description is required"],
            minLength: [3, "The description must be over 3 characters"],
            maxLength: [250, "The description can not exceed 250 characters"],
        },
    },
    { timestamps: true }
);

const Prod = mongoose.model("Prod", Product);
module.exports = Prod;
