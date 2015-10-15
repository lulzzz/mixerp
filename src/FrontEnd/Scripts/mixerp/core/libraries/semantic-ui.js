//Semantic UI
var semanticGrid = [undefined, "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen"];

$(document).ready(function () {
    var tabItems = $('.tabular .item');

    if (tabItems && tabItems.length > 0) {
        tabItems.tab();
    };

    //Semantic UI Button Support
    var buttons = $(".buttons .button");

    buttons.on("click", function () {
        buttons.removeClass("active");
        $(this).addClass("active");
    });

    $('.activating.element').popup();

    $('.ui.checkbox').checkbox();
    $('.ui.dropdown').dropdown( {placeholder: false });
});