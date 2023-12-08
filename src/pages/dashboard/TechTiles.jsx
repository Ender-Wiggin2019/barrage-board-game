import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Tooltip,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { techTilesData } from "@/data";
import React from "react";
import { Translation } from "react-i18next";

export function TechTiles() {
  const techTilesData1 = [...techTilesData].sort((a, b) =>
    a.tier < b.tier ? -1 : 1,
  );
  const colorMap = {
    "S+": { color: "red-500", hover: "red-700" },
    "A~S": { color: "orange-800", hover: "orange-900" },
    "A+": { color: "orange-500", hover: "orange-700" },
    A: { color: "amber-500", hover: "amber-700" },
    "A-": { color: "yellow-600", hover: "yellow-800" },
    B: { color: "lime-600", hover: "lime-800" },
    "B-": { color: "green-500", hover: "green-700" },
    NA: { color: "gray-500", hover: "gray-700" },
    Base: { color: "gray-600", hover: "gray-900" },
    LWT: { color: "gray-800", hover: "violet-900" },
    Promo: { color: "black", hover: "gray-700" },
  };

  const ageConfig = [
    { name: "Age I", color: "green" },
    { name: "Age II", color: "amber" },
    { name: "Age III", color: "red" },
  ];
  return (
    <div className="mt-8 mb-8 flex flex-col gap-10 ">
      {techTilesData1.map((age, index) => (
        <Card className="bg-opacity-60">
          <CardHeader
            variant="gradient"
            shadow={false}
            color={ageConfig[index].color}
            className="mb-2 p-3 text-center"
          >
            <Translation>
              {(t, { i18n }) => (
                <Typography variant="h6" color="white">
                  {t(ageConfig[index].name)}
                </Typography>
              )}
            </Translation>
          </CardHeader>
          <CardBody className="overflow-x-scroll bg-opacity-40 px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["Name", "Ability", "Tier", "Source"].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-12 text-left sm:px-8"
                    >
                      <Translation>
                        {(t, { i18n }) => (
                          <Typography
                            variant="small"
                            className="text-[11px] font-bold uppercase text-blue-gray-800"
                          >
                            {t(el)}
                          </Typography>
                        )}
                      </Translation>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {age.map(
                  (
                    {
                      id,
                      position,
                      effectDesc,
                      additionalDesc,
                      tier,
                      tierDesc,
                      tierComment,
                      source,
                    },
                    key,
                  ) => {
                    const className = `py-3 px-3 sm:px-4 ${
                      key === techTilesData.length - 1
                        ? "" // TODO
                        : "border-b border-blue-gray-50"
                    }`;

                    return (
                      <tr key={name}>
                        <td className={className}>
                          <div className="flex items-center gap-2">
                            <Tooltip content={tierDesc}>
                              <div
                                key={name}
                                className={
                                  "largeTechTile r" +
                                  position.row +
                                  " c" +
                                  position.col
                                }
                              ></div>
                            </Tooltip>
                          </div>
                        </td>
                        <td className={className + " pr-8 sm:pr-0"}>
                          <div> ... </div>
                        </td>
                        <td className={className + " pr-2 sm:pr-0"}>
                          <Popover>
                            <PopoverHandler>
                              <button
                                className={
                                  "bg-" +
                                  colorMap[tierDesc]["color"] +
                                  " hover:bg-" +
                                  colorMap[tierDesc]["hover"] +
                                  " w-16 rounded-lg py-2 px-3 text-sm font-bold text-white"
                                }
                              >
                                {tierDesc}
                              </button>
                            </PopoverHandler>
                            <PopoverContent>
                              <button
                                className={
                                  "bg-" +
                                  colorMap[tierDesc]["color"] +
                                  " w-16 rounded-lg py-2 px-3 text-sm font-bold text-white"
                                }
                              >
                                {tierDesc}
                              </button>
                              <div className="w-80">{tierComment}</div>
                            </PopoverContent>
                          </Popover>
                        </td>

                        <td className={className}>
                          <div
                            className={
                              "bg-" +
                              colorMap[source]["color"] +
                              " w-16 rounded-lg py-2 px-3 text-center text-sm font-bold text-white"
                            }
                          >
                            {source}
                          </div>
                        </td>
                      </tr>
                    );
                  },
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default TechTiles;
