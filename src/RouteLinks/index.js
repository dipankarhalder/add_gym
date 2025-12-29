import { Home, Analysis, Scholar, Location } from "../Shared/Icons";
import { paths } from "../Constant";

export const sidebarLink = [
  {
    id: 1,
    title: "Core Menus",
    children: [
      { id: 1, title: "Dashboard", path: paths.APPS, icon: Home },
      { id: 2, title: "Analysis", path: paths.ANALYSIS, icon: Analysis },
      { id: 7, title: "Locations", path: paths.LOCATIONS, icon: Location },
    ],
  },
  {
    id: 3,
    title: "Trainers and Users",
    children: [
      { id: 1, title: "Trainers", path: paths.TEACHER, icon: Scholar },
    ],
  },
];
