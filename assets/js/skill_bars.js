// Skills Bars
// https://codepen.io/mannMadeCo/pen/BwMKpW
$(".skill-percent").each(function () {
  $(this).animate(
    {
      width: $(this).attr("data-percent"),
    },
    200
  );
});
