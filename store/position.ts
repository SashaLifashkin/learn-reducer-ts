import type { Action, Position, PositionReducer } from '../types';

const MOVE_RIGHT = 'MOVE_RIGHT';
const MOVE_LEFT = 'MOVE_LEFT';
const MOVE_UP = 'MOVE_UP';
const MOVE_DOWN = 'MOVE_DOWN';

// Define actions creators
export const actions = {
  moveRight(): Action { 
    return { type: MOVE_RIGHT };
  },
  moveLeft(): Action{
    return { type: MOVE_LEFT };
  },
  moveUp(): Action {
    return { type: MOVE_UP };
  },
  moveDown(): Action {
    return { type: MOVE_DOWN };
  },
};

// Define the start position
const startPosition: Position = { x: 0, y: 0 };

// Define a reducer function to update the state based on the action
export const positionReducer: PositionReducer = (
  position = startPosition, 
  action
) => {
  if ('type' in action) {
    switch (action.type) {
      case MOVE_RIGHT:
        return {
          ...position,
          x: position.x + 1,
        };
        
      case MOVE_LEFT:
        return {
          ...position,
          x: position.x - 1,
        };
        
      case MOVE_UP:
        return {
          ...position,
          y: position.y + 1
        };
        
      case MOVE_DOWN:
        return {
          ...position,
          y: position.y - 1
        };
        
      default:
        // If the action type is not recognized, return the current state without modifying it
        return position;
    }
  } else {
    return position;
  }
};
