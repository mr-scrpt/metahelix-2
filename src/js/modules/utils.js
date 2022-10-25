import $ from 'jquery'

export const hoverElement = (className) => {
  console.log('in module')
  const selector = `.${className}`
  const init = `${className}_init`
  const active = `${className}_active`

  $(document).on('mouseover', selector, (e) => {
    const $item = $(e.target).closest(selector)

    if ($item.hasClass(init)) {
      $item.removeClass(init)
      $item.addClass(active)
    }
  })

  $(document).on('mouseleave', selector, (e) => {
    const $item = $(e.target).closest(selector)

    if ($item.hasClass(active)) {
      $item.removeClass(active)
      $item.addClass(init)
    }
  })
}
