const questionBlocks = document.querySelectorAll(".question-answer");
let lastSelected = null;

const toggleAccordion = (answer) => {
  let questionText = answer.previousElementSibling.querySelector("p");
  let arrow = answer.previousElementSibling.querySelector(".arrow");
  let question = answer.previousElementSibling;
  question.classList.toggle("border-b");
  questionText.classList.toggle("question-active");
  arrow.classList.toggle("arrow-active");
  answer.classList.toggle("answer-active");
};

for (i = 0; i < questionBlocks.length; i++) {
  const answer = questionBlocks[i].querySelector(".answer");
  questionBlocks[i].addEventListener("click", () => {
    if (lastSelected) {
      toggleAccordion(lastSelected);
    }
    toggleAccordion(answer);
    lastSelected = answer;
  });
}
