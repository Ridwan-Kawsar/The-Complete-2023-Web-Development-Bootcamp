// 182. Adding Event Listeners with jQuery

// PROBLEM:
// Whenever a key is pressed inside the website, it gets shown inside the h1

// SOLUTION:
$(document).on("keypress", function(event) {
    $("h1").text(event.key);
})