var startBtn = document.getElementById("startBtn");

var result = document.getElementById("result");

var nameOutput = document.getElementById("nameOutput");

var scoreOutput = document.getElementById("scoreOutput");

var remarkOutput = document.getElementById("remarkOutput");

startBtn.addEventListener("click", function () {
  alert("Welcome to the Score Checker!");

  var name = prompt("Enter your name:");
  var score = prompt("Enter your score:");

  if (name === null || name === "") {
    alert("Please enter your name!");
    return;
  }

  if (score === null || score === "") {
    alert("Please enter a score!");
    return;
  }

  if (isNaN(score)) {
    alert("Score must be a number!");
    return;
  }

  if (score < 0 || score > 100) {
    alert("Score must be between 0 and 100!");
    return;
  }

  var remark;

  if (score >= 90) {
    remark = "Excellent";
  } else if (score >= 75) {
    remark = "Passed";
  } else {
    remark = "Failed";
  }

  nameOutput.textContent = "Name: " + name;

  scoreOutput.textContent = "Score: " + score;

  remarkOutput.textContent = "Remark: " + remark;

  result.classList.remove("hidden");
});
