$(document).ready(function () {

    $("section.new-tweet textarea").keyup(function() {
        var chars = 140 - $(this).val().length;
        $(this).parent().find(".counter").html(chars);
        if (chars < 0) {
            $(this).parent().find(".counter").addClass("red");
        } else {
            $(this).parent().find(".counter").removeClass("red")
        }
    });
});