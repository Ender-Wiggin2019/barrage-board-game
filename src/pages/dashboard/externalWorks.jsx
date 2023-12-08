import { contractData, externalData } from "@/data";
import { Contract, ExternalWork } from "@/widgets/contract";
import React from "react";
import PropTypes from "prop-types";
// import ExternalWork from "@/widgets/contract/external-work.jsx";
import Image from "../../../public/img/bg.jpg";
import { Translation } from "react-i18next";
import { ContainerCard } from "@/widgets/cards/containerCard.jsx";

export function ExternalWorks() {
  return (
    <div className="mt-8 mb-8 flex flex-col gap-10">
      {Object.keys(externalData).map((externalType) => {
        const gridStyle =
          "grid grid-cols-3 md:grid-cols-5 grid-flow-row gap-5 place-content-center";
        return (
          <ContainerCard
            color={externalData[externalType].externalColor}
            header={externalData[externalType].externalType}
          >
            <div
              key={externalData[externalType].externalColor}
              className={gridStyle}
            >
              {externalData[externalType].externalList.map(
                ({ name, machineRequire, benefits }, key) => {
                  return (
                    <div key={name} className="scale-75 md:scale-100">
                      {/*<Avatar className="clip-avatar" src={img} alt={name} variant="circular" size="xl"/>*/}
                      <ExternalWork
                        key={name}
                        name={name}
                        machineRequire={machineRequire}
                        benefits={benefits}
                      />
                    </div>
                  );
                },
              )}
            </div>
          </ContainerCard>
        );
      })}
    </div>
  );
}
export default ExternalWorks;
