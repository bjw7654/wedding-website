/* Small bits of interactivity for the wedding site:
   1. The mobile navigation menu toggle
   2. The home-page photo slideshow
   3. The countdown clock
   No editing needed here — this just makes things work. */
(function () {
  "use strict";

  /* ---- 1. Mobile menu ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  /* ---- 2. Hero slideshow ---- */
  var slides = document.querySelectorAll(".hero__slide");
  if (slides.length > 1) {
    var current = 0;
    window.setInterval(function () {
      slides[current].classList.remove("is-active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("is-active");
    }, 5000);
  }

  /* ---- 3. Countdown clock ---- */
  var clock = document.querySelector(".countdown");
  if (clock) {
    var raw = clock.getAttribute("data-wedding-date");
    var target = new Date(raw).getTime();

    var elDays = clock.querySelector("[data-days]");
    var elHours = clock.querySelector("[data-hours]");
    var elMinutes = clock.querySelector("[data-minutes]");
    var elSeconds = clock.querySelector("[data-seconds]");

    var set = function (el, value) {
      if (el) el.textContent = value;
    };

    var tick = function () {
      if (isNaN(target)) return;
      var diff = target - Date.now();
      if (diff < 0) diff = 0;

      set(elDays, Math.floor(diff / 86400000));
      set(elHours, Math.floor((diff % 86400000) / 3600000));
      set(elMinutes, Math.floor((diff % 3600000) / 60000));
      set(elSeconds, Math.floor((diff % 60000) / 1000));
    };

    tick();
    window.setInterval(tick, 1000);
  }
})();
