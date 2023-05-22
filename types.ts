export type Action = {
  type: string;
  value?: number;
  good?: number;
} | {};

export type AmountReducer = (amount: number | undefined, action: Action) => number;
export type GoodsReducer = (goods: number[] | undefined, action: Action) => number[];

export type Store = {
  getState: () => number | number[] | undefined;
  dispatch: (action: Action) => void;
  subscribe: (func: (...args: unknown[]) => unknown) => void;
}
