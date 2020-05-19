/**  dom 操作 */

/** 获取根节点的scrollTop */
export function getRootScrollTop () {
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  )
}

/** 获取dom节点的scrollTop */
export function getScrollTop (el) {
  return 'scrollTop' in el ? el.scrollTop : el.pageYOffset
}

/**  */
export function getElementTop (el, scroller) {
  const scrollTop = scroller ? getScrollTop(scroller) : getRootScrollTop() // 滚动距离
  return el.getBoundingClientRect().top + scrollTop
}
