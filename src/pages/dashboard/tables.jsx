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
import { Contract } from "@/widgets/contract";
import React from "react";
import PropTypes from "prop-types";
import ExternalWork from "@/widgets/contract/external-work.jsx";

function ContractTable() {
  return (
    <div className="mt-8 mb-8 flex flex-col gap-10">
      {Object.keys(contractData).map(
        (contractType) => {
          const gridStyle = contractData[contractType].contractType === "National Contract" ? "grid grid-rows-2 grid-flow-col gap-1 place-content-center" : "grid grid-cols-5 grid-flow-row gap-5 place-content-center";
          return(
            <Card>
              <CardHeader variant="gradient" color={contractData[contractType].contractColor} className="mb-8 p-6">
                <Typography variant="h6" color="white">
                  {contractData[contractType].contractType}
                </Typography>
              </CardHeader>
              <CardBody className="overflow-x-scroll">
                <div key={contractData[contractType].contractColor} className={gridStyle}>
                  {contractData[contractType].contractList.map(
                    ({ name, energyRequire, benefits}, key) => {

                      return (
                        <div key={name} className="scale-100">
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
        (contractType) => {
          const gridStyle = externalData[contractType].contractType === "National Contract" ? "grid grid-rows-2 grid-flow-col gap-1 place-content-center" : "grid grid-cols-5 grid-flow-row gap-5 place-content-center";
          return(
            <Card>
              <CardHeader variant="gradient" color={externalData[contractType].contractColor} className="mb-8 p-6">
                <Typography variant="h6" color="white">
                  {externalData[contractType].contractType}
                </Typography>
              </CardHeader>
              <CardBody className="overflow-x-scroll">
                <div key={externalData[contractType].contractColor} className={gridStyle}>
                  {externalData[contractType].contractList.map(
                    ({ name, machineRequire, benefits}, key) => {

                      return (
                        <div key={name} className="scale-100">
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

export function Tables() {

  const data = [
    {
      label: "HTML",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "React",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },

  ];

  return (
    <Tabs id="custom-animation" value="contract">
      <TabsHeader>
        <Tab key="contract" value="contract">Contract</Tab>
        <Tab key="external" value="external">External Work</Tab>
      </TabsHeader>
      <TabsBody
        animate={{
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {/*{data.map(({ value, desc }) => (*/}
        <TabPanel key="contract" value="contract"><ContractTable /></TabPanel>
        {/*<TabPanel key="external" value="external"><ContractTable /></TabPanel>*/}

        <TabPanel key="external" value="external"><ExternalTable /></TabPanel> // TODO

      </TabsBody>
    </Tabs>
  );
}

export default Tables;
