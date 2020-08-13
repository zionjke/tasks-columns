const InitialState = {
    items:[]
};

const cardsReducer = (state=InitialState, action) => {
    switch (action.type) {
        case 'CARDS:ADD':
            return {
                ...state,
                items: action.payload
            }
    }
    return state
};

export default cardsReducer