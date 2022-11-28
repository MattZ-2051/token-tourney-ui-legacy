import { createContext, Dispatch, ReactElement, useReducer } from 'react';
import { Tournament } from 'types/tournament.types';

type InitialStateType = {
  tournaments: Tournament[];
};

export enum Types {
  Add = 'ADD_TOURNAMENT',
}

type TournamentPayload = {
  [Types.Add]: {
    tournaments: Tournament[];
  };
};

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

const initialState = { tournaments: [] };

const TournamentContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<unknown>;
}>({
  state: initialState,
  dispatch: () => null,
});

export type TournamentActions =
  ActionMap<TournamentPayload>[keyof ActionMap<TournamentPayload>];

export const tournamentReducer = (state: any, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case Types.Add:
      return {
        ...state,
        tournaments: payload,
      };
    default:
      return state;
  }
};

const TournamentProvider = ({ children }: { children?: ReactElement }) => {
  const [state, dispatch] = useReducer(tournamentReducer, initialState);

  return (
    <TournamentContext.Provider value={{ state, dispatch }}>
      {children}
    </TournamentContext.Provider>
  );
};

export { TournamentProvider, TournamentContext };
