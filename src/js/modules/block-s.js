import $ from 'jquery'

$(document).ready(() => {
  /* Настройки */
  const mainClass = `block-s`
  /* Настройки КОНЕЦ*/

  const $menuCollection = $(`.${mainClass}`)
  $menuCollection.each((idx, item) => {
    const $menu = $(item)
    const $parent = $menu.parent('.page__menu')
    let mobileSize = $(item).attr('data-adaptive-width')
    const $inner = $menu.children(`.${mainClass}__inner`)
    const $body = $inner.children(`.${mainClass}__body`)
    const $controller = $menu.find(`.${mainClass}__controller`)

    const $itemCollection = $menu.find(`.menu__item`)
    /*const $outerMenuBlock = $(".menu-info");*/
    clearClassAndStyle($menu, $body, mainClass, mobileSize)
    controllMenu($controller, mainClass, mobileSize)
    controllMenu($itemCollection, mainClass, mobileSize)
    closeOutsideMenu($body, mainClass)
    adaptiveMode(mobileSize, $body)
    offsetBody($parent, $body, mobileSize)

    $(window).resize(() => {
      mobileSize = $(item).attr('data-adaptive-width')
      clearClassAndStyle($menu, $body, mainClass, mobileSize)
      adaptiveMode(mobileSize, $body)
      offsetBody($parent, $body, mobileSize)
      controllMenu($controller, mainClass)
    })
  })
})

const checkMobileMode = (mobileSize) => {
  let width = getSize()
  if (width < mobileSize) {
    return true
  }
  return false
}

const offsetBody = ($inner, $body, mobileSize) => {
  const mode = checkMobileMode(mobileSize)
  let width = getSize()
  if (mode) {
    const height = $inner.outerHeight()
    $body.css({ top: height })
  } else {
    $body.css({ top: 'auto' })
  }
}

const adaptiveMode = (mobileSize, $body) => {
  const mode = checkMobileMode(mobileSize)
  if (!mode) {
    $body.css({ position: 'relative', transform: 'translateX(0)' })
  } else {
    $body.removeAttr('style')
  }
}

const closeMenu = ($menu, mainClass) => {
  const [curretnClass] = $menu.attr('class').split(/\s+/)
  const $controllerIcon = $menu.find(`.icon_burger`)
  const $controllerText = $menu.find(`.${curretnClass}__controller-text`)
  const $page = $('body')
  if ($menu.hasClass(`${mainClass}_open`)) {
    $menu.removeClass(`${mainClass}_open`)
    $menu.addClass(`${mainClass}_close`)
    $controllerIcon.removeClass(`icon_burger_active`)
    $controllerText.removeClass(`${curretnClass}__controller-text_active`)
  } else {
    $menu.removeClass(`${mainClass}_close`)
    $menu.addClass(`${mainClass}_open`)
    $controllerIcon.addClass(`icon_burger_active`)
    $controllerText.addClass(`${curretnClass}__controller-text_active`)
  }
  if ($page.hasClass('page_overflow')) {
    $page.removeClass('page_overflow')
  } else {
    $page.addClass('page_overflow')
  }
}
const controllMenu = ($controller, mainClass, mobileSize) => {
  $controller.on('click', (e) => {
    e.stopPropagation()
    const mode = checkMobileMode(mobileSize)

    if (mode) {
      const $currentMenu = $(e.target).closest(`.${mainClass}`)
      closeMenu($currentMenu, mainClass)
    }
  })
}
const closeOutsideMenu = ($body, mainClass) => {
  $body.on('click', (e) => {
    e.stopPropagation()
  })

  $('html').click(function () {
    const $openMenu = $(`.${mainClass}_open`)
    $openMenu.each(function (_, item) {
      const $currentMenu = $(item)
      closeMenu($currentMenu, mainClass)
      /*$(item).hasClass(`${mainClass}_open`) &&
				$(item).removeClass(`${mainClass}_open`) &&
				$(item).addClass(`${mainClass}_close`);*/
    })
  })
}

const clearClassAndStyle = ($menu, $body, mainClass, mobileSize) => {
  let width = getSize()
  if (width >= mobileSize) {
    if ($menu.hasClass(`${mainClass}_close`)) {
      $menu.removeClass(`${mainClass}_close`)
    }

    if ($menu.hasClass(`${mainClass}_open`)) {
      $menu.removeClass(`${mainClass}_open`)
    }

    $body.removeAttr('style')
  }
}

const getSize = () => $(window).width()
