const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const uuidv1 = require('uuid/v1');

let exportedMethods = {
    //Creates a recipe with the supplied data in the request body, and returns the new recipe
    async addRecipes(title, ingredients, steps) {
        if (!title) throw "You must provide a title for your item";
        if(!ingredients) throw "You must provide ingredients";
        if(!steps) throw "You must provide steps";
        if (typeof title !== "string") throw "No title provided, title should be a string";
        if (!Array.isArray(ingredients)) {
            ingredients = [];
        }
        if (!Array.isArray(steps)) {
            steps = [];
        }

        const recipesCollection = await recipes();
        let id = uuidv1();
        let newRecipe = {
            _id :id,
            title : title,
            ingredients : ingredients,
            steps : steps
        }
        
        const insertInfo = await recipesCollection.insertOne(newRecipe);
        if(insertInfo.insertedCount ===  0)
            throw "could not add items";
            
        const newID = insertInfo.insertedId;
        const item = await this.getById(newID);
        return item;
        
    },

    //Responds with the full content of the specified recipe
    async getById(id) {
        if (!id) throw "You must provide an id to search for";
        const recipesCollection = await recipes();
        const recipe = await recipesCollection.findOne({ _id : id});
        if(!recipe) throw "recipe not found";
        return recipe;
    },

    //Responds with an array of all recipes in the format of {_id: RECIPE_ID, title: RECIPE_TITLE}
    getAllrecipes() {
        return recipes().then(recipesCollection => {
            //return recipesCollection.find({}).toArray();
            return recipesCollection.find({},{_id : 1, title : 1})
            .map(function(item){ 
                const ans = {
                    _id : item._id,
                    title : item.title
                }
                return ans; 
            })
            .toArray();
        });
    },

    //Deletes the recipe and returns nothing.
    async removeRecipe(id) {
        if (!id) throw "You must provide an id to search for";
        const recipesCollection = await recipes();
        const deletionInfo = await recipesCollection.removeOne({_id : id});
        if(deletionInfo.deletedCount === 0) {
            throw `could not delete item with id of ${id}`;
        }
    },

    //Updates the specified recipe with by replacing the recipe with the new recipe content, and returns the updated recipe
    async updateRecPut(id, updatedRec) {
        const recipesCollection = await recipes();
        if (!updatedRec.title) throw "You must provide a title for your item";
        if (!updatedRec.ingredients) throw "You must provide ingredients";
        if (!updatedRec.steps) throw "You must provide steps";
        if (typeof updatedRec.title !== "string") throw "No title provided, title should be a string";
        if (!Array.isArray(updatedRec.ingredients)) {
            updatedRec.ingredients = [];
        }
        if (!Array.isArray(updatedRec.steps)) {
            updatedRec.steps = [];
        }
        const updateInfo = await recipesCollection.updateOne( {_id : id}, 
            {   $set :{
                    title : updatedRec.title,
                    ingredients : updatedRec.ingredients,
                    steps : updatedRec.steps
                }
            }
        );
        /*
        if(updateInfo.modifiedCount === 0) {
            throw "could not update recipe sucessfully";
        }
        */
        return await this.getById(id);
    },

    //Updates the specified recipe with only the supplied changes, and returns the updated recipe
    async updateRecPatch(id, updatedRec) {
        const recipesCollection = await recipes();
        const updateRecipeInfo = {};

        if(updatedRec.title) {
            updateRecipeInfo.title = updatedRec.title;
        }
        if(updatedRec.ingredients) {
            updateRecipeInfo.ingredients = updatedRec.ingredients;
        }
        if(updatedRec.steps) {
            updateRecipeInfo.steps = updatedRec.steps;
        }
        let updateCommand = {
            $set: updateRecipeInfo
        };
        const query = {
            _id : id
        }
        await recipesCollection.updateOne(query, updateCommand);
        return await this.getById(id);
    }

};

module.exports = exportedMethods;