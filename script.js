const scriptSelect = document.getElementById('script');
const customScript = document.getElementById('customScript');
const startBtn = document.getElementById('startBtn');
const timerSection = document.getElementById('timer');
const doneSection = document.getElementById('done');
const countdownDisplay = document.getElementById('countdown');
const resetBtn = document.getElementById('resetBtn');

let countdown;

// Ativar/desativar campo customizado
scriptSelect.addEventListener('change', function() {
  if (this.value === 'custom') {
    customScript.style.display = 'block';
    startBtn.disabled = false;
  } else {
    customScript.style.display = 'none';
    startBtn.disabled = this.value === '';
  }
});

// Iniciar timer
startBtn.addEventListener('click', function() {
  const selectedScript = scriptSelect.value;
  if (!selectedScript) return;

  // Mostrar seção do timer
  timerSection.classList.remove('hidden');
  doneSection.classList.add('hidden');

  let timeLeft = 300; // 5 minutos em segundos

  countdown = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    countdownDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      timerSection.classList.add('hidden');
      doneSection.classList.remove('hidden');
    }

    timeLeft--;
  }, 1000);
});

// Reiniciar
resetBtn.addEventListener('click', function() {
  clearInterval(countdown);
  timerSection.classList.add('hidden');
  doneSection.classList.add('hidden');
  scriptSelect.value = '';
  customScript.style.display = 'none';
  startBtn.disabled = true;
});
