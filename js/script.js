/* ------------  menu - sticky---------- */
$(document).ready(function () {
  $(".banner").css({ height: $(window).height() + "px" });
  var flag = false;
  var scroll;
  $(window).scroll(function () {
    scroll = $(window).scrollTop();
    if (scroll > 200) {
      if (!flag) {
        $(".img-logo").css({
          "margin-top": "-5px",
          width: "50px",
          height: "50px",
        });
        $("header").css({ "background-color": "#3c3c3c" });
        flag = true;
      }
    } else {
      if (flag) {
        $(".img-logo").css({
          "margin-top": "150px",
          width: "200px",
          height: "200px",
        });
        $("header").css({ "background-color": "transparent" });
        flag = false;
      }
    }
  });
});

/*------- wrap - carrousel---------*/

$(document).ready(function () {
  var docWidth = $('body').width(),
    $wrap = $('#wrap'),
    $images = $('#wrap .hb'),
    slidesWidth = $wrap.width();

  $(window).on('resize', function () {
    docWidth = $('body').width();
    slidesWidth = $wrap.width();
  })

  $(document).mousemove(function (e) {
    var mouseX = e.pageX,
      offset = mouseX / docWidth * slidesWidth - mouseX / 2;

    $images.css({
      '-webkit-transform': 'translate3d(' + -offset + 'px,0,0)',
      'transform': 'translate3d(' + -offset + 'px,0,0)'
    });
  });
})