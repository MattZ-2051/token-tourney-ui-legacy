import { useEffect, useState } from 'react';

const useMobile = () => {
  const [width, setWidth] = useState<number>();

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return {
    isMobile: width ? width <= 768 : undefined,
  };
};

export default useMobile;
