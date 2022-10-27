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
      dash: '345.5,345.5',
    },
    state_third: {
      index: 2,
      rotate: 113,
      dash: '345.5,345.5',
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
  let state = 'second'
  const $control = $('.diagram__control')

  $control.on('click', () => {
    switch (state) {
      case 'first':
        phaseItem(state, 'first')
        phaseItem(state, 'second')
        phaseItem(state, 'third')
        state = 'second'
        break
      case 'second':
        phaseItem(state, 'first')
        phaseItem(state, 'second')
        phaseItem(state, 'third')
        state = 'third'
        break
      case 'third':
        phaseItem(state, 'first')
        phaseItem(state, 'second')
        phaseItem(state, 'third')
        state = 'first'
        break
    }
  })

  const phaseItem = (phase, elem) => {
    const $item = $(`.diagram__item_${elem}`)
    const $svg = $item.find(`.diagram__svg`)
    const $circle = $svg.find('.diagram__circle')
    const $text = $item.find('.diagram__text')
    const currentItemState = diagram[`item_${elem}`][`state_${phase}`]
    const rotate = currentItemState.rotate
    const stroke = currentItemState.dash
    if (elem === 'third') {
      // $text.html(currentItemState.text).fadeIn(400)
      $text.fadeOut(125, function () {
        $(this).html(currentItemState.text).fadeIn(125)
      })
      return
    }
    $svg.css({ transform: `rotate(${rotate}deg)` })

    $circle.attr('stroke-dasharray', stroke)
  }
})
