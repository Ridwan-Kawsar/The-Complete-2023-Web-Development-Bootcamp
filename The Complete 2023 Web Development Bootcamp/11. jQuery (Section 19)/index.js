$("h1").on("click", function () {
    $("h1").css("color", "red");
});


$("button").on("click", function () {
    $("h1").css("color", "green");
});

$(document).on("keypress", function(event) {
    $("h1").text(event.key);
})

