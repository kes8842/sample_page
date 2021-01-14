import action from "../../action";
const { UPDATE_ID, UPDATE_PASSWORD, CALL_LOGIN_API, CHECK_LOGIN } = action.loginAction;

const initState = {
    id: "",
    password: ""
};

export const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_ID:
            return {
                ...state,
                id: action.id,
            }

        case UPDATE_PASSWORD:
            return {
                ...state,
                password: action.password,
            }

        case CALL_LOGIN_API:
            return {
                ...state,
            }

        case CHECK_LOGIN:
            console.log(state)
            return {
                ...state
            }
            
        default:
            return state;
    }
};