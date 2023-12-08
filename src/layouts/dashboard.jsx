import { Routes, Route } from "react-router-dom";
import {
  Sidenav,
  DashboardNavbar,
  Configurator,
  Footer,
} from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";
import { Translation, useTranslation, Trans } from "react-i18next";

export function Dashboard() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div>
      <div className="min-h-screen">
        <Sidenav
          routes={routes}
          brandImg={
            sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct.png"
          }
        />
        <div className="p-4 xl:ml-80">
          <DashboardNavbar />
          <Routes>
            {routes.map(
              ({ layout, pages }) =>
                layout === "dashboard" &&
                pages.map(({ path, element }) => (
                  <Route exact path={path} element={element} />
                )),
            )}
          </Routes>
          <div className="text-blue-gray-600">
            <Footer
              brandName="Ender"
              brandLink="https://github.com/Ender-Wiggin2019"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
