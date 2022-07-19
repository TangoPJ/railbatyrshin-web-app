import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { INavMenu, navMenu } from '../../../../data';
import styles from './Mobile.module.scss';

const MobileMenu: React.FC = () => {
  const [isActive, setActive] = useState<Boolean>(false);
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const currentRoute = router.pathname;

  // TODO: fix the logic to toggle class, sometimes it's not working
  const handleToggle = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    const handleClickOutside = ({ target }: any) => {
      if (
        ref.current &&
        !ref.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setActive(false);
      }
    };

    window.addEventListener('click', handleClickOutside, true);
    return () => window.removeEventListener('click', handleClickOutside, true);
  }, [isActive]);

  const listMenuItems = navMenu.map((menu: INavMenu, index: number) => (
    <li key={index}>
      <Link href={menu.path}>
        <a
          className={`
          ${currentRoute === menu.path ? styles['sideNav__menu--active'] : ''}
        `}
          onClick={() => setActive(false)}
        >
          {menu.name.toUpperCase()}
        </a>
      </Link>
    </li>
  ));

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-label="menu"
        className={`${styles.mobileButton} ${
          isActive ? styles['mobileButton--show'] : ''
        }`}
        onClick={() => handleToggle()}
      >
        <span
          className={`${styles.mobileButton__centerLine} ${
            isActive ? styles['mobileButton__centerLine--show'] : ''
          }`}
        ></span>
      </button>
      <nav
        ref={ref}
        className={`${isActive ? styles['sideNav--show'] : ''} ${
          styles.sideNav
        }`}
      >
        <ul className={styles.sideNav__menu}>{listMenuItems}</ul>
      </nav>
    </>
  );
};

export default MobileMenu;
