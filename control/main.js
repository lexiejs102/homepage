$( ".draggable" ).draggable();

$(".plant-btn").click(
    function(){
        console.log("Plant button clicked");
        $(".seed").toggleClass("plant");
    }
);
$(".sprout-btn").click(
    function(){
        $(".stem").toggleClass("sprout");
        $(".leafone").toggleClass("sprout");
        $(".leaftwo").toggleClass("sprout");
    }
);

$(".bloom-btn").click(
    function(){
        console.log("Bloom button clicked");
        $(".flowerstem").toggleClass("bloom");
        $(".petalone").toggleClass("bloom");
        $(".petaltwo").toggleClass("bloom");
        $(".petalthree").toggleClass("bloom");
        $(".petalfour").toggleClass("bloom");
        $(".petalfive").toggleClass("bloom");
        $(".center").toggleClass("bloom");
        $(".flowerleafone").toggleClass("bloom");
        $(".flowerleaftwo").toggleClass("bloom");
        $(".stem, .leafone, .leaftwo").removeClass("sprout");
    }
);

$(".close-btn").click(
    function(){
        $("#dialog").addClass("close");
        $(".close-btn").hide();
    }
);

$(".sun-btn").click(
    function(){
        $(".sun").toggleClass("sunny");
    }
);

$(".cloudy-btn").click(
    function(){
        $(".ovalone").toggleClass("cloudy");
        $(".ovaltwo").toggleClass("cloudy");
        $(".circleone").toggleClass("cloudy");
        $(".circletwo").toggleClass("cloudy");
        $(".circlethree").toggleClass("cloudy");
        $(".circlefour").toggleClass("cloudy");
        $(".sun").removeClass("sunny");
    }
);

$(".dark-btn").click(
    function(){
        $("body").toggleClass("dark");
        $(".ovalone").toggleClass("dark");
        $(".ovaltwo").toggleClass("dark");
        $(".circleone").toggleClass("dark");
        $(".circletwo").toggleClass("dark");
        $(".circlethree").toggleClass("dark");
        $(".circlefour").toggleClass("dark");
        $(".sun").removeClass("sunny");
    }
);

$(".wilt-btn").click(
    function(){
        $(".flowerstem").toggleClass("wilt");
        $(".petalone").toggleClass("wilt");
        $(".petaltwo").toggleClass("wilt");
        $(".petalthree").toggleClass("wilt");
        $(".petalfour").toggleClass("wilt");
        $(".petalfive").toggleClass("wilt");
        $(".center").toggleClass("wilt");
        $(".flowerleafone").toggleClass("wilt");
        $(".flowerleaftwo").toggleClass("wilt");
    }
);

$(".rain-btn").click(
    function(){
        console.log("Rain button clicked");
        $(".rainone").toggleClass('rainy');
        $(".raintwo").toggleClass('rainy');
        $(".rainthree").toggleClass('rainy');
        $(".rainfour").toggleClass('rainy');
        $(".rainfive").toggleClass('rainy');
        $(".sun").removeClass("sunny");
    }
);

$(".reset-btn").click(
    function(){
        $(".seed").removeClass("plant");
        $(".stem, .leafone, .leaftwo").removeClass("sprout");
        $(".flowerstem, .petalone, .petaltwo, .petalthree, .petalfour, .petalfive, .center, .flowerleafone, .flowerleaftwo").removeClass("bloom");
        $(".sun").removeClass("sunny");
        $(".ovalone, .ovaltwo, .circleone, .circletwo, .circlethree, .circlefour").removeClass("cloudy");
        $("body, .ovalone, .ovaltwo, .circleone, .circletwo, .circlethree, .circlefour").removeClass("dark");
        $(".flowerstem, .petalone, .petaltwo, .petalthree, .petalfour, .petalfive, .center, .flowerleafone, .flowerleaftwo").removeClass("wilt");
        $(".rainone, .raintwo, .rainthree, .rainfour, .rainfive").removeClass('rainy');
        
    }
);
