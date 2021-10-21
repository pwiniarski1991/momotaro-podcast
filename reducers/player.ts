import { IAction, PlayerState } from "../types/reducer";

export function playerReducer(state: PlayerState, action: IAction) {
  if (['data', 'error', 'loading'].includes(action.type)) {
    return { ...state, [action.type]: action.payload }
  }
  return state;
}
