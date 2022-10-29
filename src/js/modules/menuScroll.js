import $ from 'jquery'

$(() => {
  $('.menu__item').on('click', (e) => {
    e.preventDefault()

    const target = $(e.target).closest('.menu__item').attr('href').slice(1)
    const $targetElem = $(`#${target}`)
    const windowWidth = $(window).width()
    if (windowWidth >= 994) {
      scrollTo($targetElem)
    } else {
      setTimeout(() => {
        scrollTo($targetElem)
      }, 250)
    }
  })
})

const scrollTo = ($targe) => {
  $('html, body').animate(
    {
      scrollTop: $targe.offset().top,
    },

    {
      duration: 500,
    }
  )
}
