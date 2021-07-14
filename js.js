//スクロール発火イベント
//window.addEventListener( "scroll" ,function(){

  //スクロールの高さを取得
  //let scroll = window.pageYOffset;

//const scrollEvent = function () {
//    window.addEventListener("scroll", function () {
        // ここに処理を書いていく
//    });
//};

//scrollEvent();






const scrollEvent = function () {
    window.addEventListener("scroll", function () {
        // スクロール量の取得
        let scrollValue = window.pageYOffset;

        // 要素の取得
        let scrollEle = document.querySelector(".scroll");

        // 取得した要素のtop値の取得 + スクロール量
        let scrollTop = scrollEle.getBoundingClientRect().top + scrollValue;

        // 画面の高さを取得
        let windowHeight = window.innerHeight;

        // はみ出させる値（お好みで設定）
        let value = 100;

        // 条件設定
        if (scrollValue > scrollTop - windowHeight + value) {
            scrollEle.classList.add("js-fade");
        }
    });
};

scrollEvent();


$(function() {
	$(".hamburger").on("click", function() {
		
		$(".hamburger,.spnav").toggleClass("active");
		//$(".spnav").toggleClass("active");
	});
});





$(function() {
$('a[href^="."]').click(function() {
		$(".hamburger,.spnav").toggleClass("active");
  // スクロールの速度
  let speed = 400; // ミリ秒で記述
  let href = $(this).attr("href");
  let target = $(href == "." || href == "" ? 'html' : href);
  let position = target.offset().top;
  $('body,html').animate({
    scrollTop: position
  }, speed, 'swing');
  return false;
});
	});
