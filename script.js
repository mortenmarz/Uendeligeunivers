// script.js

// Astronautens scroll-baserede bevægelse
const astronaut = document.getElementById("astronaut");
const skyBackground = document.querySelector(".sky-background");

// Juster maksimum y-bevægelse for astronauten over hele sidens scroll-område
const maxTranslateY = window.innerHeight * 0.7; // Den maksimale bevægelse astronauten må foretage

window.addEventListener("scroll", () => {
  // Beregn det aktuelle scroll-område
  const scrollPosition = window.scrollY;
  const scrollRange = skyBackground.scrollHeight - window.innerHeight;

  // Beregn astronautens position som en procentdel af scroll-positionen
  const translateY = (scrollPosition / scrollRange) * maxTranslateY;

  // Anvend transform for at justere astronautens y-position
  astronaut.style.transform = `translate(-50%, ${translateY}px)`;
});

// Funktion til at vise quiz
function showQuiz(quizId) {
  const quiz = document.getElementById(quizId);
  quiz.style.display = quiz.style.display === "block" ? "none" : "block";
}

// Funktion til svarmarkering og fejring ved korrekt svar
function selectAnswer(button, correctAnswer, quizId) {
  const buttons = button.parentNode.querySelectorAll("button");
  buttons.forEach(btn => btn.classList.remove("selected"));
  button.classList.add("selected");
  
  const feedback = button.parentNode.querySelector(".feedback");
  
  // Tjek om svaret er korrekt og opdater feedback
  if (button.textContent.includes(correctAnswer)) {
    feedback.textContent = "Korrekt!";
    feedback.style.color = "green";

    // Astronaut fejrer korrekt svar ved at tage armene op
    astronaut.classList.add("celebrate");
    
    // Fjern fejringseffekten efter 1 sekund
    setTimeout(() => astronaut.classList.remove("celebrate"), 300);
  } else {
    feedback.textContent = "Forkert svar, prøv igen!";
    feedback.style.color = "red";
  }
}
