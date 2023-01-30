$(function () {
  // 고탑
  $(window).scroll(function () {
    // html 안에 스크립트 문서를 js 폴더에 그대로 배낄 때 $function사용
    if ($(this).scrollTop() > 100) {
      // this는 윈도우를 의미
      $('.gotop').fadeIn()
      // 만약 고탑의 스크롤 탑이 800보다 크면 gotop아이콘이 나타나게
    } else {
      $('.gotop').fadeOut()
      // 만약 고탑의 스크롤 탑이 800보다 작으면 gotop아이콘이 사라지게
    }
  })

  $('.gotop').click(function () {
    $('html').animate({ scrollTop: 0 }, 300)
  })
})
