const mongoCollections = require("./mongoCollections");
const uuidv1 = require('uuid/v1');
const todoItems = mongoCollections.todoItems;

module.exports = {
    async createTask(title, description) {
        if (!title) throw "You must provide a tile for your item";
        if (!description) throw "You must provide a description for your item";
        
        const todoItemsCollection = await todoItems();
        let id = uuidv1();
        let newitem = {
            _id : id,
            title : title,
            description : description,
            completed : false,
            completedAt : null
        };

        const insertInfo = await todoItemsCollection.insertOne(newitem);
        if(insertInfo.insertedCount == 0)
            throw "could not add item";

        const newID = insertInfo.insertedId;
        const item = await this.getTask(newID);
        return item;
    },

    async getAllTasks() {
        //resolve to an array of all tasks in the database
        const todoItemsCollection = await todoItems();
        const items = await todoItemsCollection.find({}).toArray();
        return items;
    },

    async getTask(id) {
        //If no id is provided, the method should reject.
        if (!id) throw "You must provide an id to search for";
        
        //If the task does not exist, the method should reject.
        const todoItemsCollection = await todoItems();
        const itemGo = await todoItemsCollection.findOne({ _id : id});
        if(itemGo == null) throw "no such item with that id";
        
        return itemGo;
    },

    async completeTask(taskId){
        //If no id is provided, the method should reject.
        if (!taskId) throw "You must provide an taskId to search for";
        
        //If the task cannot be updated (does not exist, etc), this method should reject.
        const todoItemsCollection = await todoItems();
        var time = new Date().toLocaleString();
        const updateInfo = await todoItemsCollection.updateOne(
            {_id : taskId}, 
            { $set:
                {
                    completed : true,
                    completedAt : time
                }
             }
        );
        //const updateInfo = await todoItemsCollection.updateOne({_id : taskId}, updataitem);
        //If the update is successful, this method will resolve to the updated task.
        if(updateInfo.modifiedCount === 0) {
            throw "could not update item sucessfully";
        }

        return await this.getTask(taskId);
    },

    async removeTask(id){
        if (!id) throw "You must provide an id to search for";

        const todoItemsCollection = await todoItems();
        const deletionInfo = await todoItemsCollection.removeOne({_id : id});
        if(deletionInfo.deletedCount === 0) {
            throw `could not delete item with id of ${id}`;
        }
    },

};

