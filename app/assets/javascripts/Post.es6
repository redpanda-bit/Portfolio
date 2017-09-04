const Post = (function() {
  const all = [] 
  return function Post(title, link, id, img) {
            this.title = title
            this.link  = link
            if (title != undefined) {
              this.id = id
              all.push(this)
              this.renderThumbnail = function() { 
                return (
                  `<a id='${this.id}' href="${this.link}" target="_blank" class='post-holder hvr-glow'>
                  <div class='post-img' style='background-image: url(${postsImages[this.id - 1]}); background-size: cover'></div>
                  <div class='post-title'>${this.title}</div>
                  </a>`
                )
              }
            }
            this.all = all
        }

})()

function sleep(ms) {
  return new Promise(function(resolve) { return setTimeout(resolve, ms) });
}

async function fadeItIn(el) {
  if(!!el) {
    $(el).addClass('animated slideInUp')
    await sleep(80)
    // $(el).one('animationend', function() {
      fadeItIn(el.nextSibling)
      // })
      return
    }
  else {
    return
  }
}
// logoMain.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
//     function() {
//       logoMain.attr('style', 'display: none')
//     });

function createPostsFromXML(xml) {

  const postsFromXml = $( $(xml).find('item') ).toArray()

  postsFromXml.forEach(function(post, idx) {
    const postTitle = $($(xml).find('item')[idx]).find('title').text()
    const postLink  = $($($(xml).find('item')[idx]).find('link')[0]).text()
    const postDate  = $($(xml).find('item')[0]).find('pubDate').text()

    new Post(postTitle, postLink, postDate)
  })
  return Post.getAll()
}

function fetchPostsThumbnails() {
  const myHeaders = new Headers({
    'X-CSRF-Token': $('[name="csrf-token"]')[0].content
  })
  const params = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' }

fetch('/posts')
  .then(res => res.text())
  .then(textRes => $.parseXML(textRes))
  .then(xmlRes => createPostsFromXML(xmlRes))
  .then(posts => renderPostsThumbnails(posts))
}
p = new Post()
Post.getAll = function() { return p.all }
Post.find = function(id) { return Post.getAll().filter(post => post.id.toString() === id.toString())[0]}

async function addPostModalToDOM(post) {

  // $('#iframes-holder').append(`<div id="post${post.id}-iframe"></div>`)
  // initializePostModal(post)
}


function initializePostModal(post) {
  $(`#post${post.id}-iframe`).iziModal({
  closeOnEscape: true,
  closeButton: true,
  overlayClose: true,
  overlayColor: 'rgba(0, 0, 0, 0.4)',
  bodyOverflow: true,
  onOpening: function() {
    setTimeout(function() {
      iziToast.show({
        theme: 'dark',
        title: 'Hey!',
        message: 'All my Blog Posts look better on Medium.com!',
        position: 'topCenter', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
        progressBarColor: 'rgb(0, 255, 184)',
        buttons: [
          ['<button>See on Medium</button>', function(instance, toast) {
            instance.hide({
              transitionOut: 'fadeOutUp',
            }, toast, 'close', 'btn2');
            window.open(post.link)
          }],
          ['<button>Stay Here</button>', function(instance, toast) {
            instance.hide({
              transitionOut: 'fadeOutUp',
            }, toast, 'close', 'btn2');
          }]
        ],
      });
    }, 1500)
  }
});
}

function getAndSetPostContent(postId) {
  const post      = Post.find(postId)
  const postModal = $(`#post${post.id}-iframe .iziModal-content`)

  if (!post.content) {

    const setPostContent = fetch(post.link)
      .then(res => res.text())
      .then(res => {
        const content = scrapePostContentFromResponse(res)
        post.content  = content

        postModal.html(post.content)
      })

    return setPostContent
  }
}

function renderPostsThumbnails(posts) {
  const postsThumbnailsContainer = $('#posts-container')

  const allPostsThumbnailsHTML   = posts.map(function(post){
    // addPostModalToDOM(post)
    return post.renderThumbnail()
  }).join('')

    postsThumbnailsContainer.html(allPostsThumbnailsHTML)
    fadeItIn($('.post-holder')[0])

}

function scrapePostContentFromResponse(res) {
  const content = $.parseHTML(res)
          .find(el => el.className === 'site-main')
          .getElementsByClassName('postArticle-content')[0]

  return content
}

var fetched = false
function fetchPostsThumbnailsFromDB() {
  if (!fetched) {
    fetched = true
    fetch('/posts')
    .then(res => res.json())
    .then(postsJSON => createPostsFromJSON(postsJSON))
    .then(posts => renderPostsThumbnails(posts))
  }
}
function createPostsFromJSON(posts) {
  posts.reverse().forEach(function(post) {
    const newPost = new Post(post.title, post.link, post.id)
  })
  return Post.getAll()
}