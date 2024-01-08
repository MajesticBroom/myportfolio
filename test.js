document.addEventListener("DOMContentLoaded", function() {
    var scrollContainer = document.querySelector(".scroll-container");
    var element = document.querySelector(".animated-element");

    scrollContainer.addEventListener("scroll", function() {
        var position = element.getBoundingClientRect().top;
        var containerHeight = scrollContainer.clientHeight;

        if (position < containerHeight) {
            element.classList.add("animate");
        }
    });
});
