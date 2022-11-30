import { useCallback, useContext, useEffect, useState } from 'react';
import { Tournament, TournamentStatus } from 'types/tournament.types';
import { AppContext } from 'store/context';
import { getTournaments } from 'pages/api/tournaments/tournaments.api';
import Tile from 'components/Tile/Tile';
import Tabs from 'components/Tabs';
import MarketplaceFeatured from 'components/MarketplaceFeatured/MarketplaceFeatured';

const Tournaments = () => {
  const {
    state: {
      tournaments: { tournaments },
    },
    dispatch,
  } = useContext(AppContext);
  const [activeTab, setActiveTab] = useState('upcoming');

  useEffect(() => {
    getTournaments(dispatch, activeTab as TournamentStatus);
  }, []);

  const changeTab = useCallback(
    (tab: string) => {
      setActiveTab(tab);
      setTimeout(() => {
        getTournaments(dispatch, tab as TournamentStatus);
      }, 1000);
    },
    [setActiveTab, setTimeout, getTournaments, dispatch]
  );
  return (
    <>
      <MarketplaceFeatured tournaments={tournaments} />
      <section className="mb-32">
        <h1 className="uppercase font-sonne-bold text-70 lg:text-120 mb-18">
          tournaments
        </h1>
        <Tabs
          active={activeTab}
          labels={['upcoming', 'active', 'past']}
          handleOnClick={changeTab}
        />
        <div className="relative mx-auto my-0 w-full">
          {tournaments.length ? (
            <div className="flex flex-col md:flex-row flex-wrap justify-between items-center">
              {tournaments.map((item: Tournament) => (
                <Tile {...item} key={item.id} />
              ))}
            </div>
          ) : (
            <div className="flex justify-center md:py-56 py-36">
              <span className="text-base lg:text-lg opacity-50">
                No tournaments found
              </span>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Tournaments;
