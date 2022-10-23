import $ from 'jquery'

$(() => {
  //const $control = $('.control-diagram')
  const $diagramSection = $('.diagram')

  const $spin_1 = $('.diagram__item_first').find('.pie')
  const $spin_2 = $('.diagram__item_second').find('.pie')
  const $spin_text = [{ name: 'test' }]
  const $section = $('.token')
  $(document).on('click', '.control-diagram', () => {
    if ($section.hasClass('token_init')) {
      $spin_1.css(diagramStyle.diagram_1.active)
      $spin_2.css(diagramStyle.diagram_2.active)

      $diagramSection.removeClass('diagram_init')
      $diagramSection.addClass('diagram_active')

      $section.removeClass('token_init')
      $section.addClass('token_active')
      console.log('if')
    } else if ($section.hasClass('token_active')) {
      console.log('else if')
      $spin_1.css(diagramStyle.diagram_1.init)
      $spin_2.css(diagramStyle.diagram_2.init)

      $diagramSection.addClass('diagram_init')
      $diagramSection.removeClass('diagram_active')

      $section.addClass('token_init')
      $section.removeClass('token_active')
    }

    /*  if ($section.hasClass('token_active')) {
      $spin_1.css(diagramStyle.diagram_1.init)
      $spin_2.css(diagramStyle.diagram_2.inti)
      $section.addClass('token_init')
      $section.removeClass('token_active')
    } */
  })
})

const diagramStyle = {
  diagram_1: {
    init: {
      '--p': '90',
      '--b': '80px',
      '--c': '#142f5e',
      '--w': '250px',
      '--r': '-110deg',

      '--d-p': '90',
      '--d-b': '100px',
      '--d-c': '#142f5e',

      '--d-w': '450px',
      '--d-r': '-110deg',
    },
    active: {
      '--p': '10',
      '--c': '#031F31',
      '--r': '-146deg',

      '--d-p': '10',
      '--d-c': '#031F31',
      '--d-r': '-146deg',
    },
  },
  diagram_2: {
    init: {
      '--p': '10',
      '--b': '60px',
      '--c': '#031F31',

      '--w': '200px',
      '--r': '-146deg',

      '--d-p': '10',
      '--d-b': '80px',
      '--d-c': '#031F31',
      '--d-w': '400px',
      '--d-r': '-146deg',
    },
    active: {
      '--p': '90',
      '--c': '#142f5e',
      '--r': '-110deg',

      '--d-p': '90',
      '--d-c': '#142f5e',
      '--d-r': '-110deg',
    },
  },
}

/* '--p': '10',
'--b': '60px',
'--w': '200px',
'--r': '-146deg',

'--d-p': '10',
'--d-b': '80px',
'--d-w': '400px',
'--d-r': '-146deg', */

/* '--p': '90',
'--b': '80px',

'--w': '250px',
'--r': -'110deg',

'--d-p': '90',
'--d-b': '100px',

'--d-w': '450px',
'--d-r': -'110deg', */
