const connection = require("./mongoConnection");
const todoItems = require("./todo");

const main = async () => {


    const createdTask1 = await todoItems.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
    console.log(createdTask1);
   
    const createdTask2 = await todoItems.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?");
    
    //query all tasks and log them
    const getTasks = await todoItems.getAllTasks();
    console.log(getTasks);
 
    //remove the first task
    const removeId = createdTask1._id;
    const removeTask = await todoItems.removeTask(removeId);
    /*
    try {
        return await todoItems.getTask(createdTask1._id);
    } catch (error) {
      console.error(error);
    }
    */

    //Query all the remaining tasks and log them
    const getRemainTasks = await todoItems.getAllTasks();
    console.log(getRemainTasks);

    //Complete the remaining task
    const NeedCompleteID = createdTask2._id;
    const task = await todoItems.getTask(NeedCompleteID);
    const finishedTask = await todoItems.completeTask(task._id); 
    console.log(finishedTask);

    const db = await connection();
    await db.dropDatabase();
    await db.serverConfig.close();

    console.log("Done!");
};

main().catch(error => {
    console.log(error);
});
