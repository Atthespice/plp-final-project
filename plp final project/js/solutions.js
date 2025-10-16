document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggleSolutions');
  const solutionsDiv = document.getElementById('solutionsList');
  let shown = false;

  toggleBtn.addEventListener('click', function () {
    shown = !shown;
    solutionsDiv.classList.toggle('hidden');
    toggleBtn.textContent = shown ? 'Hide Technologies' : 'Show Technologies';
  });

document.addEventListener('DOMContentLoaded', function () {
  let counter = document.getElementById('counter');
  let count = 0;
  let target = 1000;
  let speed = 10;
  function updateCounter() {
    if (count < target) {
      count += Math.ceil(target / 100);
      counter.textContent = count > target ? target : count;
      setTimeout(updateCounter, speed);
    }
  }
  updateCounter();
});

});
