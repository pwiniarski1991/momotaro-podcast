import { IAction, DetailsState } from "../types/reducer";

export function detailsReducer(state: DetailsState, action: IAction) {
  if (['data', 'error', 'loading'].includes(action.type)) {
    return { ...state, [action.type]: action.payload }
  }
  return state;
}
