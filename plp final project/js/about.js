document.addEventListener('DOMContentLoaded', function () {
  const statsBtn = document.getElementById('showStats');
  const statsDiv = document.getElementById('stats');
  let statsVisible = false;

  statsBtn.addEventListener('click', function () {
    statsVisible = !statsVisible;
    statsDiv.classList.toggle('hidden');
    statsBtn.textContent = statsVisible ? 'Hide Key Statistics' : 'Show Key Statistics';
  });
});
