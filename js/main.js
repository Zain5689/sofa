swiperSlide.end().find("[data-caption-animate]").addClass("not-animated").end();

s.swiper({
  autoplay: s.attr("data-autoplay")
    ? s.attr("data-autoplay") === "false"
      ? undefined
      : s.attr("data-autoplay")
    : 5000,
  direction: s.attr("data-direction") ? s.attr("data-direction") : "horizontal",
  effect: s.attr("data-slide-effect") ? s.attr("data-slide-effect") : "slide",
  speed: s.attr("data-slide-speed") ? s.attr("data-slide-speed") : 600,
  keyboardControl: s.attr("data-keyboard") === "true",
  mousewheelControl: s.attr("data-mousewheel") === "true",
  mousewheelReleaseOnEdges: s.attr("data-mousewheel-release") === "true",
  nextButton: next.length ? next.get(0) : null,
  prevButton: prev.length ? prev.get(0) : null,
  pagination: pag.length ? pag.get(0) : null,
  paginationClickable: pag.length
    ? pag.attr("data-clickable") !== "false"
    : false,
  paginationBulletRender: pag.length
    ? pag.attr("data-index-bullet") === "true"
      ? function (swiper, index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        }
      : null
    : null,
  scrollbar: bar.length ? bar.get(0) : null,
  scrollbarDraggable: bar.length
    ? bar.attr("data-draggable") !== "false"
    : true,
  scrollbarHide: bar.length ? bar.attr("data-draggable") === "false" : false,
  loop: isNoviBuilder ? false : s.attr("data-loop") !== "false",
  simulateTouch:
    s.attr("data-simulate-touch") && !isNoviBuilder
      ? s.attr("data-simulate-touch") === "false"
      : false,
  onTransitionStart: function (swiper) {
    toggleSwiperInnerVideos(swiper);
  },
  onTransitionEnd: function (swiper) {
    toggleSwiperCaptionAnimation(swiper);
  },
  onInit: function (swiper) {
    toggleSwiperInnerVideos(swiper);
    toggleSwiperCaptionAnimation(swiper);

    if (!isRtl) {
      $window.on("resize", function () {
        swiper.update(true);
      });
    }
  },
});
