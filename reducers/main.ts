import { IAction, MainState } from "../types/reducer";

export function mainReducer(state: MainState, action: IAction) {
  if (['data', 'error', 'loading'].includes(action.type)) {
    return { ...state, [action.type]: action.payload }
  }
  return state;
}
