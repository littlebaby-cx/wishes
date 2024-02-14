// Timer countdown function
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
      // Redirect to slideshow after 5 minutes
      window.location.href = "slideshow.html";
    }
  }, 1000);
}

// Start timer when the page is loaded
window.onload = function () {
  var fiveMinutes = 60 * 0.5,
      display = document.querySelector('#timer');
  startTimer(fiveMinutes, display);
};
