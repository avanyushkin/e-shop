import {fakeAuthenticate} from "../utils/auth";
import { navigate } from "../main";

export function renderLoginPage(container) {
  container.innerHTML = `
    <form id = "login-form">
      <label for = "username">username</label>
      <input id = "username" name = "username" type = "text" />

      <label for = "password">password</label>
      <input id = "password" name = "password" type = "password" />

      <button type = "submit">log in</button>
      <p class = "form-error"></p>
      <a href = "/register">register an account</a>
    </form>
  `;

  const form = container.querySelector("#login-form");
  const errorEl = container.querySelector(".form-error");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const username = data.get("username").trim();
    const password = data.get("password");

    if (fakeAuthenticate(username, password)) {
      navigate("/home");
    } else {
      errorEl.textContent = "invalid username or password";
    }
  });
}