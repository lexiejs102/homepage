$(".dark-btn").click(
    function(){
     $("body").toggleClass("dark");
     $(".box").toggleClass("dark");
  }
);

$(".spin-btn").click(
    function(){
      $(".box").toggleClass("spin");
    }
);

$(".reveal-btn").click(
    function(){
        $(".cat").addClass("reveal");
        // $(".reveal-btn").css("display", "none");
        $(".reveal-btn").hide();
    }
);

    $( ".draggable" ).draggable();
  