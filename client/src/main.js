import { renderHomePage } from "./pages/home";
import { renderLoginPage } from "./pages/login";
import {renderRegisterPage} from "./pages/register";
import {renderShopPage} from "./pages/shop";
import {renderContanctsPage} from "./pages/contacts";
import {renderNotFoundPage} from "./pages/notFound";

const routes = {
  "/login": {render: renderLoginPage, access: "guest"},
  "/home": {render: renderHomePage, access: "private"},
  "/register": {render: renderRegisterPage, access: "guest"},
  "/shop": {render: renderShopPage, access: "private"},
  "/contacts": {render: renderContanctsPage, access: "private"},
};

const app = document.getElementById("app");

export function navigate(path) {
  history.pushState({}, "", path);
  render();
}

function render() {
  const path = location.pathname === "/" ? "/home" : location.pathname;
  const route = routes[path] ?? {render: renderNotFoundPage, access: "public"};
  app.innerHTML = "";
  route.render(app);
}

window.addEventListener("popstate", render);
render();