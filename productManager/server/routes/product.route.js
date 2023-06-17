const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
    // These paths refer to port 8000 (database)
    app.get("/api/allProducts", ProductController.findAllProducts);
    app.post("/api/createProd", ProductController.createProd);
    app.get("/api/findProdById/:id", ProductController.findProdById);
    app.put("/api/updateProdById/:id", ProductController.updateProdById);
    app.delete("/api/deleteProdById/:id", ProductController.deleteProdById);
};
