function weeklyGoal(userName, dailyGoal, bonusTasks) {

    let weeklyTasks = dailyGoal * 5;
    let totalGoal = weeklyTasks + bonusTasks;

    let output =
        `${userName}, your weekly goal is ${weeklyTasks} tasks. ` +
        `With bonus tasks included, your total goal is ${totalGoal} tasks.`;

    document.getElementById("goal-message").innerHTML = output;
}

const goalButton = document.getElementById("goal-btn");

goalButton.addEventListener("click", function (event) {

    event.preventDefault();

    let userName =
        document.getElementById("name").value;

    let dailyGoal =
        parseFloat(document.getElementById("daily-target").value);

    let bonusTasks =
        parseFloat(document.getElementById("bonus-tasks").value);

    if (isNaN(dailyGoal)) {
        dailyGoal = 0;
    }

    if (isNaN(bonusTasks)) {
        bonusTasks = 0;
    }

    weeklyGoal(userName, dailyGoal, bonusTasks);

});




let myTasks = [];
let taskId = 1;


function logTasks() {
    console.log(JSON.stringify(myTasks));
}

const userTasks = document.createElement("ul");
userTasks.id = "user-tasks";

const listContainer = document.getElementById("task-list");

listContainer.appendChild(userTasks);




function addTask() {

    let taskText =
        document.getElementById("task-name").value;

    let priority =
        document.getElementById("priority").value;

    let important =
        document.getElementById("important").checked;

    if (taskText.trim() === "") {
        return;
    }

    const taskObject = {

        id: taskId,
        name: taskText,
        priority: priority,
        isImportant: important,
        isCompleted: false

    };

    taskId++;

    myTasks.push(taskObject);

    
    logTasks();

    const listItem =
        document.createElement("li");

    listItem.textContent =
        `${taskObject.name} (${taskObject.priority})`;

    

    if (taskObject.priority === "High") {
        listItem.style.fontWeight = "bold";
    }
    else if (taskObject.priority === "Medium") {
        listItem.style.fontStyle = "italic";
    }
    else {
        listItem.style.opacity = "0.8";
    }

   

    if (taskObject.isImportant) {
        listItem.style.color = "red";
    }

  

    const completeButton =
        document.createElement("button");

    completeButton.textContent = " Complete";

    completeButton.style.marginLeft = "10px";

    completeButton.addEventListener("click", function () {

        completeTask(taskObject, listItem);

    });

    listItem.appendChild(completeButton);

    userTasks.appendChild(listItem);

    document.getElementById("task-name").value = "";

    document.getElementById("important").checked = false;
}




function completeTask(taskObject, listItem) {

    taskObject.isCompleted = true;

    listItem.style.textDecoration = "line-through";

  
    logTasks();

}




function deleteList() {

    userTasks.innerHTML = "";

    myTasks = [];

    // LOG TASKS AFTER DELETE
    logTasks();

}



const addTaskButton =
    document.getElementById("add-task");

addTaskButton.addEventListener("click", function (event) {

    event.preventDefault();

    addTask();

});



const deleteListButton =
    document.getElementById("delete-list");

deleteListButton.addEventListener("click", function () {

    deleteList();

});