// 净位置

$('.tab span').click(function () {
  var offset_left = $(this).offset().left;
//   console.log(getComputedStyle($('.tab span')).width);
//   console.log($('.tab span').eq(0).width);
  $('.tab i').css('left', offset_left);
});
// console.log();
