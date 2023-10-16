  // Get the window width and set it as a CSS variable
  document.documentElement.style.setProperty('--window-width', `${window.innerWidth}px`);

  // Update the variable on window resize
  window.addEventListener('resize', () => {
    document.documentElement.style.setProperty('--window-width', `${window.innerWidth}px`);
  });

