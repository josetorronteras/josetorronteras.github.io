export type NavigationItem = {
  label: string;
  path: string;
};

export const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    path: "/"
  },
  {
    label: "Posts",
    path: "/posts"
  },
];