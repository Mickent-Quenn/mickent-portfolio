const text = ["Administrative Support", "Creative Graphic Designer", "Tech Enthusiast"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
    if (count === text.length) { count = 0; }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1500);
    } else {
        setTimeout(type, 100);
    }
}

type();



function openModal(title, image, description) {
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-img").src = "images/" + image;
    document.getElementById("modal-desc").textContent = description;
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}