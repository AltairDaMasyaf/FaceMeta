const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

$(document).ready(function () {
  var scroll_start = 0;
  var startchange = $("#hero");
  var offset = startchange.offset();
  if (startchange.length) {
    $(document).scroll(function () {
      scroll_start = $(this).scrollTop();
      if (scroll_start > offset.top) {
        $(".nav__item a").css("color", "white");
        $(".nav__item a").css("text-shadow", "1px 1px #a953f4");
        $(".nav").css("border-bottom", "2px solid #a953f4");
      } else {
        $(".nav__item a").css("color", "#a953f4");
        $(".nav__item a").css("text-shadow", "0 0");
        // $(".nav").css("border-bottom", "2px solid white");
      }
    });
  }
});
