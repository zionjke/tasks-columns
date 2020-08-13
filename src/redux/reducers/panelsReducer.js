const InitialState = {
    items: [
        {title: 'План на месяц', cards: [
                'Пройти курс по React',
                'Пройти курс по React',
                'Пройти курс по React',
            ]
        },
        {title: 'План на месяц', cards: [
                'Пройти курс по React',
                'Пройти курс по React',
                'Пройти курс по React',
            ]
        },
    ]
};

const panelsReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'PANELS:ADD':
            return {
                ...state,
                items: action.payload
            };
        case 'CARDS:ADD':
            return {
                ...state,
                items: state.items.map((item,index) => {
                    if (index === action.payload.index) {
                        return {
                            ...item,
                            cards: [...item.cards, action.payload.text]
                        };
                    } else {
                        return item
                    }
                })
            }
    }
    return state
};

export default panelsReducer