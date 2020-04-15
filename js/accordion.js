// 手风琴
var lock = true;
var index;
var ul_index;
$('#accordion ul li').mouseenter(function () {
  if (!lock) {
    return;
  }
  lock = false;
  setTimeout(function () {
    lock = true;
  }, 600);
  // 每排的li索引
  index = $(this).index();
  //  ul索引
  ul_index = $(this).parent('ul').index();

  // 与点击元素不同行不同列的
  $('#accordion ul li').css({
    width: '146.25',
    height: '70',
  });
  // 同列同li索引 好了第一个开始的
  $(`#accordion ul li:nth-child(${index + 1})`).css({
    width: '375',
    height: '70',
  });
  /* $('#accordion ul li').eq(index).css({
    width: '375',
    height: '70',
  }); */
  // 同行同ul索引
  $(`#accordion ul:nth-child(${ul_index + 1}) li`).css({
    width: '146.25',
    height: '470',
  });
  // 点击的元素
  $(this).css({
    width: '375',
    height: '470',
  });
});

$('#accordion ul li').mouseleave(function () {
  if (!lock) {
    $('#accordion ul li').css({
        width: '192',
        height: '170',
      });
  }
});

setInterval(function () {
  if (lock) {
    /* index++;
    console.log(index); */
    // $('#accordion ul li').trigger('mouseenter');
  }
}, 1000);
