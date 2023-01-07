const questionBlocks = document.querySelectorAll(".question-answer");
let lastSelected = null;

const toggleAccordion = (answer) => {
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
