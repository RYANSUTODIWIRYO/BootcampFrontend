import { combineReducers } from "redux"
import AuthReducer from "./auth"
import UsersReducer from "./users"
import DivisionsReducer from "./division"

// Combine all reducers into one constant
const AllReducers = combineReducers({
    authReducer: AuthReducer,
    usersReducer: UsersReducer,
    divisionsReducer: DivisionsReducer
})

// Export the constant
export default AllReducers