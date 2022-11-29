import { UserProvider } from '@auth0/nextjs-auth0';
import { createContext, Dispatch, FC, ReactElement, useReducer } from 'react';
import { Tournament } from 'types/tournament.types';
import { TournamentActions, tournamentReducer } from './reducers';

type InitialStateType = {
  tournaments: {
    tournaments: Tournament[];
    featuredTournaments: Tournament[];
  };
};

const initialState = {
  tournaments: {
    tournaments: [] as Tournament[],
    featuredTournaments: [] as Tournament[],
  },
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<TournamentActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { tournaments }: InitialStateType,
  action: TournamentActions
) => ({
  tournaments: tournamentReducer(tournaments, action),
});

const AppProvider = ({ children }: { children?: ReactElement }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <UserProvider>{children}</UserProvider>
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
