import { Reducer, useEffect, useReducer } from "react";
import { IAction, IState, State } from "../types/reducer";
import { fetchData } from "../utils/fetchData";

export const useFetchData = (reducer: any, INITIAL_STATE: any, url: string = ''): <IState | State, IAction> => {
  type RState = {
    data: Record<string, string>,
    error: { message: string },
    loading: boolean
  }

  const [{ data, error, loading }, dispatch] = useReducer<Reducer<RState, IAction>>(reducer, INITIAL_STATE);
  useEffect(() => {
    dispatch({ type: 'loading', payload: true });
    fetchData(url)
      .then(response => {
        dispatch({ type: 'data', payload: response })
      })
      .catch(error => dispatch({ type: 'error', payload: { message: error.message } }))
      .finally(() => dispatch({ type: 'loading', payload: false }));
  }, []);

  return [{ data, error, loading }, dispatch];
}