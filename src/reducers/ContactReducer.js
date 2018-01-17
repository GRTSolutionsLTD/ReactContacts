function update(state, payload) {
    debugger;
    console.log(state, payload)
    return state.id !== payload.id ? state: payload;
}
const reducer = (state = { data: [] }, action) => {
    switch (action.type) {
        case 'LOAD_CONTACT':
            return { data: action.data };
        case 'DELETE_CONTACT': {
            debugger;
            return { ...state, data: state.data.filter(c => c.id !== action.contactId) };
        }
        case 'ADD_CONTACT': {
            debugger;
            return { data: [...state.data, action.payload] };
        }
        case 'UPDATE_CONTACT': {
            debugger;
            return {
                data: [...state.data.map((state) => update(state, action.payload))]
            };
        }
        default:
            return state;
    }
}
export default reducer