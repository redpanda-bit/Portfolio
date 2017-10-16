import $ from 'jquery'
export function logoOnHeaderToggle(webApp, scrollY) {
  
  if (scrollY > 384 && $(window).width() > 970) {
    $(webApp.logoOnHeader).show();
    $(webApp.logoOnHeader).removeClass('fadeOutDownBig');
    $(webApp.logoOnHeader).addClass('fadeInUp');
  } 
  else if (scrollY < 384 || $(window).width() < 970) {
    $(webApp.logoOnHeader).addClass('fadeOutDownBig')
    $(webApp.logoOnHeader).removeClass('fadeInUp')
  }
}

export function particlesToggle(webApp, scrollY) {
  let isWithinRage = scrollY >= 600 && scrollY <= 1300
  if (isWithinRage && !webApp.isMouseParticleShowing) {
    webApp.particlesDiv.style = `position: fixed; height: 100%; opacity: 1;z-index: -1`
    webApp.isMouseParticleShowing = true
    return
  }
  else if (!webApp.isWithinRage && webApp.isMouseParticleShowing) {
    webApp.particlesDiv.style = `position: fixed; height: 100%; opacity: 0; z-index: -1`
    webApp.isMouseParticleShowing = false
    return
  }
}

export function starsToggle(webApp, scrollY) {
  let isWithinRage = webApp.scrollY >= 1550 && webApp.scrollY <= 2200
  if (isWithinRage && !webApp.isStarsShowing) {
    new Array(webApp.stars).forEach(el => $(el).show())
    webApp.isStarsShowing = true
    return
  }
  else if (!isWithinRage && webApp.isStarsShowing) {
    new Array(webApp.stars).forEach(el => $(el).hide())
    webApp.isStarsShowing = false
    return
  }
}