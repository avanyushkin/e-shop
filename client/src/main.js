import { renderHomePage } from "./pages/home";
import { renderLoginPage } from "./pages/login";

const routes = {
  "/login": renderLoginPage,
  "/home": renderHomePage,
};

const app = document.getElementById("app");

export function navigate(path) {
  history.pushState({}, "", path);
  render();
}

function render() {
  const path = location.pathname === "/" ? "/home" : location.pathname;
  const page = routes[path] ?? renderLoginPage;
  app.interHTML = "";
  page(app);
}

window.addEventListener("popstate", render);
render();