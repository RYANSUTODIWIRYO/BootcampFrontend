// Create default data for divisions
const defaultDivisions = ["hrd", "manager"]

// Set data dor divisions
// const initDivisions = localStorage.divisions ? JSON.parse(localStorage.divisions) : defaultDivisions
const initState = {
    divisions : defaultDivisions
}

// Return reducer that contains states
const DivisionsReducer = (state = initState, action) => {
    switch (action.type) {
        case "SAVE_DIVISIONS":
            const divisions = action.payload
            // localStorage.setItem("divisions", JSON.stringify(divisions))
            return {divisions}
    
        default:
            // localStorage.setItem("divisions", JSON.stringify(state.divisions))
            return state
    }
}

export default DivisionsReducer
