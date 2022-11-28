export type Tournament = {
  id: number;
  title: string;
  description: string;
  image: string;
  currentRound: string;
  status: TournamentStatus;
  spots: number;
  totalSpots: number;
  startDate: string | Date;
  price: number;
};

export type TournamentStatus = 'upcoming' | 'active' | 'past';
