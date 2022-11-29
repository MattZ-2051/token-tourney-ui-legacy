import { Dispatch } from 'react';
import { Tournament, TournamentStatus } from 'types/tournament.types';
import { TournamentActions, Types } from 'store/reducers';

export const getTournaments = (
  dispatch: Dispatch<TournamentActions>,
  status?: TournamentStatus
) => {
  dispatch({
    type: Types.AddTournament,
    payload: mockData.filter((item) => item.status === status) as Tournament[],
  });
};

export const getFeaturedTournaments = (
  dispatch: Dispatch<TournamentActions>
) => {
  dispatch({
    type: Types.AddFeatured,
    payload: mockData as Tournament[],
  });
};

const mockData = [
  {
    id: 1,
    title: `Win Messi's Signed World Cup Boots`,
    description: `Win Leo Messi’s signed boots from the 2018 World Cup`,
    image:
      'https://infinite-digital-prod.s3.amazonaws.com/redjay/releases/Sept27/public/publicAssetRedJay2.jpg',
    currentRound: 'entry',
    status: 'upcoming',
    spots: 2910,
    totalSpots: 8000,
    startDate: '2022-12-01T12:11:35.585Z',
    price: 10,
  },
  {
    id: 2,
    title: `Win Messi's Signed World Cup Boots`,
    description: `Win Leo Messi’s signed boots from the 2018 World Cup`,
    image:
      'https://infinite-digital-prod.s3.amazonaws.com/redjay/releases/Sept27/public/publicAssetRedJay2.jpg',
    currentRound: 'entry',
    status: 'upcoming',
    spots: 2910,
    totalSpots: 8000,
    startDate: '2022-12-01T12:11:35.585Z',
    price: 15,
  },
  {
    id: 3,
    title: `Win Messi's Signed World Cup Boots`,
    description: `Win Leo Messi’s signed boots from the 2018 World Cup`,
    image:
      'https://infinite-digital-prod.s3.amazonaws.com/redjay/releases/Sept27/public/publicAssetRedJay2.jpg',
    currentRound: 'entry',
    status: 'upcoming',
    spots: 2910,
    totalSpots: 8000,
    startDate: '2022-12-01T12:11:35.585Z',
    price: 20,
  },
  {
    id: 4,
    title: `Win Messi's Signed World Cup Boots`,
    description: `Win Leo Messi’s signed boots from the 2018 World Cup`,
    image:
      'https://infinite-digital-prod.s3.amazonaws.com/redjay/releases/Sept27/public/publicAssetRedJay2.jpg',
    currentRound: 'entry',
    status: 'active',
    spots: 3400,
    totalSpots: 6000,
    startDate: '2022-12-01T12:11:35.585Z',
    price: 25,
  },
  {
    id: 5,
    title: `Win Messi's Signed World Cup Boots`,
    description: `Win Leo Messi’s signed boots from the 2018 World Cup`,
    image:
      'https://infinite-digital-prod.s3.amazonaws.com/redjay/releases/Sept27/public/publicAssetRedJay2.jpg',
    currentRound: 'entry',
    status: 'active',
    spots: 2910,
    totalSpots: 3000,
    startDate: '2022-12-01T12:11:35.585Z',
    price: 50,
  },
  {
    id: 6,
    title: `Win Messi's Signed World Cup Boots`,
    description: `Win Leo Messi’s signed boots from the 2018 World Cup`,
    image:
      'https://infinite-digital-prod.s3.amazonaws.com/redjay/releases/Sept27/public/publicAssetRedJay2.jpg',
    currentRound: 'entry',
    status: 'active',
    spots: 1030,
    totalSpots: 10000,
    startDate: '2022-12-01T12:11:35.585Z',
    price: 75,
  },
];
