import Carousel from 'components/Carousel';
import { CarouselItem } from 'components/Carousel/types';
import FeaturedTournaments from 'components/FeaturedTournaments/FeaturedTournaments';
import { featuredTournamentsTexts } from 'constants/variables';
import { AppContext } from 'store/context';
import { useContext, useEffect } from 'react';
import { getFeaturedTournaments } from './api/tournaments/tournaments.api';

import stepOne from '../assets/images/landing-step-1.png';
import stepTwo from '../assets/images/landing-step-2.png';
import stepThree from '../assets/images/landing-step-3.png';
import stepFour from '../assets/images/landing-step-4.png';

const carouselItems: CarouselItem = {
  text: [
    {
      title: '1. ENTER',
      body: 'Enter a new tournament or buy a spot in an active tournament in the marketplace',
    },
    {
      title: '2. PLAY',
      body: 'Answer questions correctly to make it to the next round',
    },
    {
      title: '3. SELL OR PLAY ON',
      body: 'Opt to sell your spot in the marketplace or keep playing to win',
    },
    {
      title: '4. WIN BIG',
      body: 'Win once-in-a-lifetime celebrity experiences and unique prizes',
    },
  ],
  images: [stepOne, stepTwo, stepThree, stepFour],
};

const Home = () => {
  const { upcoming, active } = featuredTournamentsTexts;
  const {
    state: {
      tournaments: { featuredTournaments },
    },
    dispatch,
  } = useContext(AppContext);

  useEffect(() => {
    if (!featuredTournaments.length) {
      getFeaturedTournaments(dispatch);
    }
  }, []);

  return (
    <>
      <Carousel carouselItems={carouselItems} />
      <div className="divide-y md:divide-y-0 divide-gray-700">
        <FeaturedTournaments
          tournaments={featuredTournaments?.filter(
            (item) => item.status === 'upcoming'
          )}
          buttonText={upcoming.buttonText}
          title={upcoming.title}
          subtitle={upcoming.subtitle}
          status="upcoming"
        />
        <FeaturedTournaments
          tournaments={featuredTournaments?.filter(
            (item) => item.status === 'active'
          )}
          buttonText={active.buttonText}
          title={active.title}
          subtitle={active.subtitle}
          status="active"
        />
      </div>
    </>
  );
};

export default Home;
