
$(document).ready(() => {
    $("#title").append(
        $("<h1>").text("Nathan")
        .css({
            marginLeft: "10%",
            color: "black",
            fontFamily: "Arial",
            fontSize: "12rem"
        }),
        $("<h1>").text("Metens")
        .css({
            marginLeft: "40%",
            color: "black",
            fontFamily: "Arial",
            fontSize: "12rem"
        })
    ),
    $("#copyright").append(
        $("<div>").text("\u00A9 2021 nmetens, Inc.")
        .css({
            textAlign: "center",
            color: "whitesmoke",
            position: "relative",
            marginTop: "40vh"
        })
    );
});