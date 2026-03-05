// Eden Life v2 — site.js

document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var toggle = document.getElementById('nav-toggle');
  var mobileNav = document.getElementById('mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', mobileNav.classList.contains('open'));
    });
  }

  // Mobile accordion sub-menus
  document.querySelectorAll('.mnav-group-head').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var sub = this.nextElementSibling;
      if (sub) sub.classList.toggle('open');
      this.classList.toggle('open');
    });
  });

  // Accordion (FAQ / Beliefs)
  document.querySelectorAll('.accordion-head').forEach(function (btn) {
    btn.addEventListener('click', function () {
      this.nextElementSibling.classList.toggle('open');
      this.setAttribute('aria-expanded', this.nextElementSibling.classList.contains('open'));
    });
  });

  // Amount selector on give page
  document.querySelectorAll('.amount-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.amount-btn').forEach(function (b) { b.classList.remove('selected'); });
      this.classList.add('selected');
      var ci = document.getElementById('custom-amount');
      if (ci && this.dataset.amount) ci.value = this.dataset.amount;
    });
  });

});
