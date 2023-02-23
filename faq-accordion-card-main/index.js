const questions = document.querySelectorAll(".question-wrapper");

questions.forEach((question) => {
  question.addEventListener("click", (event) => {
    const question = event.currentTarget.querySelector(".question");
    const arrow = question.querySelector(".arrow");
    const answer = event.currentTarget.querySelector(".answer");
    // console.log(question, arrow, answer);
    question.classList.toggle("show");
    arrow.classList.toggle("show");
    answer.classList.toggle("show");
  });
});
