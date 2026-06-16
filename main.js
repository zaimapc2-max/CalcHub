
const sections = document.querySelectorAll("main section");
const buttons = document.querySelectorAll("nav button");

function hideAllSections() {
    sections.forEach(section => {
        section.style.display = "none";
    });
}

hideAllSections();
document.getElementById("norm").style.display = "block";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const targetId = button.dataset.target;

        hideAllSections();

        document.getElementById(targetId).style.display = "block";
    });
});