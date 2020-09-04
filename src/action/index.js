export const setLogin = (userOnLogin) => {
    return {
        type: "LOGIN",
        payload: userOnLogin
    }
}

export const setLogout = () => {
    return {
        type: "LOGOUT"
    }
}

export const saveUsers = (users) => {
    return {
        type: "SAVE_USERS",
        payload: users
    }
}

export const saveDivisions = (divisions) => {
    return {
        type: "SAVE_DIVISIONS",
        payload: divisions
    }
}