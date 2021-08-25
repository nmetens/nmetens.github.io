
$(document).ready(() => {
    // Load the navbar 
    $(document).ready(() => {
        $(() => {
            $(".navbar").load("../navbar/navbar.html");
        });
    });
    $("#copyright").append( // Create the copyright in the footer element
        $("<div>").text("\u00A9 2021 nmetens")
        .css({
            textAlign: "center",
            color: "whitesmoke",
            position: "relative",
            marginBottom: "30px"
        })
    );
});