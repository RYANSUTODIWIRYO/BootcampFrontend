let tarifMobil = 3000
let tarifAwalMobil = 5000
let tarifMotor = 1000
let tarifAwalMotor = 3000

// Get data from web storage
let customers = localStorage.customers ? JSON.parse(localStorage.customers) : []

// Reload the page
const cb = () => {
    location.reload()
}

// Save data to web storage
const insertData = (data, dataName) => {
    let lastData = localStorage.getItem(dataName) ? JSON.parse(localStorage.getItem(dataName)) : [] // Get data (array)
    lastData.push(data) // Insert to the lastest i of array
    localStorage.setItem(dataName, JSON.stringify(lastData)) // Set to local storage

    cb()
}

// Parking in
const parkIn = () => {
    // create customer data
    dateIn = new Date();
    customerId = (Math.round(dateIn.getTime() + Math.random())).toString();
    let data = {"customerId": customerId, "dateIn": dateIn}

    insertData(data, "customers")
    alert(`Customer Id : ${customerId}\nDate In : ${dateIn}`)
}

// Parking out
const parkOut = () => {
    // Get login data
    const operator = localStorage.getItem("login")
    if (operator == null){
        window.location.href = "/index.html"
        alert("Please Login..")
        return
    }

    // Get data from form
    const myForm = document.parkout_form
    const customerId = myForm.customer_id.value
    const vehicle = myForm.vehicle.value
    const regNumber = myForm.reg_number.value

    // Check inputs
    if (customerId === "") {
        alert("Customer Id must not empty")
        return
    } else if (regNumber === "") {
        alert("Vehicle Registration Number must not empty")
        return
    } else if (vehicle === "") {
        alert("Please choose vehicle")
        return
    }

    // Find array index
    customers = localStorage.customers ? JSON.parse(localStorage.customers) : []
    arrIndex = customers.findIndex(customer => customer.customerId === customerId)
    if (arrIndex == -1) {
        alert("Customer Id is not exist!")
        return
    }

    if (customers[arrIndex].dateOut){
        alert("Customer has exit the parking!")
        return
    }
    
    // Find duration (minutes)
    const dateIn = new Date(customers[arrIndex].dateIn)
    const dateOut = new Date();
    const duration = Math.ceil((dateOut - dateIn) / 60000);

    // Find total
    let total
    if (vehicle === "car") {
        total = tarifAwalMobil + ((duration - 1) * tarifMobil)
    } else {
        total = tarifAwalMotor + ((duration - 1) * tarifMotor)
    }

    // Sets object
    customers[arrIndex].dateOut = dateOut;
    customers[arrIndex].vehicle = vehicle;
    customers[arrIndex].regNumber = regNumber;
    customers[arrIndex].duration = duration;
    customers[arrIndex].total = total;
    customers[arrIndex].operator = operator;

    // Save to local storage
    localStorage.setItem("customers", JSON.stringify(customers))
    alert(
        `Customer Id : ${customerId}\nDate In : ${dateIn}\nDate Out : ${dateOut}\nVehicle : ${vehicle}\nReg.Number : ${regNumber}\nDuration : ${duration} Minutes\nTotal : Rp.${total}`
    )
}

// ========================= Login =========================
const login = () => {
    // Get data from form
    const myForm = document.login_form
    const username = myForm.username.value
    const password = myForm.pass.value
    let name = ""

    // Cek user
    if (username.toLowerCase() === "operator1"){
        if (password === "password1"){
            localStorage.setItem("login", "operator1")
            window.location.href = "/park_out.html"
            return false
        } else {
            alert(`Password is incorrect`)
            return
        }
    } else if (username.toLowerCase() === "operator2"){
        if (password === "password2"){
            localStorage.setItem("login", "operator2")
            window.location.href = "/park_out.html"
            return false
        } else {
            alert(`Password is incorrect`)
            return
        }
    } else if (username.toLowerCase() === "admin"){
        if (password === "admin"){
            localStorage.setItem("loginAdmin", "admin")
            window.location.href = "/admin.html"
            return false
        } else {
            alert(`Password is incorrect`)
            return
        }
    } else {
        alert(`Username is not found`)
    }
}

// Logout
const logout = (user) => {
    localStorage.removeItem(user)
    window.location.href = "/index.html"
    return false
}

// ======================== Table ===========================
const showReport = (operator = "") => {
    // Get login data
    const admin = localStorage.getItem("loginAdmin")
    if (admin == null){
        window.location.href = "/index.html"
        alert("Please Login..")
        return
    }
    
    const list = document.querySelector("#tableReport tbody")
    customers = localStorage.customers ? JSON.parse(localStorage.customers) : []

    if (operator === "") {
        allReport(list)
    } else {
        operatorReport(list, operator)
    }
}

const allReport = (list) => {
    let rows = ""
    let subTotal = 0
    let no = 0
    for (let i = 0; i < customers.length; i++) {
        const customer = customers[i];
        
        if (customer.dateOut){
            const date = new Date(customer.dateOut).toLocaleString().split(',')[0];
            subTotal += customer.total
            rows +=`
            <tr>
                <td align=right width=50px>${no+1}</td>
                <td>${customer.operator}</td>
                <td>${date}</td>
                <td>${customer.customerId}</td>
                <td>${customer.vehicle}</td>
                <td>${customer.regNumber}</td>
                <td>${customer.duration}</td>
                <td>${customer.total}</td>
            </td>`
        no++
        }
    }
    rows += `
        <tr>
            <td colspan="7" align="center">Sub Total</td>
            <td>${subTotal}</td>
        </tr>`
    list.innerHTML = rows
}

const operatorReport = (list, operator) => {
    let rows = ""
    let subTotal = 0
    let no = 0
    for (let i = 0; i < customers.length; i++) {
        const customer = customers[i];
        
        if (customer.operator === operator) {
            if (customer.dateOut){
                const date = new Date(customer.dateOut).toLocaleString().split(',')[0];
                subTotal += customer.total
                rows +=`
                <tr>
                    <td align=right width=50px>${no+1}</td>
                    <td>${customer.operator}</td>
                    <td>${date}</td>
                    <td>${customer.customerId}</td>
                    <td>${customer.vehicle}</td>
                    <td>${customer.regNumber}</td>
                    <td>${customer.duration}</td>
                    <td>${customer.total}</td>
                </td>`
            no++
            }
        }
    }
    rows += `
        <tr>
            <td colspan="7" align="center">Sub Total</td>
            <td>${subTotal}</td>
        </tr>`
    list.innerHTML = rows
}

