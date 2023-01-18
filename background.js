setInterval(() => {
  const shorts = document.querySelectorAll('[href*="/shorts"]');

  shorts.forEach((short) => {
    short.parentElement.parentElement.parentElement.remove();
  });
}, 1000);
