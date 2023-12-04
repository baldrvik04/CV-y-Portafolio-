$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".move-top").fadeIn();
    } else {
      $(".move-top").fadeOut();
    }
  });
  $(".move-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
    return false;
  });
  $("a").click(function () {
    const gato = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(gato).offset().top - 70,
      },
      800
    );
  });
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});
