let grade = document.getElementById('grade')
let speed = document.getElementById('speed')
let salary = document.getElementById('salary')


grade.addEventListener('click', (e) => {
    e.preventDefault()
    let marks = parseInt(document.getElementById('input-grade').value)
    console.log(marks)

    let finalOutput = ''
    // write Code For the Code challenge

    
    if (marks > 79 && marks<=100) {
        finalOutput ='A'
    } else if (marks => 60 && marks < 79) {

        finalOutput ='B'
    } else if (marks => 49 && marks <= 59) {

        finalOutput ='C'

    } else if (marks => 40 && marks < 49) {
        finalOutput='D'

    } else if (marks < 40) {
        finalOutput='E'
    } else {
        finalOutput= 'Invalid input. Please Enter correct marks'

    }


   //finalOutput = ''
    document.getElementById('marks-id').append(finalOutput)

})


















speed.addEventListener('click', (e)=>{
    e.preventDefault()
    let inputSpeed=parseInt(document.getElementById('speed').value)
    console.log(input-speed)
    let finalOutput=''
// write Code For the Code challenge

function speedCheck(speed) {
    const demeritPoints = Math.floor((speed - 70) / 5);
    if (inputSpeed <= 70) {
        finalOutput = "Ok"
    } else if (demeritPoints >= 1 && demeritPoints <= 12) {
        finalOutput = "Demerit points: " + demeritPoints
    } else if (demeritPoints > 12) {
        finalOutput = "License suspended"
    }
}
speedCheck(speed)






//finalOutput='assign your final output to this variable'
    document.getElementById('speed-id').append(finalOutput)

})














salary.addEventListener('click', (e) => {
    e.preventDefault()
    let inputSalary = parseInt(document.getElementById('input-salary').value)
    console.log(inputSalary)
    let finalOutput
    // write Code For the Code challenge











    finalOutput = 'assign your final output to this variable'
    document.getElementById('salary-id').append(finalOutput)

})