const initState = {};

export default function channelReducer(preState = initState, action) {
    const {type} = action
    let newState = {...preState};
    switch (type) {
        //名字不要和其他reducer一样
        case "get_channel_info":
            newState.channel = action.payload
            return newState;
        default :
            return preState
    }
}