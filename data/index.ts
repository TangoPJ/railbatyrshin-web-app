export interface INavMenu {
  name: string;
  path: string;
}

export const navMenu: Array<INavMenu> = [
  { name: 'home', path: '/' },
  { name: 'blog', path: '/blog' },
  { name: 'contact', path: '/contact' },
];
