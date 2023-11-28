document.addEventListener("DOMContentLoaded", function () {
  // Get the button element
  var scrollTopBtn = document.getElementById("scrollTopBtn");

  // Add a click event listener to the button
  scrollTopBtn.addEventListener("click", function () {
    // Scroll to the top of the page smoothly
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Add a scroll event listener to show/hide the button based on the scroll position
  window.addEventListener("scroll", function () {
    // If the user has scrolled down, show the button
    if (window.scrollY > 100) {
      scrollTopBtn.style.display = "block";
    } else {
      // Otherwise, hide the button
      scrollTopBtn.style.display = "none";
    }
  });
});
