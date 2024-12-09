// Helper function to trigger when document is ready
// https://stackoverflow.com/questions/9899372/vanilla-javascript-equivalent-of-jquerys-ready-how-to-call-a-function-whe
export function docReady(fn: Function) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
      // call on next available tick
      setTimeout(fn, 1);
  } else {
      document.addEventListener("DOMContentLoaded", fn as EventListenerOrEventListenerObject);
  }
}    
