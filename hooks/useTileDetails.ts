import {
  AVAILABLE,
  REMAINING,
  RED_COLOR,
  BLUE_COLOR,
} from 'constants/variables';
import { TournamentStatus } from 'types/tournament.types';
import TileCircleBlue from 'assets/images/tile-circle-blue.svg';
import TileCircleRed from 'assets/images/tile-circle-red.svg';

const useTileDetails = (status: TournamentStatus) => {
  let text, color, icon;
  if (status === 'upcoming') {
    text = AVAILABLE;
    color = BLUE_COLOR;
    icon = TileCircleBlue;
  } else {
    text = REMAINING;
    color = RED_COLOR;
    icon = TileCircleRed;
  }

  return {
    text,
    color,
    icon,
  };
};

export { useTileDetails };
