// Data inicial: coloque a data do começo do relacionamento
const startDate = new Date("2024-08-30T00:00:00"); // Ajuste conforme necessário

function updateTimer() {
  const now = new Date();
  const difference = now - startDate;

  // Cálculo dos dias, horas, minutos e segundos
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  // Atualiza o texto do timer
  document.getElementById("timer").textContent = 
    `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

// Atualiza o timer a cada segundo
setInterval(updateTimer, 1000);
updateTimer();
