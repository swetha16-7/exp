document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".submit-btn").addEventListener("click", () => {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const gender = document.querySelector('input[name="gender"]:checked')?.value;
        const interests = [...document.querySelectorAll('input[name="interests"]:checked')].map(i => i.value);
        const bio = document.getElementById("bio").value;
        if (!name || !email || !gender || !interests || !bio) {
            return alert("Please fill out all required fields.");
        }
        alert("Thank you for your submission!");
    });
});
