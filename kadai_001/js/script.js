$(function () {
  //  1カルーセル
  $(".carousel").slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 3500,
    arrows: false,
    fade: true,
    speed: 1000,
  });

  // 2ボタンの不透明度 mouse on
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

  //  3TOPに戻るボタン
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $(".top-btn").fadeIn();
    } else {
      $(".top-btn").fadeOut();
    }
  });

  //  4ページ内リンクのスクロールをなめらかにする
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

  //  5スクロールしたときにセクションをフェードインさせる
  $(window).on("scroll", function () {
    // スクロール位置とウィンドウの高さを取得
    const scrollPos = $(window).scrollTop();
    const windowHeight = $(window).height();

    // フェードインさせたい各セクションをループで処理
    $(".about, .works").each(function () {
      const sectionTop = $(this).offset().top; // セクションの上端位置を取得
      if (scrollPos > sectionTop - windowHeight + 100) {
        // 調整用の100pxを追加
        $(this).addClass("fade-in"); // クラス追加でフェードイン
      }
    });
  });

  //  6モーダル
  // 画像がクリックされたときモーダル表示
  $(".images").on("click", function () {
    const imgSrc = $(this).attr("src"); //画像のsrcを取得
    $(".modalImg").attr("src", imgSrc); // モーダルのimg要素のsrc属性に設定
    $("#modal").fadeIn(); //モーダルの表示
    $(".top-btn").hide(); //TOPにもどるボタンを隠す
  });
  // モーダルを閉じる
  $("#modalClose").on("click", function () {
    $("#modal").fadeOut();
    $(".top-btn").show();
  });
});
