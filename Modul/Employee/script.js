let employees = localStorage.employees ? JSON.parse(localStorage.employees) : []
let department = localStorage.department ? JSON.parse(localStorage.department) : []

const saveLS = (obj, itemId = "department", cb = () => location.reload()) => {
    // if(itemId == "employees") {
    //     let lastData = employees
    //     lastData.push(obj)
    //     localStorage.employees = JSON.stringify(lastData)
    // } else if(itemId == "department") {
    //     let lastData = department
    //     lastData.push(obj)
    //     localStorage.department = JSON.stringify(lastData)
    // }

    let lastData = localStorage.getItem(itemId) ? JSON.parse(localStorage.getItem(itemId)) : [] // admin
    lastData.push(obj) // admin1
    localStorage.setItem(itemId, JSON.stringify(lastData)) // admin, admin1

    cb()
}

const updateLS = (name, dp, cb = () => {}) => {
    employees = employees.map((value) => {
        if (value.name == name) {
            return {
                name,
                address: value.address,
                department: dp
            }
        } else{
            return value  
        } 
    })

    localStorage.employees = JSON.stringify(employees)
    
    cb()
}

const saveDepartment = () => {
    const myForm = document.inputDepartment
    const dp = myForm.department.value

    saveLS({ department: dp })
}

const saveEmployee = () => {
    const myForm = document.inputEmployee
    const name = myForm.nama.value
    const address = myForm.alamat.value

    // let isExist = false
    // for (let i = 0; i < employees.length; i++) {
    //     const employee = employees[i];
    //     if (employee.name == name) 
    //         isExist = true
    // }
    const isExist = employees.some((employee) => employee.name == name) // cek nama ada atau tidak

    if(isExist) {
        alert("Data exist!!")
        return
    }

    saveLS({
        name, address
    }, "employees", () => location.reload())
    // console.log(employees)
}

const showEmployee = () => {
    const list = document.querySelector("#listEmployee tbody")
    let rows = ""

    
    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];
        
        // let departmentOption = "<select onchange=\"updateLS('" + employee.name + 
        //                         "', this.value)\"> <option value=''>-- Please Choose --"
        let departmentOption = `
            <select onchange="updateLS('${employee.name}', this.value)">
                <option value="">-- Please Choose --
        `

        for (let i = 0; i < department.length; i++) {
            const dp = department[i];

            let isSelected = ""
            if (dp.department == employee.department)
                isSelected = "selected"

            departmentOption += `<option value="${dp.department}" ${isSelected}>${dp.department}`
        }
        departmentOption += "</select>"

        /*
            <select onchange="updateLS('${employee.name}', this.value)">
                <option value="">-- Silakan Pilih
                <option value="HRD">HRD
                <option value="Staff">Staff
                <option value="Manager" selected>Manager
            </select>
        */
        
        rows += `
            <tr>
                <td align=right width=50px>${i+1}</td>
                <td>${employee.name}</td>
                <td align=center>${departmentOption}</td>
                <td>${employee.address}</td>
            </tr>`
    }

    list.innerHTML = rows
}


// const changeDepartment = self => {
//     const value = self.value
//     const parent = self.closest("tr")
//     const name = parent.children[1].innerText
//     console.log(name);   
    
//     updateLS(name, value, location.reload())
// }

/*
TUGAS:
    Aplikasi Parkir:
        - Halaman 1 (Masuk Parkir)
        - Halaman 2 (Keluar Parkir)
*/