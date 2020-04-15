// 手风琴
var lock = true;
var index = 0;
var ul_index = 0;
// 看鼠标在不在元素里面
var newlock = true;
function enter(index1, ul_index1) {
  /* if (!lock) {
    return;
  }
  lock = false;
  setTimeout(function () {
    lock = true;
  }, 600); */
  // 每排的li索引
  index = index1;
  //  ul索引
  ul_index = ul_index1;

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
  // 同行同ul索引
  $(`#accordion ul:nth-child(${ul_index + 1}) li`).css({
    width: '146.25',
    height: '470',
  });
}
$('#accordion ul li').mouseenter(function () {
  newlock = false;
  // 每排的li索引
  index = $(this).index();
  //  ul索引
  ul_index = $(this).parent('ul').index();

  enter(index, ul_index);
  // 点击的元素
  $(this).css({
    width: '375',
    height: '470',
  });
});

$('#accordion ul li').mouseleave(function () {
  newlock = true;
  // if (!lock) {
  $('#accordion ul li').css({
    width: '192',
    height: '170',
  });
  // }
});

setInterval(function () {
  if (newlock) {
    index++;
    if (index > 4) {
      index = 0;
      ul_index++;
      if (ul_index > 3) {
        index = 0;
        ul_index = 0;
      }
    }
    enter(index, ul_index);
    // 点击的元素
    // 同列同li索引
    $(`#accordion ul li:nth-child(${index + 1})`).css({
      width: '375',
    });
    // 同行同ul索引
    $(`#accordion ul:nth-child(${ul_index + 1}) li`).css({
      height: '470',
    });
  }
}, 3000);
