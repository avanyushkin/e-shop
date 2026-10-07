import { linkify } from "../utils/linkify.js";

export function renderHomeNav(container) {
    const nav = document.createElement("nav");
    nav.className = "home-nav";
    nav.innerHTML = `
        <a href = "/shop" data-link>shop</a>
        <a href = "/contacts" data-link>contacts</a>
    `;
    linkify(nav);
    container.appendChild(nav);
};