$(function () {
  //   カルーセル
  $(".carousel").slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 3500,
    arrows: false,
    fade: true,
    speed: 1000,
  });

  // ボタンの不透明度 mouse on
  $(".home,.nav,.images").on("mouseover", function () {
    $(this).animate(
      {
        opacity: 0.5,
      },
      100
    );
  });
  // ボタンの不透明度 mouse out
  $(".home,.nav,.images").on("mouseout", function () {
    $(this).animate(
      {
        opacity: 1.0,
      },
      100
    );
  });

  //   TOPに戻るボタン
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $(".top-btn").fadeIn();
    } else {
      $(".top-btn").fadeOut();
    }
  });

  //   ページ内リンクのスクロールをなめらかにする
  $('a[href^="#"]').on("click", function (event) {
    event.preventDefault(); //デフォルトのリンク動作を防ぐ
    const target = $(this).attr("href"); //クリックしたときのhref属性を取得
    let targetScroll; //スクロール先を格納
    if (target === "#") {
      targetScroll = $("html");
    } else {
      targetScroll = $(target);
    }
    const position = targetScroll.offset().top; //上からの位置を取得
    $("html, body").animate({ scrollTop: position }, 500, "swing");
  });
});
