
(function () {
/* var doc1 = document */
  var docEl = document.documentElement
  var win = window

  function refreshRem () {
    var width = docEl.getBoundingClientRect().width
    /* if (width > 480) {width = 480 } */
    // 按照640比例可以直接用设计图尺寸除100
    var rem = width / 640 * 100
    docEl.style.fontSize = rem + 'px'
  }

  var tid
  win.addEventListener('resize', function () {
    clearTimeout(tid)
    tid = setTimeout(refreshRem, 300)
  }, false)
  win.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      clearTimeout(tid)
      tid = setTimeout(refreshRem, 300)
    }
  }, false)

  refreshRem()
})()
