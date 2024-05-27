let empName, empId, empSalary, empBonus, empComission, save_btn;
addEventListener("DOMContentLoaded", init);
function init()
{
    empName = document.getElementById('emp-name');
    empId = document.getElementById('emp-id');
    empSalary = document.getElementById('emp-salary');
    empBonus = document.getElementById('emp-bonus');
    empComission = document.getElementById('emp-comission');
    empPosition = document.getElementById('emp-position');
    save_btn = document.getElementById('save_data');
    save_btn.addEventListener('click', saveUserData);
    const dataShow = localStorage.getItem('userDetails');
    const arr = JSON.parse(dataShow);
    console.log(arr);
    const parent = document.getElementById('user_info_table');
    for (let i of arr)
    {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${i.empIdValue}</td>
            <td>${i.empNvalue}</td>
            <td>${i.empSalaryValue}</td>
            <td>${i.empBonusValue}</td>
            <td>${i.empComissionValue}</td>
            <td>${i.empPositionValue}</td>
            <td><button>Delete</button></td>
        `;
        parent.appendChild(tr);
    }
}
function saveUserData()
{
    let storedData = localStorage.getItem('userDetails');
    let empArray = storedData ? JSON.parse(storedData) : [];
    let empNvalue = empName.value;
    let empIdValue = empId.value;
    let empSalaryValue = empSalary.value;
    let empPositionValue = empPosition.value;
    let empComissionValue = empComission.value;
    let empBonusValue = empBonus.value;
    window.location.reload();

    if (empIdValue && empNvalue && empPositionValue && !isNaN(empSalaryValue) && !isNaN(empComissionValue) && !isNaN(empBonusValue))
    {
        const obj = { empIdValue, empNvalue, empPositionValue, empSalaryValue, empBonusValue, empComissionValue };
        empArray.push(obj);
        console.log(empArray);
        let userDataDetails = JSON.stringify(empArray);
        localStorage.setItem('userDetails', userDataDetails);
    } else
    {
        alert("Please fill in all fields");
    }
}
