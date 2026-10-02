const form = document.querySelector("#signup-form");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

form.addEventListener("submit", (e) => {
    if (password.value !== confirmPassword.value) {
        e.preventDefault();
        confirmPassword.setCustomValidity("Passwords do not match");
    } else {
        confirmPassword.setCustomValidity("");
    }
});

confirmPassword.addEventListener("input", () => {
    if (password.value === confirmPassword.value) {
        confirmPassword.setCustomValidity("");
    }
});
