let grade = document.getElementById('grade')
let speed = document.getElementById('speed')
let salary = document.getElementById('salary')

// Add an event listener to the 'grade' button
document.getElementById('grade').addEventListener('click', (e) => {
    e.preventDefault() // Prevent page from refreshing on submit
    let inputGrade = parseInt(document.getElementById('input-grade').value)
    console.log(inputGrade) // Log the input grade to the console

    let finalOutput // Declare a variable for the final output
    // write Code For the Code challenge

    // Check the marks scored and assign the corresponding letter grade
    if (inputGrade > 79 && inputGrade <= 100) {
        finalOutput = 'A'

    } else if (inputGrade >= 60 && inputGrade <= 79) {
        finalOutput = 'B'

    } else if (inputGrade >= 49 && inputGrade <= 59) {
        finalOutput = 'C'

    } else if (inputGrade >= 40 && inputGrade < 49) {
        finalOutput = 'D'

    } else if (inputGrade < 40) {
        finalOutput = 'E'
    } else {
        finalOutput = 'Invalid input. Please Enter correct marks'

    }



    document.getElementById('marks-id').append(finalOutput)

})

















//an event listener that listens for a "click" event on the submit button

document.getElementById('submit-speed').addEventListener('click', (e) => {
    e.preventDefault()// Prevent page from refreshing on submit
    // which would cause the page to reload when the button is clicked.

    //parseInt() converts the value input to an integer
    let inputSpeed = parseInt(document.getElementById('input-speed').value)
    console.log(inputSpeed)     // Log the input speed to the console
    let finalOutput             // Log the input grade to the console


    // write Code For the Code challenge


    //Check the speed and calculate the demerit points
    function speedCheck(inputSpeed) {
        const demeritPoints = Math.floor((inputSpeed - 70) / 5);
        if (inputSpeed <= 70) {
            finalOutput = "Ok"
        } else if (demeritPoints >= 1 && demeritPoints <= 12) {
            finalOutput = "Demerit points: " + demeritPoints
        } else if (demeritPoints > 12) {
            finalOutput = "License suspended"
        }
        return finalOutput
    }






    //calls the speedCheck function which has the speed parameter
    finalOutput = speedCheck(inputSpeed);

    //access  HTML element with the id "speed-id".
    //.append(finalOutput) is a method that adds the text in the finalOutput 
    document.getElementById('speed-id').append(finalOutput)

})














document.getElementById('salary').addEventListener('click', (e) => {
    e.preventDefault()
    let grossSalary = parseInt(document.getElementById('input-salary').value)
    console.log(grossSalary)
    let finalOutput
    // write Code For the Code challenge

    function calculateNetSalary(grossSalary) {
        let taxableIncome = grossSalary - 2400; // remove personal relief of 2400 per month
        let paye = 0;           // initialize PAYE to 0
        let nssf = 400;         // initialize NSSF to 400 per month
        let nhif = 0;           // initialize NHIF to 0

        // compute PAYE based on taxable income

        if (taxableIncome <= 24000) {
            paye = taxableIncome * 0.1

        } else if (taxableIncome >= 24001 && taxableIncome <= 32333) {
            paye = taxableIncome * 0.25

        } else if (taxableIncome > 32333) {
            paye = taxableIncome * 0.3

        }


        // compute NHIF based on gross salary
        if (grossSalary <= 5999) {
            nhif = 150
        } else if (grossSalary <= 7999) {
            nhif = 300
        } else if (grossSalary <= 11999) {
            nhif = 400
        } else if (grossSalary <= 14999) {
            nhif = 500
        } else if (grossSalary <= 19999) {
            nhif = 600
        } else if (grossSalary <= 24999) {
            nhif = 750
        } else if (grossSalary <= 29999) {
            nhif = 850
        } else if (grossSalary <= 34999) {
            nhif = 900
        } else if (grossSalary <= 39999) {
            nhif = 950
        } else if (grossSalary <= 44999) {
            nhif = 1000
        } else if (grossSalary <= 49999) {
            nhif = 1100
        } else if (grossSalary <= 59999) {
            nhif = 1200
        } else if (grossSalary <= 69999) {
            nhif = 1300
        } else if (grossSalary <= 79999) {
            nhif = 1400
        } else if (grossSalary <= 89999) {
            nhif = 1500
        } else if (grossSalary <= 99999) {
            nhif = 1600
        } else if (grossSalary > 100000) {
            nhif = 1700
        }


        // calculate the net salary
        let netSalary = grossSalary - paye - nssf - nhif;
        return netSalary

    }






    finalOutput = calculateNetSalary(grossSalary)
    document.getElementById('salary-id').append(finalOutput)

})