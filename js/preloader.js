document.body.onload = function()
{
    $(".dot-1").css("animation", "dot-light 2s 0s forwards");
    $(".dot-2").css("animation", "dot-light 2s 0.75s forwards");
    $(".dot-3").css("animation", "dot-light 2s 1.5s forwards");
    $(".dot-4").css("animation", "dot-light 2s 2.25s forwards");
    setTimeout(function(){$(".item-1").css("width", "0");}, 4000);
    setTimeout(function(){$(".item-2").css("height", "0");}, 5000);
    setTimeout(function(){$(".item-3").css("height", "0");}, 5300);
    setTimeout(function(){$(".item-4").css("height", "0");}, 5500);
 
    setTimeout(function(){$(".title").css({"opacity":"1", "transform":"translate(0)"});}, 6100);
    setTimeout(function(){$(".sub__title").css({"opacity":"1", "transform":"translate(0)"});}, 6300);
    setTimeout(function(){$(".button").css({"opacity":"1", "transform":"translate(0)"});}, 6500);
    setTimeout(function(){$(".p-3").css({"opacity":"1", "transform":"translate(0)"});}, 6700);
 
    setTimeout(function(){$(".preloader").css("visibility", "hidden");}, 7000);
}