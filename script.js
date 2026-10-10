(function () {
  "use strict";
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector("#site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      });
    });
  }

  var year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Download package links now open their dedicated details page.
  // The actual binary download is enabled per package in downloads/index.html.


  // Reveal sections as they enter the viewport; fall back to visible content if unsupported.
  var revealTargets = document.querySelectorAll(
    ".welcome-grid > *, .hello-code-copy, .code-window, .features-heading, .feature-card, .downloads-heading > *, .release-card, .download-footnote, .closing-section > *"
  );
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.classList.add("reveal-ready");
    revealTargets.forEach(function (element, index) {
      element.classList.add("reveal");
      if (element.matches(".welcome-grid > :first-child, .hello-code-copy")) element.classList.add("reveal-from-left");
      if (element.matches(".welcome-grid > :last-child, .code-window")) element.classList.add("reveal-from-right");
      if (element.matches(".feature-card, .release-card")) element.style.transitionDelay = (Math.min(index % 3, 2) * 90) + "ms";
    });
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -35px 0px" });
    revealTargets.forEach(function (element) { revealObserver.observe(element); });
  }

}());
