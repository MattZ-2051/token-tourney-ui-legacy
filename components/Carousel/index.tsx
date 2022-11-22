import { FC, useEffect, useState } from 'react';
import classnames from 'classnames';
import styles from './Carousel.module.scss';
import { CarouselItem } from './types';
import Image from 'next/image';
import { animationReset } from 'utils/ui.utils';

interface IProps {
  carouselItems: CarouselItem;
}

const Carousel: FC<IProps> = ({ carouselItems }): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [existingTimeout, setExistingTimeout] = useState<number>();

  const handleIndex = () => {
    selectedIndex < 3
      ? setSelectedIndex(selectedIndex + 1)
      : setSelectedIndex(0);
  };

  useEffect(() => {
    if (existingTimeout) {
      window.clearTimeout(existingTimeout);
    }
    const newTimeout = window.setTimeout(handleIndex, 8000);
    setExistingTimeout(newTimeout);
    animationReset('progressBar');
  }, [selectedIndex]);

  const handleClick = (index: number): void => {
    setSelectedIndex(index);
  };

  return carouselItems ? (
    <>
      <div className="mb-16">
        <Image
          className={styles.carouselImg}
          src={carouselItems?.images[selectedIndex]?.src}
          width={carouselItems?.images[selectedIndex]?.width}
          height={carouselItems?.images[selectedIndex]?.height}
          alt="carousel img"
          key={selectedIndex}
        />
      </div>
      <div
        className={classnames(
          'mb-7 w-full bg-white bg-opacity-20',
          styles.border
        )}
        id="progressBar"
      />
      <div className="flex flex-col lg:grid lg:grid-cols-4">
        {carouselItems.text.map((item, index) => {
          return (
            <div key={index}>
              <div
                className={classnames(
                  'md:w-[256px] text-left w-full hover:cursor-pointer ',
                  index !== 0 && 'pt-8 lg:pt-0',
                  selectedIndex === index
                    ? 'text-white'
                    : 'text-white opacity-30'
                )}
                onClick={() => handleClick(index)}
              >
                <div className="mb-4 text-[22px] font-bold font-helvetica-bold">
                  {item.title}
                </div>
                <div className="text-[18px] font-medium font-helvetica">
                  {item.body}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  ) : (
    <></>
  );
};

export default Carousel;
