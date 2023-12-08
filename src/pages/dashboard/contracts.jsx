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
import {ContainerCard} from "@/widgets/cards/containerCard.jsx";

export function Contracts() {
  return (
      <div className="my-8 flex flex-col gap-10 ">
        {Object.keys(contractData).map(
            (contractType) => {
              const gridStyle = contractData[contractType].contractType === "National Contract" ? "grid grid-rows-2 grid-flow-col gap-1 place-content-center" : "grid grid-cols-3 md:grid-cols-5  grid-flow-row gap-5 place-content-center";
              return(
                  <ContainerCard color={contractData[contractType].contractColor} header={contractData[contractType].contractType}>
                    <div key={contractData[contractType].contractColor} className={gridStyle}>
                      {contractData[contractType].contractList.map(
                          ({ name, energyRequire, benefits}, key) => {
                            return (
                                <div key={name} className="scale-75 md:scale-100">
                                  <Contract key={name} name={name} energyRequire={energyRequire} benefits={benefits}/>
                                </div>
                            );
                          }
                      )}
                    </div>
                  </ContainerCard>
              );
            }
        )}
      </div>
  );
}

export default Contracts;
