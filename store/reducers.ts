import { Tournament } from 'types/tournament.types';

export enum Types {
  AddTournament = 'ADD_TOURNAMENT',
  AddFeatured = 'ADD_FEATURED_TOURNAMENTS',
}

export type TournamentActions =
  ActionMap<TournamentPayload>[keyof ActionMap<TournamentPayload>];

type TournamentPayload = {
  [Types.AddTournament]: Tournament[];
  [Types.AddFeatured]: Tournament[];
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

export const tournamentReducer = (state: any, action: TournamentActions) => {
  const { type, payload } = action;

  switch (type) {
    case Types.AddTournament:
      return {
        ...state,
        tournaments: payload,
      };

    case Types.AddFeatured:
      return {
        ...state,
        featuredTournaments: payload,
      };

    default:
      return state;
  }
};
