
// DARK MODE

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("oceanTheme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

function updateThemeButton() {
    if (!themeToggle) return;

    themeToggle.textContent =
        document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
}

updateThemeButton();

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const theme = document.body.classList.contains("dark-mode")
            ? "dark"
            : "light";

        localStorage.setItem("oceanTheme", theme);
        updateThemeButton();
    });
}

// MOBILE NAVBAR

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}

// CONTACT FORM

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const message = document.getElementById("contactMessage").value.trim();

        if (!name || !email || !message) {
            alert("Mohon lengkapi semua kolom.");
            return;
        }

        alert("Terima kasih, " + name + "! Pesan berhasil diperiksa.");

        contactForm.reset();
    });
}
