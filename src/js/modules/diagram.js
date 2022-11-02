import $ from 'jquery'
const diagram = {
  item_control: {
    state_first: {
      rotate: 0,
    },
    state_second: {
      rotate: -90,
    },
    state_third: {
      rotate: -180,
    },
  },
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
      text: '6,500',
    },
    state_second: {
      text: '555',
    },
    state_third: {
      text: '445',
    },
  },
  item_text: {
    state_first: {
      line_first: '5,000 Helixes',
      line_second: 'will be up for sale',
    },
    state_second: {
      line_first: '555 NFTs will be kept by the team',
      line_second: 'for marketing and general promotional purpuses',
    },
    state_third: {
      line_first: '445 Helixes will be given',
      line_second: "away to the first collection's NFT holders",
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
        phaseArrow(state)
        phaseText(state)
        state = 'second'
        break
      case 'second':
        phaseItem(state, 'first')
        phaseItem(state, 'second')
        phaseItem(state, 'third')
        phaseArrow(state)
        phaseText(state)
        state = 'third'
        break
      case 'third':
        phaseItem(state, 'first')
        phaseItem(state, 'second')
        phaseItem(state, 'third')
        phaseArrow(state)
        phaseText(state)
        state = 'first'
        break
    }
  })
  const getPhaseData = (phase, item) =>
    diagram[`item_${item}`][`state_${phase}`]
  const animationText = ($elem, text, duration) => {
    $elem.fadeOut(duration, function () {
      $(this).html(text).fadeIn(duration)
    })
  }
  const phaseText = (phase) => {
    const { line_first, line_second } = getPhaseData(phase, 'text')
    const $textBox = $('.diagram__textbox')
    const $textLineFirst = $textBox.find('.diagram__text_first')
    const $textLineSecond = $textBox.find('.diagram__text_second')
    animationText($textLineFirst, line_first, 125)
    animationText($textLineSecond, line_second, 125)
  }
  const phaseArrow = (phase) => {
    const data = getPhaseData(phase, 'control')
    const rotate = data.rotate
    $control.css({ transform: `rotate(${rotate}deg)` })
  }
  const phaseItem = (phase, elem) => {
    const $item = $(`.diagram__item_${elem}`)
    const $svg = $item.find(`.diagram__svg`)
    const $circle = $svg.find('.diagram__circle')
    const $value = $item.find('.diagram__value')
    const data = getPhaseData(phase, elem)

    console.dir({ data })
    const { rotate, dash } = data
    if (elem === 'third') {
      const { text } = data
      animationText($value, text, 125)
      return
    }
    $svg.css({ transform: `rotate(${rotate}deg)` })

    $circle.attr('stroke-dasharray', dash)
  }
})
