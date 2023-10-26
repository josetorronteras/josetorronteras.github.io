export type NavigationItem = {
  label: string;
  path: string;
};

const navigationItems: NavigationItem[] = [
  { label: "Home", path: "/" },
  { label: "Posts", path: "/posts" },
];

export default navigationItems;
