import $ from 'jquery'
import { TweenMax } from 'gsap'
import _ from 'underscore'
import reAlignProjects from './handleResize'
import * as HandleScroll from './handleScroll'
import 'izimodal'

export default class WebApp {
  constructor(props) {
    // RESIZABLE AND REPOSITIONABLE ELEMENTS
    this.header         = document.getElementById('ha-header')
    this.logoOnHeader   = document.getElementById('jumbotron-from-nav')
    this.postsContainer = document.getElementsByClassName('posts-container-container')
    this.particlesDiv   = document.getElementById('large-header')
    this.stars          = document.getElementsByClassName('star')
    this.projectsCont   = document.getElementsByClassName('projects-container')[0]
    this.projects       = document.getElementsByClassName('project')
    this.blogLinkFromNav= document.getElementById('blog-from-nav')
    this.isMobile       = false
    this.isMouseParticleShowing = true
    this.isStarsShowing = true
    this.scrollY        = $(window).scrollTop()
    this.width          = window.innerWidth

    this.reAlignProjects    = reAlignProjects
    this.logoOnHeaderToggle = HandleScroll.logoOnHeaderToggle
    this.particlesToggle    = HandleScroll.particlesToggle
    this.starsToggle        = HandleScroll.starsToggle
  }

  init() {
    new Promise((resolve, reject) => {
    $("#dh-modal-trigger").click(e => {
      e.preventDefault()
      $("#dh-modal").iziModal('open');
    })

    $("#dna-modal-trigger").click(e => {
      e.preventDefault()
      $("#dna-modal").iziModal('open');
    })

        $(".link-from-nav").click(function(event) {
          const destination = "#" + event.target.dataset.destination
          $('html, body').animate({
            scrollTop: $(destination).offset().top - 25
          }, 400);
        });
        if( (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
          this.isMobile = true
        }
        resolve(true)
      })
    .then(()=> { // SHRINK HEADER ACCORDINGLY
      if (this.scrollY < 384) {
        $(this.header).delay(400).addClass('ha-header-shrink');
      }
      this.logoOnHeaderToggle(this, this.scrollY)
    })
    .then(() => {
      this.reAlignProjects(this.width)
    }) 
    $(this.blogLinkFromNav).hover(function() {
      $('.posts-container-container').addClass('half-way')
    })
      .on('click', function() {
      $(this.postsContainer).toggleClass('half-way full-way')

    })
      .on('mouseleave', function() {
      $(this.postsContainer).removeClass('half-way full-way')
    })

    $(this.postsContainer).on('mouseenter', function() {
      TweenMax.staggerFromTo(document.getElementsByClassName('post-holder'), 0.5, {opacity: 0, top: 50}, {opacity: 1, top: 0}, 0.1) 
    })
    window.onresize = (e) => {
      this.width = e.currentTarget.innerWidth

      _.throttle(reAlignProjects(this, this.width), 500)
    }
    window.onscroll = (e) => {
      if(this.isMobile) {
        this.scrollY = e.currentTarget.pageYOffset

        _.throttle(this.logoOnHeaderToggle(this, this.scrollY), 50)
        _.throttle(this.particlesToggle(this,this.scrollY), 100)
        _.throttle(this.starsToggle(this, this.scrollY), 100)
      }
    }
  } // <-- END INIT
}

