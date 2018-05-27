const resultRouter = require("./result");

const constructorMethod = app => {
    app.use("/", resultRouter);

    app.use("*", (req, res) => {
        res.redirect("/");
    });
};

module.exports = constructorMethod;