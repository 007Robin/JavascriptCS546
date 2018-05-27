const recipes = require("./recipes");

const constructorMethod = app => {
    app.use("/recipes", recipes);
    
    app.use("*", (req, res) => {
        res.status(404).json( {error: "Not found"} );
    });
};

module.exports = constructorMethod;