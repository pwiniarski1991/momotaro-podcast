import { Data } from ".";
import { Details } from "./details";
import { Player } from "./player";

interface IError {
  message: string;
}

interface BaseState {
  error: IError | { message: string };
  loading: boolean;
}

export interface MainState extends BaseState {
  data: Data | null;
}

export type IAction =
  | { type: 'data', payload: Data }
  | { type: 'error', payload: IError }
  | { type: 'loading', payload: boolean };

export interface PlayerState extends BaseState {
  data: Player | null;
}

export interface DetailsState extends BaseState {
  data: Details | null;
}