'use strict';

function fadeItIn(el) {
  if(!!el) {
    $(el).addClass('animated slideInUp')
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

function addPostModalToDOM(post) {

  // $('#iframes-holder').append(`<div id="post${post.id}-iframe"></div>`)
  // initializePostModal(post)
}

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Post = function () {
  var all = [];
  return function Post(title, link, id, img) {
    this.title = title;
    this.link = link;
    if (title != undefined) {
      this.id = id;
      all.push(this);
      this.renderThumbnail = function () {
        return '<a id=\'' + this.id + '\' href="' + this.link + '" target="_blank" class=\'post-holder hvr-glow\'>\n                  <div class=\'post-img\' style=\'background-image: url(' + postsImages[this.id - 1] + '); background-size: cover\'></div>\n                  <div class=\'post-title\'>' + this.title + '</div>\n                  </a>';
      };
    }
    this.all = all;
  };
}();

function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

function createPostsFromXML(xml) {

  var postsFromXml = $($(xml).find('item')).toArray();

  postsFromXml.forEach(function (post, idx) {
    var postTitle = $($(xml).find('item')[idx]).find('title').text();
    var postLink = $($($(xml).find('item')[idx]).find('link')[0]).text();
    var postDate = $($(xml).find('item')[0]).find('pubDate').text();

    new Post(postTitle, postLink, postDate);
  });
  return Post.getAll();
}

function fetchPostsThumbnails() {
  var myHeaders = new Headers({
    'X-CSRF-Token': $('[name="csrf-token"]')[0].content
  });
  var params = { method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default' };

  fetch('/posts').then(function (res) {
    return res.text();
  }).then(function (textRes) {
    return $.parseXML(textRes);
  }).then(function (xmlRes) {
    return createPostsFromXML(xmlRes);
  }).then(function (posts) {
    return renderPostsThumbnails(posts);
  });
}
var p = new Post();
Post.getAll = function () {
  return p.all;
};
Post.find = function (id) {
  return Post.getAll().filter(function (post) {
    return post.id.toString() === id.toString();
  })[0];
};

function initializePostModal(post) {
  $('#post' + post.id + '-iframe').iziModal({
    closeOnEscape: true,
    closeButton: true,
    overlayClose: true,
    overlayColor: 'rgba(0, 0, 0, 0.4)',
    bodyOverflow: true,
    onOpening: function onOpening() {
      setTimeout(function () {
        iziToast.show({
          theme: 'dark',
          title: 'Hey!',
          message: 'All my Blog Posts look better on Medium.com!',
          position: 'topCenter', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
          progressBarColor: 'rgb(0, 255, 184)',
          buttons: [['<button>See on Medium</button>', function (instance, toast) {
            instance.hide({
              transitionOut: 'fadeOutUp'
            }, toast, 'close', 'btn2');
            window.open(post.link);
          }], ['<button>Stay Here</button>', function (instance, toast) {
            instance.hide({
              transitionOut: 'fadeOutUp'
            }, toast, 'close', 'btn2');
          }]]
        });
      }, 1500);
    }
  });
}

function getAndSetPostContent(postId) {
  var post = Post.find(postId);
  var postModal = $('#post' + post.id + '-iframe .iziModal-content');

  if (!post.content) {

    var setPostContent = fetch(post.link).then(function (res) {
      return res.text();
    }).then(function (res) {
      var content = scrapePostContentFromResponse(res);
      post.content = content;

      postModal.html(post.content);
    });

    return setPostContent;
  }
}

function renderPostsThumbnails(posts) {
  var postsThumbnailsContainer = $('#posts-container');

  var allPostsThumbnailsHTML = posts.map(function (post) {
    // addPostModalToDOM(post)
    return post.renderThumbnail();
  }).join('');

  postsThumbnailsContainer.html(allPostsThumbnailsHTML);
  fadeItIn($('.post-holder')[0]);
}

function scrapePostContentFromResponse(res) {
  var content = $.parseHTML(res).find(function (el) {
    return el.className === 'site-main';
  }).getElementsByClassName('postArticle-content')[0];

  return content;
}

var fetched = false;
function fetchPostsThumbnailsFromDB() {
  if (!fetched) {
    fetched = true;
    $.get('/posts', function (res) {
      renderPostsThumbnails(createPostsFromJSON(res));
    });
  }
}
function createPostsFromJSON(posts) {
  posts.reverse().forEach(function (post) {
    var newPost = new Post(post.title, post.link, post.id);
  });
  return Post.getAll();
}