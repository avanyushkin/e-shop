import { navigate } from "../main.js";
import { validateConfirmPassword, validateEmail, validatePassword, validateUsername } from "../utils/registerValidation.js";

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
    });

    const form = container.querySelector("#register-form");
    const errorEl = container.querySelector(".form-error");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form["confirm-password"].value;

        const error = validateUsername(name) ||
            validatePassword(password) ||
            validateEmail(email) ||
            validateConfirmPassword(password, confirmPassword);
        if (error) {
            errorEl.textContent = error;
            return;
        }
        
    })
}