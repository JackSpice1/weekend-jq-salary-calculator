$(document).ready(onReady);

let employeeList = [];
let monthlySalarySum = 0;

function onReady(){
    console.log('running onReady');
    $(`#submitEmployee`).on('click', addEmployee);
    $(`tbody`).on( 'click', ".deleteButton", removeEmployee);
    updateSum()
    //$(`#displayData`).on(`click`, '.detleteBtn', deleteEmployee);
}

function addEmployee(){
    console.log('running addEmployee');
    let employee= {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        id: $('#idInput').val(),
        title: $('#titleInput').val(),
        annualSalary: Number($('#salaryInput').val())
    }
     //making all fields required
    //write an if statement to make sure fields are NOT blank
    if ($('#idInput').val() === '' || $('#salaryInput').val() === ' ' ) {
        alert('ID and salary fields are required for completion');
        return false;
    }
    else{
        console.log(employee);
        employeeList.push(employee);
        console.log(employeeList);
        appendToTable();
    }
}

function appendToTable(){ //clear all employees from the DOM
    $('#displayData').empty();
    console.log(employeeList)
    monthlySalarySum = 0;
    //add each employee to the table
    // empty out data before entering it again
    $(`tbody`).empty();
    for (let anEmployee of employeeList){
        console.log(anEmployee.lastName);
        $('tbody').append( 
            `<tr>
            <td>${anEmployee.firstName}</td>
            <td>${anEmployee.lastName}</td>
            <td class='employeeID'>${anEmployee.id}</td>
            <td>${anEmployee.title}</td>
            <td>${anEmployee.annualSalary}</td>
            <td class='deleteBtnContainer'><button id=${anEmployee.id} class="btn btn-secondary deleteBtn">Delete</button></td>
            </tr>
            `
        );
        monthlySalarySum += anEmployee.annualSalary / 12; //divide by 12 to get monthly
        $('#totalMonthlyCost').text(` $${monthlySalarySum.toFixed(2)}`)
    } // end appendToTable
    if (monthlySalarySum > 20000) { // if total is over 20000 turn red
        $('#totalMonthlyCost').addClass('turnRed')
    };
   
} 
 
// //remove empty row
// $(this).closest('tr').remove()
