const ADD = 'ADD';
const TAKE = 'TAKE';
const CLEAR = 'CLEAR';
export const actions = {
    add(good) {
        return {
            type: ADD,
            good,
        };
    },
    take(good) {
        return {
            type: TAKE,
            good,
        };
    },
    clear() {
        return {
            type: CLEAR,
        };
    },
};
export const goodsReducer = (goods = [], action) => {
    // export const goodsReducer = (goods: number[] | undefined = [], action: Action): number[] => {
    if ('type' in action) {
        switch (action.type) {
            case ADD: {
                if (action.good !== undefined) {
                    return [...goods, action.good];
                }
            }
            case TAKE: {
                if (action.good !== undefined) {
                    return goods.filter(good => good !== action.good);
                }
            }
            case CLEAR:
                return [];
            default:
                return goods;
        }
    }
    else {
        return goods;
    }
};
