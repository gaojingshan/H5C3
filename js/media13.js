// 净位置

$('.tab span').click(function () {
  var offset_left = $(this).offset().left;
  //   console.log(getComputedStyle($('.tab span')).width);
  var index = $(this).index();
  console.log($('.tab span').eq(index).css('width'));
  $('.tab i').css('left', offset_left);
});
// console.log();
