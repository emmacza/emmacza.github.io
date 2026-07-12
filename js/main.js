/* ==========================================================================
   EMMA CZA — MAIN.JS
   ==========================================================================
   Small, dependency-free enhancements only. Nothing here is required for
   the site to work — every page is fully usable with JavaScript turned
   off. This file just makes a few things nicer:

     1. Mobile navigation toggle
     2. Automatic current year in the footer
     3. CV print button
     4. A tiny "currently" status timestamp (optional flourish)

   Each section below is self-contained, so you can delete a whole section
   if you don't want that feature.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {

  /* ------------------------------------------------------------------------
     Mark that JS is available. The CSS only hides the mobile nav behind
     the toggle button when this class is present — so if JS fails to load,
     the full navigation stays visible and stacked instead of disappearing.
     ------------------------------------------------------------------------ */
  document.documentElement.classList.add("js-enabled");


  /* ==========================================================================
     1. MOBILE NAVIGATION TOGGLE
     ==========================================================================
     Looks for a button with [data-nav-toggle] and a nav with [data-nav-menu].
     Both already exist in the shared header markup on every page — you
     shouldn't need to change anything here unless you rename those
     attributes in the HTML.
     ========================================================================== */
  var navToggle = document.querySelector("[data-nav-toggle]");
  var navMenu = document.querySelector("[data-nav-menu]");

  if (navToggle && navMenu) {
    // Start closed on small screens. data-open is read by the CSS.
    navMenu.setAttribute("data-open", "false");

    navToggle.addEventListener("click", function () {
      var isOpen = navMenu.getAttribute("data-open") === "true";
      navMenu.setAttribute("data-open", isOpen ? "false" : "true");
      navToggle.setAttribute("aria-expanded", isOpen ? "false" : "true");
    });

    // Close the menu automatically when a link inside it is clicked,
    // so navigating doesn't leave the menu awkwardly open.
    navMenu.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        navMenu.setAttribute("data-open", "false");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }


  /* ==========================================================================
     2. AUTOMATIC CURRENT YEAR IN THE FOOTER
     ==========================================================================
     Every page's footer has a <span id="current-year"></span> — this fills
     it in so you never have to manually update a copyright year.
     ========================================================================== */
  var yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }


  /* ==========================================================================
     3. CV PRINT BUTTON
     ==========================================================================
     On cv.html, a button with [data-print-cv] triggers the browser's print
     dialog. Combined with the print styles in style.css, this hides the
     header/footer/nav and gives a clean, printable page.
     ========================================================================== */
  var printButton = document.querySelector("[data-print-cv]");
  if (printButton) {
    printButton.addEventListener("click", function () {
      window.print();
    });
  }


  /* ==========================================================================
     4. OPTIONAL — "CURRENTLY" TIMESTAMP
     ==========================================================================
     Purely decorative: if an element with [data-last-updated] exists (used
     in the "currently" panel on index.html), this fills it with today's
     date so the panel visibly looks freshly maintained. Update the actual
     TEXT of the currently panel by hand in index.html whenever your status
     changes — this script only stamps the date, it does not know what
     you're "currently" doing.

     Delete this whole block if you'd rather not have it.
     ========================================================================== */
  var lastUpdatedEl = document.querySelector("[data-last-updated]");
  if (lastUpdatedEl) {
    var today = new Date();
    var options = { year: "numeric", month: "short", day: "numeric" };
    lastUpdatedEl.textContent = today.toLocaleDateString(undefined, options);
  }

});
