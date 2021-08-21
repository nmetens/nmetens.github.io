
// Load the navbar from the navbar file
$(document).ready(() => {
    $(() => {
        $(".navigation").load("../navbar/navbar.html");
    });
    $("#copyright").append(
        $("<div>").text("\u00A9 2021 nmetens, Inc.")
        .css({
            textAlign: "center",
            color: "whitesmoke",
            position: "relative",
            marginTop: "23vh"
        })
    );
});

let wave_machine = document.querySelector(".card1");
let console_game = document.querySelector(".card2");
let java_parser = document.querySelector(".card3");

wave_machine.addEventListener("click", () => {
    window.location = "https://github.com/nmetens/The-Pendulum-Wave-Machine";
});

console_game.addEventListener("click", () => {
    window.location = "https://github.com/nmetens/ConsoleGame";
});

java_parser.addEventListener("click", () => {
    window.location = "https://github.com/nmetens/JavaParser";
});


