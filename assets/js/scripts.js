var __c = function (selector) {
  return document.querySelector(selector);
};
var __id = function (selector) {
  return document.getElementById(selector);
};

// Toggle show search bar
let searchOpen = __id('inkednotes__search');

searchOpen.addEventListener('click', (e) => {
  if(e.target.parentElement.classList.contains('inkednotes__search')) {
    e.target.parentElement.classList.toggle('inkednotes__search--open');
  }

  __id('search').classList.toggle('search__open');
  __id("s").focus();
  e.preventDefault();
})

// Create element for sidebar categories overlay
var sidebar_overlay = document.createElement('div');
sidebar_overlay.classList.add('sidebar__overlay')
document.body.appendChild(sidebar_overlay);

// Toggle show sidebar categories
__c('.toggle__categories').addEventListener('click', function(e) {
  __c('body').classList.toggle('open__categories');

  __c('.sidebar__overlay').classList.toggle('sidebar__overlay--active')


  // remove sidebar categories
  __c('.sidebar__overlay--active').addEventListener('click', function() {
    __c('body').classList.remove('open__categories');
    this.classList.remove('sidebar__overlay--active');
  });

  e.preventDefault();
});
