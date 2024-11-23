// content.js
const observer = new MutationObserver((mutations) => {
  // Use requestAnimationFrame to batch DOM operations
  requestAnimationFrame(() => {
    const spans = document.querySelectorAll('span');
    for (const span of spans) {
      if (span.textContent === 'Long chats cause you to reach your usage limits faster.') {
        const parentElement = span.parentElement?.parentElement?.parentElement?.parentElement;
        if (parentElement) {
          parentElement.remove();
        }
      }
    }
  });
});

// Start observing with a configuration
observer.observe(document.body, {
  childList: true,
  subtree: true
});
