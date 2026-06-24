
const sections = document.querySelectorAll("main section");
const buttons = document.querySelectorAll("header nav button");

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
        document.body.className = "";   //wipe all classes
        document.body.classList.add("theme-" + targetId);  //add only new ones
    });
});