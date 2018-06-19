$(document).ready(function () {

    $("section.new-tweet textarea").keyup(function (event) {
        var chars = 140 - $(this).val().length;
        $(this).parent().find(".counter").html(chars);
        if (chars < 0) {
            $(this).parent().find(".counter").addClass("red");
        }
    });
});