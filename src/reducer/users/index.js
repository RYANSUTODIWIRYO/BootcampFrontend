// Create default data for users
const defaultUser = [
    {"username": "admin", "password": "admin", "name":"Admin", "division": "hrd", "address":"jakarta", "dateOfBirth":"2000-01-01"},
    {"username": "ryan", "password": "ryan", "name":"Ryan", "division": "manager", "address":"curug", "dateOfBirth":"2000-02-02"}
  ]

const initUsers = localStorage.users ? JSON.parse(localStorage.users) : defaultUser
const initState = {
    users: initUsers
}

// Return reducer that contains states
const UsersReducer = (state = initState, action) => {
    switch (action.type) {
        case "SAVE_USERS":            
            const users = action.payload
            localStorage.setItem("users", JSON.stringify(users))           
            return {users}            

        default:
            // alert("masuk pak ekoooooo " + state)
            localStorage.setItem("users", JSON.stringify(state.users))
            return state
    }
}

export default UsersReducer
