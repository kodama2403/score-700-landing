(function () {
  const countdownEl = document.getElementById('countdown');
  if (!countdownEl) return;

  const STORAGE_KEY = 'score700_offer_end';

  function getEndTime() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const end = parseInt(stored, 10);
      if (end > Date.now()) return end;
    }
    const end = Date.now() + 48 * 60 * 60 * 1000;
    localStorage.setItem(STORAGE_KEY, String(end));
    return end;
  }

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  function tick() {
    const remaining = getEndTime() - Date.now();

    if (remaining <= 0) {
      countdownEl.textContent = '00:00:00';
      return;
    }

    const hours = Math.floor(remaining / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

    countdownEl.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }

  tick();
  setInterval(tick, 1000);
})();
