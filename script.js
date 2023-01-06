const question = document.querySelector(".question");
const questionText = document.querySelector(".question > p");
const arrow = document.querySelector(".arrow");
const answer = document.querySelector(".answer");

const toggleDisplay = () => {
  question.style.borderBottom = "none";
  answer.classList.toggle("answer-active");
};

questionText.addEventListener("click", () => {
  toggleDisplay();
});

arrow.addEventListener("click", () => {
  toggleDisplay();
});
