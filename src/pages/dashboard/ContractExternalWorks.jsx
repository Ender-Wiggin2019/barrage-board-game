import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import { contractData, externalData } from "@/data";
import { Contract, ExternalWork } from "@/widgets/contract";
import React from "react";
import PropTypes from "prop-types";
// import ExternalWork from "@/widgets/contract/external-work.jsx";
import Image from "../../../public/img/bg.jpg"
import { Translation } from "react-i18next";

function ContractTable() {
  return (
    <div className="mt-8 mb-8 flex flex-col gap-10 ">
      {Object.keys(contractData).map(
        (contractType) => {
          const gridStyle = contractData[contractType].contractType === "National Contract" ? "grid grid-rows-2 grid-flow-col gap-1 place-content-center" : "grid grid-cols-3 md:grid-cols-5  grid-flow-row gap-5 place-content-center";
          return(
            <Card className="rounded-xl border-solid border-4 border-orange-300 bg-opacity-10">
              <CardHeader variant="gradient" color={contractData[contractType].contractColor} className="mb-4 p-3">
                <Typography variant="h6" color="white">
                  {contractData[contractType].contractType}
                </Typography>
              </CardHeader>
              <CardBody className="overflow-x-scroll">

                <div key={contractData[contractType].contractColor} className={gridStyle}>
                  {contractData[contractType].contractList.map(
                    ({ name, energyRequire, benefits}, key) => {

                      return (
                        <div key={name} className="scale-75 md:scale-100">
                          {/*<Avatar className="clip-avatar" src={img} alt={name} variant="circular" size="xl"/>*/}
                          <Contract key={name} name={name} energyRequire={energyRequire} benefits={benefits}/>
                        </div>
                      );
                    }
                  )}
                </div>
              </CardBody>
            </Card>
          );
        }
      )}
    </div>
  );
}


function ExternalTable() {
  return (
    <div className="mt-8 mb-8 flex flex-col gap-10">
      {Object.keys(externalData).map(
        (externalType) => {
          const gridStyle = "grid grid-cols-3 md:grid-cols-5 grid-flow-row gap-5 place-content-center";
          return(
            <Card className="rounded-xl border-solid border-4 border-orange-300 bg-opacity-10">
              <CardHeader variant="gradient" color={externalData[externalType].externalColor} className="mb-8 p-6">
                <Typography variant="h6" color="white">
                  {externalData[externalType].externalType}
                </Typography>
              </CardHeader>
              <CardBody className="overflow-x-scroll">
                <div key={externalData[externalType].externalColor} className={gridStyle}>
                  {externalData[externalType].externalList.map(
                    ({ name, machineRequire, benefits}, key) => {

                      return (
                        <div key={name} className="scale-75 md:scale-100">
                          {/*<Avatar className="clip-avatar" src={img} alt={name} variant="circular" size="xl"/>*/}
                          <ExternalWork key={name} name={name} machineRequire={machineRequire} benefits={benefits}/>
                        </div>
                      );
                    }
                  )}
                </div>
              </CardBody>
            </Card>
          );
        }
      )}
    </div>
  );
}

export function ContractExternalWorks() {

  return (

    <Translation>
      {
        (t, { i18n }) =>
          <Tabs value="contract">
            <TabsHeader>
              <Tab key="contract" value="contract" className="bg-transparent">{t("Contract")}</Tab>
              <Tab key="external" value="external">{t("External Work")}</Tab>
            </TabsHeader>
            <TabsBody>
              {/*{data.map(({ value, desc }) => (*/}
              <TabPanel key="contract" value="contract"><ContractTable/></TabPanel>
              {/*<TabPanel key="external" value="external"><ContractTable /></TabPanel>*/}

              <TabPanel key="external" value="external"><ExternalTable /></TabPanel>

            </TabsBody>
          </Tabs>
      }
    </Translation>
  );
}

export default ContractExternalWorks;
