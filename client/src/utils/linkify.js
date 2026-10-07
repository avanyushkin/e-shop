import {navigate} from "../main.js";

export function linkify(root) {
    root.querySelectorAll("[data-link]").forEach((a) => {
        a.addEventListener("click", (event) => {
            event.preventDefault();
            navigate(a.getAttribute("href"));
        });
    });
};