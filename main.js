// Author: Rui Heng Yang
// Renders the content in data.js into the page.
"use strict";

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

function authorList(authors) {
  return authors
    .map((a) => {
      const name = a.replace(/\*$/, "");
      const star = a.endsWith("*") ? "*" : "";
      return name === SITE.me ? `<span class="me">${esc(name)}${star}</span>` : esc(name) + star;
    })
    .join(", ");
}

// The title links straight to the paper (arXiv when available).
function titleLink(p, text) {
  const url = p.links.arXiv || Object.values(p.links)[0];
  if (!url) return esc(text);
  return `<a class="paper-link" href="${esc(url)}" target="_blank" rel="noopener">${esc(text)}</a>`;
}

// The figure is a button that opens it full size in the #lightbox dialog.
function cardFigure(p) {
  const alt = `${p.title.split(":")[0]} overview figure`;
  return `<button type="button" class="card-fig" aria-label="Enlarge ${esc(alt)}">
    <img src="${esc(p.img)}" alt="${esc(alt)}" loading="lazy"></button>`;
}

function fill(selector, html) {
  document.querySelector(selector).innerHTML = html;
}

fill("#highlight-cards", SITE.publications.filter((p) => p.featured).map((p) => `
  <article class="card">
    ${cardFigure(p)}
    <p class="card-venue">${esc(p.venueShort || p.venue)} ${p.year}</p>
    <h3>${titleLink(p, p.title.split(":")[0])}</h3>
    <p>${esc(p.tldr)}</p>
  </article>`).join(""));

fill("#pub-list", SITE.publications.map((p) => `
  <li>
    <span class="title">${titleLink(p, p.title)}</span><br>
    ${authorList(p.authors)}<br>
    <span class="venue">${esc(p.venue)} ${p.year}</span>
  </li>`).join(""));

fill("#exp-list", SITE.experience.map((e) => `
  <li>
    <div class="row"><span><span class="title">${esc(e.org)}</span>, ${esc(e.role)}</span><span class="dates">${esc(e.dates)}</span></div>
    <span class="sub">${esc(e.detail)}</span>
  </li>`).join(""));

fill("#edu-list", SITE.education.map((e) => `
  <li>
    <div class="row"><span><span class="title">${esc(e.school)}</span>, ${esc(e.degree)}</span><span class="dates">${esc(e.dates)}</span></div>
    <span class="sub">${esc(e.note)}</span>
  </li>`).join(""));

fill("#patent-list", SITE.patents.map((p) => `
  <li>
    <span class="title">${esc(p.title)}</span><br>
    ${authorList(p.authors.split(", "))}${p.authors.endsWith(".") ? "" : "."} <span class="sub">${esc(p.status)}</span>
  </li>`).join(""));

const toggle = document.querySelector("#theme-toggle");
const label = () => { toggle.setAttribute("aria-checked", String(document.documentElement.dataset.theme === "dark")); };
toggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  label();
  try { localStorage.setItem("theme", next); } catch { /* storage blocked: theme just won't persist */ }
});
label();

const lightbox = document.querySelector("#lightbox");
document.querySelectorAll(".card-fig").forEach((fig) => {
  fig.addEventListener("click", () => {
    const img = fig.querySelector("img");
    lightbox.querySelector("img").src = img.src;
    lightbox.querySelector("img").alt = img.alt;
    lightbox.showModal();
  });
});
// Clicking anywhere, including the image or the close button, closes it; Esc is handled natively by <dialog>.
lightbox.addEventListener("click", () => lightbox.close());

// Highlight the sidebar link for the section currently in view: the last section whose top has passed
// 30% of the viewport; the first section at the very top (tall windows put the second section above
// the 30% line); or the final section once the page is scrolled to the bottom (short final
// sections never reach the 30% line on tall screens). A clicked link stays highlighted until the
// reader scrolls by hand, since a clicked section near the bottom may never reach the 30% line.
const navLinks = new Map([...document.querySelectorAll(".sidebar a:not(.sidebar-name)")]
  .map((a) => [a.getAttribute("href").slice(1), a]));
const sections = [...navLinks.keys()].map((id) => document.getElementById(id));
let clicked = null;
navLinks.forEach((a, id) => a.addEventListener("click", () => { clicked = id; markCurrent(); }));
["wheel", "touchmove", "keydown"].forEach((ev) => window.addEventListener(ev, () => { clicked = null; }, { passive: true }));
function markCurrent() {
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  const passed = sections.filter((s) => s.getBoundingClientRect().top <= window.innerHeight * 0.3);
  const atTop = window.scrollY < 1;
  const current = clicked ? document.getElementById(clicked)
    : atTop ? sections[0] : atBottom ? sections.at(-1) : passed.at(-1) || sections[0];
  navLinks.forEach((a, id) => a.classList.toggle("current", id === current.id));
}
window.addEventListener("scroll", markCurrent, { passive: true });
window.addEventListener("resize", markCurrent);
markCurrent();
