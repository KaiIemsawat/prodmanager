const Prod = require("../models/product.model");

module.exports.findAllProducts = (req, resp) => {
    Prod.find()
        .then((allProds) => {
            resp.json(allProds);
        })
        .catch((err) => {
            resp.status(400).json(err);
        });
};

module.exports.findProdById = (req, resp) => {
    console.log(req.params);
    Prod.findById({ _id: req.params.id }) // <--- note that .id refers to :id in route
        .then((oneProd) => {
            resp.json(oneProd);
        })
        .catch((err) => {
            resp.status(400).json(err);
        });
};

module.exports.createProd = (req, resp) => {
    Prod.create(req.body)
        .then((newProd) => {
            resp.status(201).json(newProd);
        })
        .catch((err) => {
            resp.status(400).json(err);
        });
};

module.exports.updateProdById = (req, resp) => {
    Prod.findByIdAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updateProd) => {
            resp.json(updateProd);
        })
        .catch((err) => {
            resp.status(400).json(err);
        });
};

module.exports.deleteProdById = (req, resp) => {
    /* This method can be used but will get different responseBody.
    It will have the responseBody show the details of the deleted object */
    // Prod.findByIdAndDelete({ _id: req.params.id })
    Prod.deleteOne({ _id: req.params.id })
        .then((resu) => {
            resp.json(resu);
        })
        .catch((err) => {
            resp.status(400).json(err);
        });
};
