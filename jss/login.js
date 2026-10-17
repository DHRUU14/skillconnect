
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const message = document.getElementById("loginMessage");
    const button = document.getElementById("loginButton");

    if (!form || !message || !button) {
        console.error("Login form elements are missing.");
        return;
    }

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        message.textContent = "";
        button.disabled = true;
        button.textContent = "Logging in...";

        try {
            const { error } = await supabaseClient.auth.signInWithPassword({
                email: email,
                password: password
            });

            if (error) {
                throw error;
            }

            window.location.href = "dashboard.html";

        } catch (error) {
            message.textContent =
                error.message || "Login failed. Please try again.";
            message.style.color = "red";

        } finally {
            button.disabled = false;
            button.textContent = "Login";
        }
    });
});
