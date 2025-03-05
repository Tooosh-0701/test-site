
$(function () {

  $(".hamburger").on("click", function () {
    $("header").toggleClass("open");
  });

  $("#header_nav a").on("click", function () {
    $("header").toggleClass("open");
  });

  $(document).ready(function () {
    $(".hamburger").click(function () {
      $(".nav_menu").toggleClass("open"); // メニューの開閉
      $(".site_title").toggleClass("hide"); // site_titleを非表示
      $(".header_inner").toggleClass("transparent"); // 背景色を解除
    });
  });

  $(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う
    $(".fadein").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });

  $(window).scroll(function () {
    $(".inview_slide_left").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("slide_left");
      }
    });
  });

  $(window).scroll(function () {
    $(".inview_slide_right").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("slide_right");
      }
    });
  });

  $('.slider').slick({
    autoplay: false,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
    speed: 1000,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows: true,//左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
    pauseOnFocus: false,//フォーカスで一時停止を無効
    pauseOnHover: false,//マウスホバーで一時停止を無効
    pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
  });

  //スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
  $('.slider').on('touchmove', function (event, slick, currentSlide, nextSlide) {
    $('.slider').slick('slickPlay');
  });


  //アコーディオンをクリックした時の動作
  $('.menu_item').on('click', function () {//タイトル要素をクリックしたら
    var findElm = $(this).next(".menu_content");//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作

    if ($('.menu_button').hasClass('close')) {//タイトル要素にクラス名closeがあれば
      $('.menu_button').removeClass('close');//クラス名を除去し
    } else {//それ以外は
      $('.menu_button').addClass('close');//クラス名closeを付与
    }
  });

  //ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
  $(window).on('load', function () {
    $('.accordion-area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
    $(".open").each(function (index, element) {	//openクラスを取得
      var Title = $(element).children('.title');	//openクラスの子要素のtitleクラスを取得
      $(Title).addClass('close');				//タイトルにクラス名closeを付与し
      var Box = $(element).children('.box');	//openクラスの子要素boxクラスを取得
      $(Box).slideDown(500);					//アコーディオンを開く
    });
  });


  $('.menu_item_slider').slick({
    arrows: false,//左右の矢印はなし
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
    speed: 6900,//スライドのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
    pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
    cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
    slidesToShow: 4,//スライドを画面に4枚見せる
    slidesToScroll: 1,//1回のスライドで動かす要素数
    responsive: [
      {
        breakpoint: 769,//モニターの横幅が769px以下の見せ方
        settings: {
          slidesToShow: 2,//スライドを画面に2枚見せる
        }
      },
      {
        breakpoint: 426,//モニターの横幅が426px以下の見せ方
        settings: {
          slidesToShow: 1.5,//スライドを画面に1.5枚見せる
        }
      }
    ]
  });


});


document.addEventListener("DOMContentLoaded", function () {
  function changeImages() {
    const images = document.querySelectorAll(".main_vis li img");
    if (window.innerWidth <= 740) {
      images[0].src = "img/main1.png";
      images[1].src = "img/main2.png";
      images[2].src = "img/main3.png";
    } else {
      images[0].src = "img/main1_large.jpg";
      images[1].src = "img/main2_large.jpg";
      images[2].src = "img/main3_large.jpg";
    }
  }

  // ページ読み込み時に実行
  changeImages();

  // ウィンドウリサイズ時にも変更
  window.addEventListener("resize", changeImages);
});


