import { renderHomePage } from "./pages/home";
import { renderLoginPage } from "./pages/login";
import {renderRegisterPage} from "./pages/register";

const routes = {
  "/login": renderLoginPage,
  "/home": renderHomePage,
  "/register": renderRegisterPage,
};

const app = document.getElementById("app");

export function navigate(path) {
  history.pushState({}, "", path);
  render();
}

function render() {
  const path = location.pathname === "/" ? "/home" : location.pathname;
  const page = routes[path] ?? renderLoginPage;
  app.innerHTML = "";
  page(app);
}

window.addEventListener("popstate", render);
render();