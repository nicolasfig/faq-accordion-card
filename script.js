const questionBlock = document.querySelector(".question");
const questionTexts = document.querySelectorAll(".question > p");
const arrows = document.querySelectorAll(".arrow");
const answer = document.querySelectorAll(".answer");

const toggleDisplay = (question, arrow) => {};

questionTexts.forEach((question) =>
  question.addEventListener("click", () => {
    questionBlock.style.borderBottom = "none";
    answer.classList.toggle("answer-active");
  })
);

/* arrows.forEach((arrow) =>
  arrow.addEventListener("click", () => {
    
  })
);
 */
