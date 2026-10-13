
const photo = document.getElementById("photo");
const number = document.getElementById("number");

const photos = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt6bGbrV9UTswtflzLfIbOYsDv3epFkKOBT2woaEgUXw&s=10",
    "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1800&q=85",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6HpD2ygUkNtbXibWD-4rnv_zWd9v-m22r3MYXG5FOIA&s=10"
];

let current = 0;

function changePhoto(step) {
    current = (current + step + photos.length) % photos.length;

    photo.style.opacity = "0";

    setTimeout(() => {
        photo.src = photos[current];
        number.textContent =
            `0${current + 1} / 0${photos.length}`;
        photo.style.opacity = "1";
    }, 200);
}

document.getElementById("back").addEventListener("click", () => {
    changePhoto(-1);
});

document.getElementById("next").addEventListener("click", () => {
    changePhoto(1);
});
const signup = document.getElementById("signup");
const signupText = document.getElementById("signupText");

signup.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!signup.checkValidity()) {
        signup.reportValidity();
        return;
    }

    signupText.textContent =
        "All fields completed!";

    signup.reset();
});

const windowBox = document.getElementById("window");
const openChat = document.getElementById("openChat");
const closeChat = document.getElementById("closeChat");

openChat.addEventListener("click", () => {
    windowBox.hidden = false;
    openChat.setAttribute("aria-expanded", "true");
});

closeChat.addEventListener("click", () => {
    windowBox.hidden = true;
    openChat.setAttribute("aria-expanded", "false");
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        windowBox.hidden = true;
        openChat.setAttribute("aria-expanded", "false");
    }
});

const message = document.getElementById("message");
const messageText = document.getElementById("messageText");

message.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!message.checkValidity()) {
        message.reportValidity();
        return;
    }

    messageText.textContent =
        "Form completed!";

    message.reset();
});
