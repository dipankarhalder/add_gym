import {
  Home,
  Analysis,
  Event,
  Course,
  Location,
  CheckPlus,
} from "../Shared/Icons";
import { paths } from "../Constant";

const currentYear = new Date().getFullYear();
export const sidebarLink = [
  {
    id: 1,
    title: "Main Menus",
    children: [
      { id: 1, title: "Dashboard", path: paths.APPS, icon: Home },
      { id: 2, title: "Analysis", path: paths.ANALYSIS, icon: Analysis },
      {
        id: 4,
        title: `New Candidate - ${currentYear} `,
        path: paths.NEWCAN,
        icon: CheckPlus,
      },
      { id: 5, title: "Events", path: paths.EVENTS, icon: Event },
      { id: 6, title: "Courses", path: paths.COURSES, icon: Course },
      { id: 7, title: "Campus", path: paths.LOCATIONS, icon: Location },
    ],
  },
];
