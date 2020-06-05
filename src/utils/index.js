// 锁定背景
export const lock = (bodyClass => {
  let scrollTop
  return {
    open: function () {
      scrollTop = document.scrollingElement.scrollTop || document.body.scrollTop
      document.body.classList.add(bodyClass)
      document.body.style.top = -scrollTop + 'px'
    },
    close: function () {
      if (document.body.classList.contains(bodyClass)) {
        document.body.classList.remove(bodyClass)
        document.scrollingElement.scrollTop = scrollTop
      }
    }
  }
})('km-lock-bg')

/**
 * 简单的移动函数
 * @param {HTML Object} el 目标节点
 * @param {number} x 水平方向的移动
 * @param {number} y 垂直方向的移动
 * @param {Object} options 可选参数
 * @param {Boolean} options.useTransfrom 是否通过transfrom来移动元素
 * @param {Boolean} options.transitionTimingFunction translate的timingFunction
 * @param {String} options.transitionDuration translate时间
 */
export function translate(el, x = 0, y = 0, options) {
  if (!el) return
  const defaultOptions = {
    useTransfrom: true,
    transitionTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    transitionDuration: '.4s'
  }
  for (const option in options) {
    defaultOptions[option] = options[option]
  }
  if (defaultOptions.useTransfrom) {
    el.style.transform = `translate3d(${x}px,${y}px,0)`
    el.style.transitionProperty = 'transform'
    el.style.transitionTimingFunction = defaultOptions.transitionTimingFunction
    el.style.transitionDuration = defaultOptions.transitionDuration
  } else {
    el.style.left = x
    el.style.top = y
  }
}
