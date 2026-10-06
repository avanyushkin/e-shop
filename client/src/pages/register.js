import { navigate } from "../main.js";

export function renderRegisterPage(container) {
    container.innerHTML = `
        <form id = "register-form">
            <label for = "name">name</label>
            <input id = "name" name = "name" type = "text" />

            <label for = "email">email</label>
            <input id = "email" name = "email" type = "text" />

            <label for = "password">password</label>
            <input id = "password" name = "password" type = "password" />

            <label for = "confirm-password">confirm password</label>
            <input id = "confirm-password" name = "confirm-password" type = "password" />

            <button type = "submit">register</button>
            <button type = "button" id = "login-button">login</button>

            <p class = "form-error" role = "alert"></p>
            <button>continue with google</button>
        </form>
    `;

    const loginButton = container.querySelector("#login-button");
    loginButton.addEventListener("click", () => {
        navigate("/login");
    })
}