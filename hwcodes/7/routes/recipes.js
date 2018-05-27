const express = require("express");
const router = express.Router();
const data = require("../data");
const recipesInfo = data.recipes;

//Responds with an array of all recipes in the format of 
//{_id: RECIPE_ID, title: RECIPE_TITLE}
router.get("/", async(req, res) => {

    try {
        const recipesList = await recipesInfo.getAllrecipes();
        res.json(recipesList);

    } catch (e) {
        res.status(500).send();
    }
});

//Responds with the full content of the specified recipe
router.get("/:id", async(req, res) => {
    try {
        const recipe = await recipesInfo.getById(req.params.id);
        res.json(recipe);
    } catch (e) {
        res.status(404).json({ error: "recipe not found" });
    }
});

//Creates a recipe with the supplied data in the request body, and returns the new recipe
router.post("/", async(req, res) => {
    const bodydata = req.body;
    try {
        const newrecipe = await recipesInfo.addRecipes(bodydata.title, bodydata.ingredients, bodydata.steps);
        res.json(newrecipe);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

//Updates the specified recipe with by replacing the recipe 
//with the new recipe content, and returns the updated recipe
router.put("/:id", async (req, res) => {
    const updatedData = req.body;
    try {
        await recipesInfo.getById(req.params.id);
    } catch (e) {
        res.status(404).json({ error: "Recipe not found" });
    }

    try {
        const updaterecipe = await recipesInfo.updateRecPut(req.params.id, updatedData);
        res.json(updaterecipe);
    } catch (e) {
        res.status(500).json({error : e});
    }
});

//Updates the specified recipe with only the supplied changes, 
//and returns the updated recipe
router.patch("/:id", async (req, res) => {
    const updatedData = req.body;
    try {
        await recipesInfo.getById(req.params.id);
    } catch (e) {
        res.status(404).json({ error: "Recipe not found" });
    }

    try {
        const updaterecipe = await recipesInfo.updateRecPatch(req.params.id, updatedData);
        res.json(updaterecipe);
    } catch (e) {
        res.status(500).json({error : e});
    }
});

//Deletes the recipe and returns nothing.
router.delete("/:id", async(req, res) => {
    try {
        await recipesInfo.getById(req.params.id);
    } catch (e) {
        res.status(404).json({ error: "Recipe not found" });
    }

    try {
        await recipesInfo.removeRecipe(req.params.id);
        res.sendStatus(200);
    } catch (e) {
        res.status(500).json({error : e});
    }
});

module.exports = router;