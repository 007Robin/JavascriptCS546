const experss = require("express");
const bodyParser = require("body-parser");
const app = experss();
const configRoutes = require("./routes");

app.use(bodyParser.json());
configRoutes(app);

app.listen(3000, () => {
    console.log("we've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});