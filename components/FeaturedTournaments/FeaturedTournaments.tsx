import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Button from 'components/Button';
import routes from 'constants/routes';
import Tile from 'components/Tile/Tile';
import { BLUE_COLOR, RED_COLOR } from 'constants/variables';
import styles from './FeaturedTournaments.module.scss';
import { Tournament, TournamentStatus } from 'types/tournament.types';

export interface FeaturedTournamentsProps {
  title: string;
  subtitle: string;
  buttonText: string;
  tournaments: Tournament[];
  status: TournamentStatus;
}

const FeaturedTournaments = ({
  title,
  subtitle,
  buttonText,
  tournaments,
  status,
}: FeaturedTournamentsProps) => {
  const router = useRouter();

  return (
    <div className={`py-18 ${styles.featuredContainer}`}>
      <Fragment>
        <span
          className={`text-13 font-bold uppercase ${styles.title}`}
          style={{
            ['color' as string]: status === 'upcoming' ? BLUE_COLOR : RED_COLOR,
          }}
        >
          {title}
        </span>
        <div className="flex justify-between md:flex-row flex-col">
          <span className="text-3xl md:text-46 font-bold">{subtitle}</span>
          <Button
            className={`py-5 px-8 mt-7 md:mt-0 ${styles.btn}`}
            onClick={() => router.push(routes.tournaments)}
            variant="primary"
          >
            {buttonText}
          </Button>
        </div>
      </Fragment>

      <section>
        <div className="relative mx-auto my-0" style={{ width: '100%' }}>
          <div className="flex flex-col md:flex-row flex-wrap justify-between items-center">
            {tournaments.map((item: Tournament) => (
              <Tile {...item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedTournaments;
