let letterGrade = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,
    E: 1,
    F: 0
};

function Performance(creditUnit, grade) {
    this.creditUnit = creditUnit;
    this.grade = grade;
};

const Maths = new Performance(2, "B");
const English = new Performance(3, "C");
const Biology = new Performance(2, "A");
const Chemistry = new Performance(1, "D");
const Geography = new Performance(3, "A");

let totalCreditUnit = " ";
let totalGrade = " ";

    totalCreditUnit += Performance.creditUnit;
    totalGrade += Performance.grade;

    for (let i = 0; i < letterGrade.lenght; i++){
        Performance.grade = letterGrade + "." + grade;
    }

    let performance = Performance.creditUnit * Performance.grade;
    const GP = performance/ totalCreditUnit;
   
    document.getElementsByClassName(".GPA").innerhtml = ("Your GPA is " + GP);


  alert("gfkj");


