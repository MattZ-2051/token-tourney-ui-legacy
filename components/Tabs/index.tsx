import classnames from 'classnames/bind';
import styles from './Tabs.module.scss';

const cx = classnames.bind(styles);

interface ITabsProps {
  labels: string[];
  handleOnClick: (tab: string) => void;
  active: string;
}

const Tabs = ({ labels, handleOnClick, active }: ITabsProps) => {
  return (
    <div
      className={`flex flex-wrap justify-between items-center border-b-gray-700 border-b-[6px] md:border-b md:pb-8 pb-5 ${styles.tabList}`}
    >
      <div
        className={`cursor-pointer text-base md:text-2xl font-bold font-helvetica`}
      >
        {labels.map((label: string) => (
          <a
            onClick={() => handleOnClick(label)}
            className={cx(
              `capitalize inline-block list-none -mb-3 mr-13 relative`,
              {
                ['active-tab']: label === active,
              }
            )}
            key={label}
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
