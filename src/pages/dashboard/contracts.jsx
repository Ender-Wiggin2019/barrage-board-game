import { contractData } from "@/data";
import { Contract } from "@/widgets/contract";
import React from "react";
import { ContainerCard } from "@/widgets/cards/containerCard.jsx";

export function Contracts() {
  return (
    <div className="my-8 flex flex-col gap-10 ">
      {Object.keys(contractData).map((contractType) => {
        const gridStyle =
          contractData[contractType].contractType === "National Contract"
            ? "grid grid-rows-2 grid-flow-col gap-1 place-content-center"
            : "grid grid-cols-3 md:grid-cols-5  grid-flow-row gap-5 place-content-center";
        return (
          <ContainerCard
            color={contractData[contractType].contractColor}
            header={contractData[contractType].contractType}
          >
            <div
              key={contractData[contractType].contractColor}
              className={gridStyle}
            >
              {contractData[contractType].contractList.map(
                ({ name, energyRequire, benefits }, key) => {
                  return (
                    <div key={name} className="scale-75 md:scale-100">
                      <Contract
                        key={name}
                        name={name}
                        energyRequire={energyRequire}
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

export default Contracts;
