const showError = (message, showTime = 5000) => {
  const errorContainer = document.createElement('div');
  errorContainer.className = 'error-message';
  errorContainer.textContent = message;
  document.body.append(errorContainer);
  setTimeout(() => {
    errorContainer.remove();
  }, showTime);
};

export { showError };
