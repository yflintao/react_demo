const initState = {};

export default function userReducer(preState = initState, action) {
    const {type} = action
    let newState = {...preState};
    switch (type) {
        //名字不要和其他reducer一样
        case "get_user_info":
            newState.useinfo = action.payload
            return newState;
        default :
            return preState
    }
}