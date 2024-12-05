$(".newtext-btn").click(
    function(){
        $("p").toggleClass("new")
    }
);

$(".reset-btn").click(
    function(){
        $(".word").removeClass("clicked");
        $(".word").addClass("rainbow");
    }
);