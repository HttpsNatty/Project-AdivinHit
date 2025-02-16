let questions = [];
let filteredQuestions = [];
let score = 0, timeLeft, timerInterval;

async function loadQuestions() {
  const sheetID = "16YhnuWZCkcZxVmw_EnsUZqFw64p_zSHwFDloEQ12SPU";
  const url = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?tqx=out:json`;
  const response = await fetch(url);
  const text = await response.text();
  const json = JSON.parse(text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1));

  // Pula a primeira linha (cabeçalho)
  questions = json.table.rows.slice(1).map(row => ({
    artist: row.c[0]?.v || "Desconhecido",
    song: row.c[1]?.v || "Música Desconhecida",
    genre: row.c[2]?.v || "Geral"
  }));

  updateGenreOptions();
}

function updateGenreOptions() {
  const genresArray = questions
    .map(q => q.genre)
    .filter(g => g && g.trim() !== "");
  const uniqueGenres = Array.from(new Set(genresArray));
  const genres = ["Aleatório", ...uniqueGenres];

  const genreSelect = document.getElementById("genreSelect");
  genreSelect.innerHTML = "";
  genres.forEach(genre => {
    let option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreSelect.appendChild(option);
  });
}

function startGame() {
  document.getElementById("game").style.display = "block";
  document.getElementById("summary").style.display = "none";
  score = 0;
  timeLeft = parseInt(document.getElementById("gameTime").value, 10);
  document.getElementById("score").innerText = score;
  document.getElementById("history").innerHTML = "";
  document.getElementById("timer").innerText = `Tempo: ${timeLeft}s`;

  const selectedGenre = document.getElementById("genreSelect").value;
  filteredQuestions = selectedGenre === "Aleatório"
    ? [...questions]
    : questions.filter(q => q.genre === selectedGenre);

  nextQuestion();
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  timeLeft--;
  document.getElementById("timer").innerText = `Tempo: ${timeLeft}s`;
  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    endGame();
  }
}

function nextQuestion() {
  if (filteredQuestions.length > 0) {
    let index = Math.floor(Math.random() * filteredQuestions.length);
    let question = filteredQuestions[index];
    filteredQuestions.splice(index, 1);
    document.getElementById("question").innerText = `"${question.song}" - ${question.artist}`;
  } else {
    endGame();
  }
}

function handleAnswer(correct) {
  if (correct) {
    score++;
  }
  document.getElementById("score").innerText = score;

  let historyItem = document.createElement("li");
  historyItem.textContent = document.getElementById("question").innerText + (correct ? " ✅" : " ❌");
  document.getElementById("history").appendChild(historyItem);

  nextQuestion();
}

function endGame() {
  document.getElementById("game").style.display = "none";
  document.getElementById("summary").style.display = "block";
  document.getElementById("finalScore").innerText = score;
  // Exibe o total de músicas exibidas
  const totalPlayed = document.getElementById("history").children.length;
  document.getElementById("totalPlayed").innerText = totalPlayed;
  window.scrollTo({ top: document.getElementById("summary").offsetTop, behavior: "smooth" });
}

document.getElementById("startGame").addEventListener("click", startGame);
document.getElementById("left").addEventListener("click", () => handleAnswer(false));
document.getElementById("right").addEventListener("click", () => handleAnswer(true));
document.getElementById("restartGame").addEventListener("click", startGame);

loadQuestions();