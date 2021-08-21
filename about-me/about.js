
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
            marginBottom: "30px"
        })
    );
});

function showSlides(n) {
    var slides = document.getElementsByClassName("slides");
    if (n > slides.length) {
        slideIndex = 1;
    }    
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}

var slideIndex = 1;
showSlides(slideIndex);
    
const plusSlides = (n) => {
    showSlides(slideIndex += n);
}

let prev_btn = document.getElementById("prev");
let next_btn = document.getElementById("next");

prev_btn.onclick = (event) => {
    plusSlides(-1);
};

next_btn.onclick = (event) => {
    plusSlides(1);
};
