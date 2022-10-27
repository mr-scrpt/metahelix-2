import $ from 'jquery'
const diagram = {
  item_first: {
    state_first: {
      index: 2,
      rotate: 150,
      dash: '310,345.5',
    },
    state_second: {
      index: 1,
      rotate: 130,
      dash: '20,345.5',
    },
    state_third: {
      index: 1,
      rotate: 120,
      dash: '20,345.5',
    },
  },
  item_second: {
    state_first: {
      index: 1,
      rotate: 113,
      dash: '35.4,345.5',
    },
    state_second: {
      index: 2,
      rotate: '113',
      dash: '310,345.5',
    },
    state_third: {
      index: 2,
      rotate: 113,
      dash: '310,345.5',
    },
  },
  item_third: {
    state_first: {
      text: '5000',
    },
    state_second: {
      text: '555',
    },
    state_third: {
      text: '444',
    },
  },
}

$(() => {
  let state = 1
  const $control = $('.diagram__control')
  const $svg_first = $('.diagram__svg_first')
  const $svg_second = $('.diagram__svg_second')
  const $svg_third = $('.diagram__svg_third')

  const $circle_first = $svg_first.find('.diagram__circle')
  const $circle_second = $svg_second.find('.diagram__circle')
  const $circle_third = $svg_third.find('.diagram__circle')

  console.log('ff', $svg_first, $svg_second, $svg_third)
})
