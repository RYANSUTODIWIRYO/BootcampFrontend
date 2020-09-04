const initUserOnLogin = localStorage.getItem("userOnLogin") ? JSON.parse(localStorage.getItem("userOnLogin")) : null
const isLogin = initUserOnLogin ? true : false

const initState = {
    userOnLogin: initUserOnLogin,
    isLogin
}

// Return reducer that contains states
const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN":           
            const userOnLogin = action.payload
            localStorage.setItem("userOnLogin", JSON.stringify(userOnLogin))            
            return {
                userOnLogin,
                isLogin: true
            }
            
        case "LOGOUT":
            localStorage.removeItem("userOnLogin")
            return {
                userOnLogin: [],
                isLogin: false
            }
            
        default:
            // alert(state.userOnLogin.length)
            return state
    }
}

export default AuthReducer
