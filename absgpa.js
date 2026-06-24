const calcBtn = document.getElementById("calc-abs");

calcBtn.addEventListener("click", function () {

    const marksInput = document.getElementById("abs-marks");
    const scalingInput = document.getElementById("abs-scaling");

    const error = document.getElementById("abs-error");
    const result = document.getElementById("abs-result");

    error.innerHTML = "";
    result.innerHTML = "";

    const marks = Number(marksInput.value);
    const scaling = scalingInput.value === "" ? 0 : Number(scalingInput.value);

    if (marksInput.value === "") {
        error.innerHTML = "Please enter your marks.";
        return;
    }

    if (marks < 0 || marks > 100) {
        error.innerHTML = "Marks must be between 0 and 100.";
        return;
    }

    if (scaling < 0) {
        error.innerHTML = "Scaling cannot be negative.";
        return;
    }

    const APlus = 90 - scaling;
    const A = 86 - scaling;
    const AMinus = 82 - scaling;
    const BPlus = 78 - scaling;
    const B = 74 - scaling;
    const BMinus = 70 - scaling;
    const CPlus = 66 - scaling;
    const C = 62 - scaling;
    const CMinus = 58 - scaling;
    const DPlus = 54 - scaling;
    const D = 50 - scaling;

    let grade;

    if (marks >= APlus) { grade = "A+";}
    else if (marks >= A) {grade = "A";}
    else if (marks >= AMinus) {grade = "A-"; }
    else if (marks >= BPlus) {grade = "B+";}
    else if (marks >= B) {grade = "B";}
    else if (marks >= BMinus) {grade = "B-";}
    else if (marks >= CPlus) { grade = "C+";}
    else if (marks >= C) { grade = "C";}
    else if (marks >= CMinus) {grade = "C-";}
    else if (marks >= DPlus) {grade = "D+";}
    else if (marks >= D) { grade = "D";}
    else {grade = "F";}
 result.innerHTML =
       "Marks: " + marks + " | Scaling: " + scaling + " | Grade: " + grade;
});