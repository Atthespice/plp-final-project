document.addEventListener('DOMContentLoaded', function () {
  const shareBtn = document.getElementById('showShareTips');
  const shareDiv = document.getElementById('shareTips');
  let show = false;

  shareBtn.addEventListener('click', function () {
    show = !show;
    shareDiv.classList.toggle('hidden');
    shareBtn.textContent = show ? 'Hide Share Tips' : 'Show Share Tips';
  });
});
