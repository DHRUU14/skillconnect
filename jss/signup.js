
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signupForm");
    const message = document.getElementById("signupMessage");
    const button = document.getElementById("signupButton");

    if (!form || !message || !button) {
        console.error("Signup form elements are missing.");
        return;
    }

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const city = document.getElementById("city").value.trim();
        const skillsTeach = document.getElementById("skillsTeach").value;
        const skillsLearn = document.getElementById("skillsLearn").value;
        const bio = document.getElementById("bio").value.trim();

        message.textContent = "";
        button.disabled = true;
        button.textContent = "Creating account...";

        try {
            const { data, error } = await supabaseClient.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                        full_name: fullName,
                        city: city,
                        bio: bio,
                        skills_teach: skillsTeach,
                        skills_learn: skillsLearn
                    }
                }
            });

            if (error) {
                throw error;
            }

            if (data.session) {
                message.textContent =
                    "Account created successfully! You can now log in.";
            } else {
                message.textContent =
                    "Registration received! Check your email to confirm your account before logging in.";
            }

            message.style.color = "green";
            form.reset();

        } catch (error) {
            message.textContent = error.message || "Signup failed.";
            message.style.color = "red";
        } finally {
            button.disabled = false;
            button.textContent = "Create Account";
        }
    });
});
