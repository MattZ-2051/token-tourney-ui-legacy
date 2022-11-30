import {
  AVAILABLE,
  REMAINING,
  RED_COLOR,
  BLUE_COLOR,
} from 'constants/variables';
import { TournamentStatus } from 'types/tournament.types';
import TileCircleBlue from 'assets/images/tile-circle-blue.svg';
import TileCircleRed from 'assets/images/tile-circle-red.svg';
import TileCircleWhite from 'assets/images/tile-circle-white.svg';

const useTileDetails = (
  status: TournamentStatus | undefined,
  color?: string
) => {
  let text, icon;
  if (status === 'upcoming') {
    text = AVAILABLE;
    color = color ? color : BLUE_COLOR;
    icon = TileCircleBlue;
  } else {
    text = REMAINING;
    color = color ? color : RED_COLOR;
    icon = TileCircleRed;
  }

  if (color === 'white') {
    icon = TileCircleWhite;
  }

  return {
    text,
    color,
    icon,
  };
};

export { useTileDetails };
