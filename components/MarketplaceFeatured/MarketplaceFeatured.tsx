import { FC, useState, useCallback } from 'react';
import Image from 'next/image';
import featuredImg from 'assets/images/marketplace-featured-tourney.png';
import featuredImgMobile from 'assets/images/marketplace-featured-tourney-mobile.png';
import RoundIcon from 'assets/images/stack-line.svg';
import Ellipse from 'assets/images/ellipse.svg';
import CursorLeftIcon from 'assets/images/pagination-cursor-left.svg';
import CursorRightIcon from 'assets/images/pagination-cursor-right.svg';
import AlertBar from 'components/AlertBar/AlertBar';
import { Tournament } from 'types/tournament.types';
import { useTileDetails } from 'hooks/useTileDetails';
import { formatDecimals } from 'utils/numbers.utils';
import useMobile from 'hooks/useMobile';

interface IProps {
  tournaments: Tournament[];
}
const MarketplaceFeatured: FC<IProps> = ({ tournaments }) => {
  const [index, setIndex] = useState<number>(0);
  const { text, color, icon } = useTileDetails(
    tournaments[index]?.status,
    'white'
  );
  const { isMobile } = useMobile();

  const imgComponent = useCallback(() => {
    return (
      <Image
        src={isMobile ? featuredImgMobile : featuredImg}
        className="lg:rounded-[10px] object-cover w-full lg:h-full"
        alt="featured tourney img"
      />
    );
  }, [isMobile]);

  const handleIndex = () => {
    setIndex((prevState) => {
      if (prevState >= tournaments.length - 1) {
        return 0;
      }
      return prevState + 1;
    });
  };

  return tournaments[index] ? (
    <div className="relative">
      <div>{imgComponent()}</div>
      <div className="text-white font-helvetica bottom-0 lg:bottom-auto lg:top-[30%] lg:ml-[60px] absolute w-full">
        {isMobile && (
          <div className="flex mb-[32.5px] pl-5">
            <Image
              className="mr-2 hover:cursor-pointer"
              src={CursorLeftIcon}
              alt="pagination left icon"
              style={{ width: '8px' }}
            />
            <div className="m-0 flex text-[13px] font-bold tracking-wider leading-5">
              <p>{index + 1}</p>
              <p className="mx-1">OF</p>
              <p>{tournaments.length}</p>
            </div>
            <Image
              className="ml-2 hover:cursor-pointer"
              src={CursorRightIcon}
              alt="pagination left icon"
              style={{ width: '8px' }}
              onClick={handleIndex}
            />
          </div>
        )}
        <div className="p-5 sm:p-0">
          <p className="opacity-70 text-[13px] leading-5 font-bold tracking-wider mb-[10px]">
            FEATURED TOURNAMENT
          </p>
          <p className="lg:text-[46px] text-[32px] font-bold leading-[110%] mb-5">
            Serena Williams <br /> Fashion Show
          </p>
          <p className="opacity-70 text-[13px] lg:text-base leading-5 font-normal tracking-wider mb-[10px]">
            Meet Serena at her seasonal show in Los Angeles
          </p>
          <div className="mb-5 flex !text-[11px] lg:!text-[13px] !font-bold lg:!leading-5 lg:!tracking-wider">
            <div className="flex">
              <Image
                className="mr-2"
                src={RoundIcon}
                alt="round icon"
                style={{ width: '16px' }}
              />
              <span className="uppercase mr-2">
                {tournaments[index].currentRound}
              </span>
              <Image
                className="mr-2"
                src={Ellipse}
                alt="ellipse icon"
                style={{ width: '3px' }}
              />
            </div>
            <span className="flex items-center !text-white">
              <Image src={icon} alt="ellipse icon" style={{ width: '16px' }} />
              <span
                className={`ml-2 mr-1 uppercase`}
                style={{ ['color' as string]: color }}
              >
                {formatDecimals(tournaments[index].spots)} {text}{' '}
              </span>
              <span>
                {' '}
                {`/ ${formatDecimals(tournaments[index].totalSpots)}`}
              </span>
            </span>
          </div>
        </div>
        <AlertBar
          variant={'active'}
          time={tournaments[index].startDate}
          className="w-full lg:w-[418px] h-10"
        />
        {!isMobile && (
          <div className="flex mt-[37.5px]">
            <Image
              className="mr-2 hover:cursor-pointer"
              src={CursorLeftIcon}
              alt="pagination left icon"
              style={{ width: '8px' }}
            />
            <div className="m-0 flex text-[13px] font-bold tracking-wider leading-5">
              <p>{index + 1}</p>
              <p className="mx-1">OF</p>
              <p>{tournaments.length}</p>
            </div>
            <Image
              className="ml-2 hover:cursor-pointer"
              src={CursorRightIcon}
              alt="pagination left icon"
              style={{ width: '8px' }}
              onClick={handleIndex}
            />
          </div>
        )}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default MarketplaceFeatured;
