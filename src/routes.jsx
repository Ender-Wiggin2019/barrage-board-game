import {
  UserCircleIcon,
  Cog8ToothIcon,
  PlusCircleIcon,
  WrenchIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/solid";
import {
  ExecutiveOfficers,
  Contracts,
  ExternalWorks,
  TechTiles,
  CreateInterface,
} from "@/pages/dashboard";
// import CreateInterface from "./pages/dashboard/create.jsx";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Executive Officers",
        path: "/executive-officers",
        element: <ExecutiveOfficers />,
      },
      {
        icon: <DocumentCheckIcon {...icon} />,
        name: "Contracts",
        path: "/contracts",
        element: <Contracts />,
      },
      {
        icon: <WrenchIcon {...icon} />,
        name: "External Works",
        path: "/external-works",
        element: <ExternalWorks />,
      },
      {
        icon: <Cog8ToothIcon {...icon} />,
        name: "Tech Tiles",
        path: "/tech-tiles",
        element: <TechTiles />,
      },
      {
        icon: <PlusCircleIcon {...icon} />,
        name: "Creator",
        path: "/creaor",
        element: <CreateInterface />,
      },
    ],
  },
];

export default routes;
