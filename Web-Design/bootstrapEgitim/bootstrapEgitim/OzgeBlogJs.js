$(document).ready(function () {
    $(".leftSlider").nerveSlider({
        sliderWidth: "100%",
        sliderHeight: "100%",
        sliderResizable: true,
        sliderAutoPlay: false,
        showArrows: false,
        showDots: false,
        slideTransitionDirection: "down"
    });
    $(".rightSlider").nerveSlider({
        sliderWidth: "100%",
        sliderHeight: "100%",
        sliderResizable: true,
        sliderAutoPlay: false,
        showArrows: false,
        showDots: false,
        slideTransitionDirection: "up"
    });
    $("#ev").on("click", function () {

        $(".leftSlider").gotoSlide(1);
        $(".rightSlider").gotoSlide(1);
    });
    $("#hakkimda").click(function () {

        $(".leftSlider").gotoSlide(2);
        $(".rightSlider").gotoSlide(2);
    });
    $("#egitim").click(function () {

        $(".leftSlider").gotoSlide(3);
        $(".rightSlider").gotoSlide(3);
    });
    $("#is").click(function () {

        $(".leftSlider").gotoSlide(4);
        $(".rightSlider").gotoSlide(4);
    });
    $("#iletisim").click(function () {

        $(".leftSlider").gotoSlide(5);
        $(".rightSlider").gotoSlide(5);
    });
    $("#subMenuButton").click(function () {
        $("#subMenuContainer").toggleClass("opened");
    });
    $('[data-toggle="tooltip"]').tooltip();
});