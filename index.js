// Write your solution in this file!
const employee = {
    name: "andrej",
    address: 123
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newobj = {...obj}
    newobj[key] = value;
    return newobj
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]= value;
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const newemployee = {...employee}
    delete newemployee[key];
    return newemployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}