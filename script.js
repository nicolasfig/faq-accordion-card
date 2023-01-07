const questionBlocks = document.querySelectorAll(".question-answer");

for (i = 0; i < questionBlocks.length; i++) {
  const answer = questionBlocks[i].querySelector(".answer");

  questionBlocks[i].addEventListener("click", () => {
    answer.classList.toggle("answer-active");
  });
}
