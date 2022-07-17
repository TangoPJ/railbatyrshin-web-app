import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { INavMenu, navMenu } from '../../../../data';
import styles from './Mobile.module.scss';

const MobileMenu: React.FC = () => {
  const [active, setActive] = useState<Boolean>(false);
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const currentRoute = router.pathname;

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        return setActive(false);
      }
    };

    window.addEventListener('click', handleClickOutside, true);
    return () => window.removeEventListener('click', handleClickOutside, true);
  }, [active]);

  const listMenuItems = navMenu.map((menu: INavMenu, index: number) => (
    <li className={styles.navMenu__menuItem} key={index}>
      <Link href={menu.path}>
        <a
          className={`
          ${currentRoute === menu.path && styles.active}
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
        onClick={() => setActive(!active)}
        className={`${styles.mobileButton} ${active && styles.show}`}
      >
        <span
          className={`${styles.mobileButton__centerLine} ${
            active && styles.show
          }`}
        ></span>
      </button>
      <nav
        ref={ref}
        className={`${active && styles.sideNavActive} ${styles.sideNav}`}
      >
        <ul className={styles.sideNav__menu}>{listMenuItems}</ul>
      </nav>
    </>
  );
};

export default MobileMenu;
