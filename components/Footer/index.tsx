import { Fragment, useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import classnames from 'classnames/bind';
import LogoOnly from 'assets/images/tt-logo-only.svg';
import DiscordLogo from 'assets/images/discord.svg';
import TwitterLogo from 'assets/images/twitter.svg';
import InstagramLogo from 'assets/images/instagram.svg';
import InfiniteWorldLogo from 'assets/images/infiniteworld.svg';
import Logo from 'assets/images/logo.svg';
import TokenTourneyLogo from 'assets/images/symbol.png';
import Button from 'components/Button/Button';
import routes from 'constants/routes';
import TokenLink from 'components/TokenLink';
import Marquee from 'components/Marquee';
import styles from './Footer.module.scss';

const cx = classnames.bind(styles);

const footerLinks = [
  { href: routes.tournaments, label: 'tournaments' },
  { href: routes.marketplace, label: 'marketplace' },
  { href: routes.howToPlay, label: 'how to play' },
  { href: routes.help, label: 'help center' },
  { href: routes.privacy, label: `privacy policy` },
  { href: routes.partner, label: `partner with us` },
  { href: routes.terms, label: `terms & conditions` },
  { href: routes.winners, label: `winners’ circle` },
  { href: routes.contact, label: `contact` },
];

const Footer = () => {
  const router = useRouter();

  const renderContent = useCallback(
    () => (
      <Fragment>
        <p className="mr-8 uppercase text-10xl font-sonne-bold">compete</p>
        <Image className="mr-8" src={Logo} alt="Token Tourney Logo" />
        <p className="mr-8 uppercase text-10xl font-sonne-bold">
          win tournaments
        </p>
        <Image className="mr-8" src={Logo} alt="Token Tourney Logo" />
      </Fragment>
    ),
    []
  );

  return (
    <Fragment>
      {router.route === routes.home && (
        <div className="my-20">
          <Marquee gradient={false} speed={200} delay={0} pauseOnHover>
            {/* need to render twice to make the effect work */}
            {renderContent()}
            {renderContent()}
          </Marquee>
        </div>
      )}
      <footer className={cx(`${styles.footer} px-5 md:pr-0 pt-16`)}>
        <div className="lg:mt-28">
          <div className="flex flex-col lg:flex-row relative">
            <div className="lg:w-2/6 mr-10 lg:pl-28">
              <Image src={LogoOnly} alt="Token Tourney Logo" />
              <h2 className="pt-5 text-3xl font-bold">
                Own the <br /> competition
              </h2>

              <div className="flex pt-8">
                <Button
                  className="mr-8 py-5 px-8"
                  variant="primary"
                  onClick={() => router.push(routes.tournaments)}
                >
                  Tournaments
                </Button>

                <div className="flex gap-6">
                  <Image src={DiscordLogo} alt="Discord" />
                  <Image src={TwitterLogo} alt="Twitter" />
                  <Image src={InstagramLogo} alt="Instagram" />
                </div>
              </div>
            </div>

            <div
              className={cx(
                `${styles.linksSection} grid grid-cols-2 mt-8 md:grid-cols-3 md:h-20 lg:mt-16 lg:gap-y-5`
              )}
            >
              {footerLinks.map(({ href, label }) => (
                <TokenLink href={href} label={label} key={label} />
              ))}
            </div>

            <Image
              className="absolute right-0 lg:w-64 lg:-top-20 lg:block hidden xl:w-80 xl:-top-24"
              src={TokenTourneyLogo}
              alt="TokenTourney"
            />
          </div>
          <div className="mt-10 lg:pl-28 flex flex-col mb-16 lg:mb-14">
            <Image src={InfiniteWorldLogo} alt="InfiniteWorld" />

            <div className="flex flex-col lg:flex-row justify-between lg:items-end">
              <span
                className={`pt-10 opacity-40 text-xs font-normal flex-wrap lg:w-1/3 md:w-2/4`}
              >
                Tellus senectus ligula torquent molestie penatibus. Quam
                scelerisque velit ac rhoncus potenti nulla nisi lacus fringilla
                nibh metus nullam vulputate faucibus mi litora condimentum
                sagittis felis odio in conubia phasellus.
              </span>
              <span className={`pt-4 opacity-40 text-xs font-normal lg:w-1/3`}>
                © TokenTourney is a trademark of TokenTourney LLC.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
