import { renderHomeNav } from "../components/nav.js";

export function renderHomePage(container) {
  container.innerHTML = '<h2>Welcome!</h2><p>You are logged in</p>';
  renderHomeNav(container);
}