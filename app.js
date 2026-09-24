/* ==========================================================================
   LinkHub — app logic
   Reads the CONFIG object from config.js and renders the profile card.
   Falls back to sensible defaults if CONFIG (or any field) is missing,
   so the page never breaks even when config.js fails to load.
   ========================================================================== */

(function () {
  "use strict";

  /* Fallback values used when config.js is missing or incomplete */
  const DEFAULTS = {
    name: "Your Name",
    tagline: "Your tagline goes here",
    avatar: "👤",
    accent: "#4f8cff",
    links: [],
  };

  /* Merge user config over defaults (shallow merge is enough here) */
  const cfg = Object.assign(
    {},
    DEFAULTS,
    (typeof CONFIG !== "undefined" && CONFIG) || {}
  );
  if (!Array.isArray(cfg.links)) {
    cfg.links = [];
  }

  /* --- Apply the accent color so CSS uses the configured value --- */
  document.documentElement.style.setProperty("--accent", cfg.accent);

  /* --- Render avatar, name, tagline --- */
  document.getElementById("avatar").textContent = cfg.avatar;
  document.getElementById("name").textContent = cfg.name;
  document.getElementById("tagline").textContent = cfg.tagline;

  /* --- Render link buttons --- */
  const linksEl = document.getElementById("links");

  cfg.links.forEach(function (link) {
    const label = link.label || "Link";
    const url = link.url || "#";
    const icon = link.icon || "🔗";

    const a = document.createElement("a");
    a.className = "link-btn";
    a.href = url;
    a.textContent = ""; // build children below (avoids HTML injection)

    const iconSpan = document.createElement("span");
    iconSpan.className = "icon";
    iconSpan.textContent = icon;
    iconSpan.setAttribute("aria-hidden", "true");

    const labelSpan = document.createElement("span");
    labelSpan.textContent = label;

    a.appendChild(iconSpan);
    a.appendChild(labelSpan);

    // External links open in a new tab; mailto: stays in-page
    const isExternal = /^https?:\/\//i.test(url);
    if (isExternal) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }

    linksEl.appendChild(a);
  });

  /* --- Footer: © year + name --- */
  const year = new Date().getFullYear();
  document.getElementById("footer-text").textContent =
    "© " + year + " " + cfg.name;

  /* --- Keep the tab title in sync with the name --- */
  document.title = cfg.name + " · Links";
})();
