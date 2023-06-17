const mongoose = require("mongoose");

//                  Only need to change the name of the database
//                  If the database is not existed, it will create one with the name
mongoose
    .connect("mongodb://127.0.0.1:27017/products", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("A connection to the database is established"))
    .catch((err) =>
        console.log(
            "Something went wrong when connecting to the database ",
            err
        )
    );
