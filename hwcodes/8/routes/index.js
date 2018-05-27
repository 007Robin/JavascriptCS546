const resultRoutes = require("./result");
const path = require("path");
let check = require("../data/result")

const constructorMethod = app => {
  app.use("/result", resultRoutes);
  app.get("/", (req, res) => {
    res.render("result/single");
   
  });
  
  app.get("/result", (req, res) => {
    res.render("result/index");
  });

  app.post("/result", async (req, res) => {
    const InputData = req.body["text-to-test"];
    try {
      const result = check.checkpalindrome(InputData);
      res.render("result/index", {"text-to-test": InputData, result : result})
    } catch (e) {
      res.status(400);
      res.render("result/index", {error : e });
    }
  });
  
  app.use("*", (req, res) => {
    res.redirect("/result");
  });
};

module.exports = constructorMethod;