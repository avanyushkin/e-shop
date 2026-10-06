import auth from "../utils/auth";
import {validatePassword, validateUsername} from "../utils/registerValidation";
import {navigate} from "../main";

export function renderLoginPage(container) {
    container.innerHTML = `
      <form id = "login-form">
        <label for = "username">username</label>
        <input id = "username" name = "username" type = "text" />

        <label for = "password">password</label>
        <input id = "password" name = "password" type = "password" />

        <button type = "button" id = "register-button">register</button>
        <button type = "submit">login</button>

        <p class = "form-error" role = "alert"></p>
        <button>continue with google</button>
      </form>
    `;

    const form = container.querySelector("#login-form");
    const errorEl = container.querySelector(".form-error");
    const registerButton = container.querySelector("#register-button");

    registerButton.addEventListener("click", () => {
        navigate("/register");
    });

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const username = form.username.value;
        const password = form.password.value;

        // const error = validateUsername(username) || validatePassword(password);
        // if (error) {
        //     errorEl.textContent = error;
        //     return;
        // }
        
        //console.log("login with", username, password);
        try {
            const result = await auth.login(username, password);
            console.log("login result:", result);
            if (!result.ok) {
                errorEl.textContent = result.error;
                return;
            }
            //console.log("login successful");
            navigate("/home");
        } catch (error) {
            errorEl.textContent = "failed to login";
        }
    });
}