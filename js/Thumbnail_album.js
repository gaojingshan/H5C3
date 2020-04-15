// 获取img上面的alt，赋值给它下面的p标签
$('.container .mainframe li').mouseenter(function () {
  var p_text = $(this).children()[0].getAttribute('alt');
  $(this).children().eq(1).children().eq(0).text(p_text);
});

// 点击缩略图在左边放大显示
$('#container .thumbnails .thumbnailimage').click(function () {
  var index = $(this).index();
  // console.log(index);
  $('#container .mainframe li')
    .eq(index + 1)
    .slideDown()
    .siblings()
    .slideUp();
});
