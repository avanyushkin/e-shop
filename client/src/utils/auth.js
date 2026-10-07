async function login(login, password) {
    const response = await fetch("/api/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({login, password}),
    });
    return response.json();
}

export default {login};