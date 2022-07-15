import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { INavMenu, navMenu } from '../../../../data';
import styles from './Mobile.module.scss';

const MobileMenu: React.FC = () => {
  const [active, setActive] = useState<Boolean>(false);
  const router = useRouter();
  const currentRoute = router.pathname;
  const listMenuItems = navMenu.map((menu: INavMenu, index: number) => (
    <li className={styles.navMenu__menuItem} key={index}>
      <Link href={menu.path}>
        <a
          className={`
          ${currentRoute === menu.path ? styles.active : ''}
        `}
          onClick={() => setActive(false)}
        >
          {menu.name}
        </a>
      </Link>
    </li>
  ));

  return (
    <>
      <div
        onClick={() => setActive(!active)}
        className={`${styles.mobileButton} ${active ? styles.show : ''}`}
      >
        <span
          className={`${styles.mobileButton__centerLine} ${
            active ? styles.show : ''
          }`}
        ></span>
      </div>
      <div
        className={`${styles.sideNav} ${active ? styles.sideNavActive : ''}`}
      >
        <ul className={styles.sideNav__menu}>{listMenuItems}</ul>
      </div>
    </>
  );
};

export default MobileMenu;
