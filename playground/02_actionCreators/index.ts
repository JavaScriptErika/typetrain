namespace ActionTypes {
  export const INCREASE = "actions/INCREASE";
  export const DECREASE = "actions/DECREASE";
}

// or

export class ActionTypes {
  static readonly INCREASE = "counter/INCREASE";
  static readonly DECREASE = "counter/DECREASE";
}

export interface IncreaseAction {
  readonly type: typeof ActionTypes.INCREASE;
  payload: number;
}

export interface DecreaseAction {
  readonly type: typeof ActionTypes.DECREASE;
  payload: number;
}

export type Action = IncreaseAction | DecreaseAction;

// usage
export const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.INCREASE:
      // action's type will be deduced as IncreaseAction here
    default:
      return state;
  }
}