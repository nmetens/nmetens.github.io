
// Load the navbar from the navbar file
$(document).ready(() => {
    $(() => {
        $(".navigation").load("../navbar/navbar.html");
    });
});

let pendulum_link = document.querySelector(".card1");
let code_game = document.querySelector(".card2");
let java_parser = document.querySelector(".card3");

pendulum_link.addEventListener("click", () => {
    window.location = "https://github.com/nmetens/The-Pendulum-Wave-Machine";
});

code_game.addEventListener("click", () => {
    window.location = "https://github.com/nmetens/The-Pendulum-Wave-Machine";
});

java_parser.addEventListener("click", () => {
    window.location = "https://github.com/nmetens/The-Pendulum-Wave-Machine";
});

