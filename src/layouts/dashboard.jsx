import { Routes, Route } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import Image from "../../public/img/bg.jpg"
import {
  Sidenav,
  DashboardNavbar,
  Configurator,
  Footer,
} from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";
import { Translation, useTranslation, Trans } from 'react-i18next';

export function Dashboard() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div>
    {/*<div*/}
    {/*  className="bg-repeat absolute inset-0 z-0 h-full w-full object-cover"*/}
    {/*  style={{ backgroundImage: 'url(' + Image + ')', backgroundSize: '10%' , backgroundAttachment: 'fixed'}}*/}
    {/*></div>*/}
    {/*<div className="min-h-screen bg-blue-gray-50/50"> // TODO maybe change color*/}
    <div className="min-h-screen">
      <Sidenav
        routes={routes}
        brandImg={
          sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
        }
      />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />
        {/*<Configurator />*/}
        {/*<IconButton*/}
        {/*  size="lg"*/}
        {/*  color="white"*/}
        {/*  className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"*/}
        {/*  ripple={false}*/}
        {/*  onClick={() => setOpenConfigurator(dispatch, true)}*/}
        {/*>*/}
        {/*  <Cog6ToothIcon className="h-5 w-5" />*/}
        {/*</IconButton>*/}
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes>
        <div className="text-blue-gray-600">
          <Footer brandName="Ender" brandLink="https://github.com/Ender-Wiggin2019"/>
        </div>
      </div>
    </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
