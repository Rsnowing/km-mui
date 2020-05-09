
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
})('lock-bg')
