export type Action = {
  type: string;
  value?: number;
  good?: number;
} | {};

export type Position = {
  x: number;
  y: number;
};

export type AmountReducer = (amount: number | undefined, action: Action) => number;
export type GoodsReducer = (goods: number[] | undefined, action: Action) => number[];
export type PositionReducer = (position: Position | undefined, action: Action) => Position;

export type Store = {
  getState: () => number | number[] | Position | undefined;
  dispatch: (action: Action) => void;
  subscribe: (func: (...args: unknown[]) => unknown) => void;
};

// ----------------------------------------------------------

export type TotalState = {
  amount: number,
  goods: number[],
  position: Position,
};

export type TotalInitialState = TotalState | {};

export type Reducers = {
  amount: AmountReducer,
  goods: GoodsReducer,
  position: PositionReducer,
};

export type TotalReducer = (state: TotalInitialState | undefined, action: Action) => TotalInitialState;
