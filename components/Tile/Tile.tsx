import Image from 'next/image';
import AlertBar from 'components/AlertBar/AlertBar';
import RoundIcon from 'assets/images/stack-line.svg';
import Ellipse from 'assets/images/ellipse.svg';
import { formatDecimals } from 'utils/numbers.utils';
import { useTileDetails } from 'hooks/useTileDetails';
import { CURRENCY } from 'constants/variables';
import styles from './Tile.module.scss';
import { Tournament } from 'types/tournament.types';

const Tile = (tournament: Tournament) => {
  const { text, color, icon } = useTileDetails(tournament.status);

  const renderDetails = () => (
    <span className="flex items-center">
      <Image src={icon} alt="ellipse icon" style={{ width: '16px' }} />
      <span
        className={`ml-2 mr-1 uppercase ${styles.roundQuantity}`}
        style={{ ['color' as string]: color }}
      >
        {formatDecimals(tournament.spots)} {text}{' '}
      </span>
      <span> {`/ ${formatDecimals(tournament.totalSpots)}`}</span>
    </span>
  );

  return (
    <div className={`relative my-13 ${styles.tileContainer}`}>
      <AlertBar
        className={styles.banner}
        variant={tournament.status}
        time={tournament.startDate}
      />
      <div className={styles.tileImageContainer}>
        {/* TODO: change once S3 bucket / asset repo is defined to use Image */}
        <img
          className={`object-cover mb-5 ${styles.tileImage}`}
          src={tournament.image}
          alt="tournament"
        />
      </div>

      <div className={styles.titleWrapper}>
        <h3 className="text-22 md:text-2xl break-words mb-2">
          {tournament.title}
        </h3>
        <p className={`text-base opacity-70 ${styles.description}`}>
          {tournament.description}
        </p>
      </div>

      <div className={styles.details}>
        <span className="flex sm:flex-col lg:flex-row items-start text-11 md:text-13 ">
          <div className="flex">
            <Image
              className="mr-2"
              src={RoundIcon}
              alt="round icon"
              style={{ width: '16px' }}
            />
            <span className="uppercase font-bold mr-2">
              {tournament.currentRound}
            </span>
            <Image
              className="mr-2"
              src={Ellipse}
              alt="ellipse icon"
              style={{ width: '3px' }}
            />
          </div>
          {renderDetails()}
        </span>
      </div>
      <span className={`text-34 absolute ${styles.price}`}>
        {`${formatDecimals(tournament?.price, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`}
        <span className="relative text-13 uppercase -top-3">{CURRENCY}</span>
      </span>
    </div>
  );
};

export default Tile;
