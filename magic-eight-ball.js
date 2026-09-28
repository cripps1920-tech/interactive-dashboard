let answers = [
    "Yes!",
    "No.",
    "Ask again later.",
    "Definitely!",
    "I’m not sure.",
    "Absolutely not."
];

function displayAnswer() {
    let index = Math.floor(Math.random() * answers.length);
    let answer = answers[index];

    let circle = document.getElementById("circle");
    circle.style.display = "block";
    circle.innerHTML = answer;
}

document.getElementById("ball").addEventListener("mousedown", function() {
    let question = document.getElementById("question").value;

    if (question === "") {
        alert("Please type a question first!");
    } else {
        displayAnswer();
    }
});

document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("circle").style.display = "none";
});
