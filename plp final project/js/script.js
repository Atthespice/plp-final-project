document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggleFacts');
  const factList = document.getElementById('factList');
  let shown = false;

  toggleBtn.addEventListener('click', function () {
    shown = !shown;
    factList.classList.toggle('hidden');
    toggleBtn.textContent = shown ? 'Hide Facts' : 'Show Facts';
  });
});
