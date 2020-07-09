$(function () {
  $("#button-1").on("focus", function () {
    $(".photo-text-block").removeClass("display-none");
  });
  $("#button-2").on("focus", function () {
    $(".photo-text-block").addClass("display-none");
    $(".block-button-2").removeClass("display-none");
  });
  $("#button-3").on("focus", function () {
    $(".photo-text-block").addClass("display-none");
    $(".block-button-3").removeClass("display-none");
  });
  $("#button-4").on("focus", function () {
    $(".photo-text-block").addClass("display-none");
    $(".block-button-4").removeClass("display-none");
  });
});
