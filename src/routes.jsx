import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  Cog8ToothIcon,
  PlusCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Home, ExecutiveOfficers, ContractExternalWorks, TechTiles } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import CreateInterface from "./pages/dashboard/create.jsx";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      // {
      //   icon: <HomeIcon {...icon} />,
      //   name: "dashboard",
      //   path: "/home",
      //   element: <Home />,
      // },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Executive Officers",
        path: "/executive-officers",
        element: <ExecutiveOfficers />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Contracts/External Works",
        path: "/Contract-external-works",
        element: <ContractExternalWorks />,
      },
      {
        icon: <Cog8ToothIcon {...icon} />,
        name: "Tech Tiles",
        path: "/tech-tiles",
        element: <TechTiles />,
      },
      {
        icon: <PlusCircleIcon {...icon} />,
        name: "creator",
        path: "/creaor",
        element: <CreateInterface />,
      },
    ],
  },
  // {
  //   title: "auth pages",
  //   layout: "auth",
  //   pages: [
  //     {
  //       icon: <ArrowRightOnRectangleIcon {...icon} />,
  //       name: "sign in",
  //       path: "/sign-in",
  //       element: <SignIn />,
  //     },
  //     {
  //       icon: <UserPlusIcon {...icon} />,
  //       name: "sign up",
  //       path: "/sign-up",
  //       element: <SignUp />,
  //     },
  //   ],
  // },
];

export default routes;
