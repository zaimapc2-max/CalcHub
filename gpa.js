const template = document.querySelector(".subject_row");
const reallist = document.getElementById("subjects-list");
const addsub = document.getElementById("add-subject");
const resultbtn = document.getElementById("calc-gpa");
const result_final = document.getElementById("gpa-result");

addsub.addEventListener("click",()=>{
    const newRow = template.cloneNode(true);
    newRow.removeAttribute("id");
    newRow.style.display = "block";
   

    const removeBtn = newRow.querySelector(".removeSubject");

    removeBtn.addEventListener("click", () => {
        newRow.remove();
    });
    reallist.appendChild(newRow);
})

const gradePoints = {
    "A+": 4.0,
    "A": 4.0,
    "A-": 3.7,
    "B+": 3.3,
    "B": 3,
    "B-": 2.7,
    "C+": 2.3,
    "C": 2.0,
    "C-": 1.7,
    "D+": 1.3,
    "D": 1.0,
    "D-": 0.7,
    "F": 0.0
};


resultbtn.addEventListener("click", () => {
    console.log("calculate button clicked");


    let totalPoints = 0;
    let totalCredits = 0;

    const rows = reallist.querySelectorAll(".subject_row");
    
    rows.forEach(row => {

        const creditInput = row.querySelector(".credithoursInput");
        const gradeSelect = row.querySelector(".grade_selection");

        const credits = parseFloat(creditInput.value);

        const grade = gradeSelect.value;
        const points = gradePoints[grade];

        totalPoints += credits * points;
        totalCredits += credits;
     });

    if(totalCredits === 0)
    {
        result_final.innerText = "Please add subjects first";
        return;
    }

    const sgpa = totalPoints / totalCredits;

    result_final.innerText =`SGPA: ${sgpa.toFixed(2)}`;


});