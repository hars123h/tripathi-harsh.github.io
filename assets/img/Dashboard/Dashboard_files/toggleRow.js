$(".table-row").off().click( function() {
    var button = $(this).find("toggleButton")
    if ($(this).children(":first").children(":first").children(":first").attr('class').includes("active")){
        $(this).next().attr("style", "display:none");
        $(this).children(":first").children(":first").children(":first").removeClass("active")
    } else {
        $(this).children(":first").children(":first").children(":first").addClass("active")
        $(this).next().attr("style", "display:table-row");
    }
})
