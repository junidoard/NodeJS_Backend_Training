function doTask(taskName, callback){
    setTimeout(() => {
        console.log(`Task ${taskName} completed`); 
        callback();
    }, 2000);
}

doTask("Task 1", () => {
    doTask("Task 2", () => {
        doTask("Task 3", () => {
            console.log("All tasks are done!");
        });
    });
})

const doTaskPromise = (taskName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Task ${taskName} completed`); 
            resolve();
        }, 2000);
    });
}

async function doAllTaskPromise(){
    await doTaskPromise("Task A");
    await doTaskPromise("Task B");
    await doTaskPromise("Task C");
    console.log("All tasks are done!");
}

doAllTaskPromise();