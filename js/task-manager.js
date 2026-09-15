function weeklyGoal(userName, dailyGoal, bonusTasks){
    let weeklyGoal = dailyGoal * 5;
    let totalGoal = weeklyGoal + bonusTasks;
    let output = `${userName}, your weekly goal is ${weeklyGoal} tasks!`;
    document.getElementById('goal-message').innerHTML = output;
}

const goalbutton = document.getElementById('goal-btn');

goalbutton.addEventListener("click", function(event) {
    event.preventDefault();
    let userName = document.getElementById("name").value;
    let dailyGoal = parseFloat(document.getElementById("daily-goal").value);
    let bonusTasks = parseFloat(document.getElementById("weekly-bonus").value);
    weeklyGoal(userName, dailyGoal, bonusTasks);
}); 