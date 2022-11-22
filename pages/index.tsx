import FeaturedTournaments from 'components/FeaturedTournaments/FeaturedTournaments';
import { featuredTournamentsTexts } from 'constants/variables';
import { TournamentContext } from 'contexts/TournamentContext';
import { useContext, useEffect } from 'react';
import { getTournaments } from './api/tournaments/tournaments.api';

const Home = () => {
  const { upcoming, active } = featuredTournamentsTexts;
  const { state, dispatch } = useContext(TournamentContext);

  useEffect(() => {
    if (!state.tournaments.length) {
      getTournaments(dispatch);
    }
  });

  return (
    <div className="divide-y md:divide-y-0 divide-gray-700">
      <FeaturedTournaments
        tournaments={state?.tournaments.filter(
          (item) => item.status === 'upcoming'
        )}
        buttonText={upcoming.buttonText}
        title={upcoming.title}
        subtitle={upcoming.subtitle}
        status="upcoming"
      />
      <FeaturedTournaments
        tournaments={state?.tournaments.filter(
          (item) => item.status === 'active'
        )}
        buttonText={active.buttonText}
        title={active.title}
        subtitle={active.subtitle}
        status="active"
      />
    </div>
  );
};

export default Home;
