const MOVE_RIGHT = 'MOVE_RIGHT';
const MOVE_LEFT = 'MOVE_LEFT';
const MOVE_UP = 'MOVE_UP';
const MOVE_DOWN = 'MOVE_DOWN';
// Define actions creators
export const actions = {
    moveRight() {
        return { type: MOVE_RIGHT };
    },
    moveLeft() {
        return { type: MOVE_LEFT };
    },
    moveUp() {
        return { type: MOVE_UP };
    },
    moveDown() {
        return { type: MOVE_DOWN };
    },
};
// Define the start position
const startPosition = { x: 0, y: 0 };
// Define a reducer function to update the state based on the action
export const positionReducer = (position = startPosition, action) => {
    if ('type' in action) {
        switch (action.type) {
            case MOVE_RIGHT:
                return {
                    x: position.x + 1,
                    y: position.y
                };
            case MOVE_LEFT:
                return {
                    x: position.x - 1,
                    y: position.y
                };
            case MOVE_UP:
                return {
                    x: position.x,
                    y: position.y + 1
                };
            case MOVE_DOWN:
                return {
                    x: position.x,
                    y: position.y - 1
                };
            default:
                // If the action type is not recognized, return the current state without modifying it
                return position;
        }
    }
    else {
        return position;
    }
};
