import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { projectsTableData, xoData, techTilesData, contractData } from "@/data";
import { Contract } from "@/widgets/contract/index.js";
import React from "react";
import { Translation } from "react-i18next";

export function TechTiles() {
  const techTilesData1 = [...techTilesData].sort((a, b) => (a.tier < b.tier ? -1 : 1));
  const colorMap = {
    "S+" : { color: "red-500", hover: "red-700", },
    "A~S" : { color: "orange-800", hover: "orange-900", },
    "A+" : { color: "orange-500", hover: "orange-700", },
    "A" : { color: "amber-500", hover: "amber-700", },
    "A-" : { color: "yellow-600", hover: "yellow-800", },
    "B" : { color: "lime-600", hover: "lime-800", },
    "B-" : { color: "green-500", hover: "green-700", },
    "NA" : { color: "gray-500", hover: "gray-700", },
    "Base" : {color: "gray-600", hover: "gray-900",},
    "LWT" : {color: "gray-800", hover: "violet-900",},
    "Promo" : {color: "black", hover: "gray-700",},
  }

  const ageConfig = [
    {name: "Age I", color: "green"},
    {name: "Age II", color: "amber"},
    {name: "Age III", color: "red"},
  ]
  return (
    <div className="mt-8 mb-8 flex flex-col gap-10 ">
      {techTilesData1.map(
        (age, index) => (
          <Card className="bg-opacity-60">
            <CardHeader variant="gradient" color={ageConfig[index].color} className="mb-2 p-3">
                <Translation>
                  {
                    (t, { i18n }) => <Typography variant="h6" color="white">
                      {t(ageConfig[index].name)}
                    </Typography>
                  }
                </Translation>
            </CardHeader>
            <CardBody className="overflow-x-scroll px-0 pt-0 pb-2 bg-opacity-40">
              <table className="w-full min-w-[640px] table-auto">
                <thead>
                <tr>
                  {["Name", "Ability", "Tier", "Source", ].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-12 sm:px-8 text-left"
                    >
                      <Translation>
                        {
                          (t, { i18n }) => <Typography
                            variant="small"
                            className="text-[11px] font-bold uppercase text-blue-gray-800"
                          >
                            {t(el)}
                          </Typography>
                        }
                      </Translation>
                    </th>
                  ))}
                </tr>
                </thead>
                <tbody>
                {age.map(
                  ({ id, position, effectDesc, additionalDesc, tier, tierDesc, tierComment, source }, key) => {
                    const className = `py-3 px-3 sm:px-4 ${
                      key === xoData.length - 1
                        ? "" // TODO
                        : "border-b border-blue-gray-50"
                    }`;

                    return (
                      <tr key={name}>
                        <td className={className}>
                          <div className="flex items-center gap-2">
                            {/*<Avatar src={img} alt={name} size="sm" />*/}
                            {/*<img className="rounded-full xo-avatar" src={img}></img>*/}
                            {/*<div className="shadow-sm border-2 rounded-full m-1">*/}
                            <Tooltip content={tierDesc}>
                              {/*<div key={name} className={"scale-125 shadow-sm w-15 h-15 p-1 rounded-full ring-2 ring-amber-400 hover:ring-amber-100 dark:ring-amber-500 xo-avatar xo-" + id}></div>*/}
                              <div key={name} className={"largeTechTile r" + position.row +" c" + position.col}></div>
                              {/*</div>*/}
                            </Tooltip>
                          </div>
                        </td>
                        <td className={className + " pr-8 sm:pr-0"}>
                          {/*<Typography className="text-xs font-semibold text-blue-gray-600">*/}
                          {/*  {job[0]}*/}
                          {/*</Typography>*/}
                          {/*<Typography className="text-xs font-normal text-blue-gray-500">*/}
                          {/*  {job[1]}*/}
                          {/*</Typography>*/}
                          <div> some words...</div>

                        </td>
                        <td className={className + " pr-2 sm:pr-0"}>
                          <Popover>
                            <PopoverHandler>
                              <button className={ "bg-" + colorMap[tierDesc]["color"] + " hover:bg-" + colorMap[tierDesc]["hover"] + " w-16 text-white font-bold text-sm py-2 px-3 rounded-lg"}>
                                {tierDesc}
                              </button>
                            </PopoverHandler>
                            <PopoverContent>

                              {/*<div className="align-middle xo-card xo-1"></div>*/}
                              <button className={ "bg-" + colorMap[tierDesc]["color"]  + " w-16 text-white font-bold text-sm py-2 px-3 rounded-lg"}>{tierDesc}</button>
                              {/*<h5 className="font-bold">TierComment</h5>*/}
                              {/*<div className={"text-" + colorMap[tierDesc]["color"]}>{tierComment}</div>*/}
                              <div className="w-80">{tierComment}</div>


                            </PopoverContent>
                          </Popover>
                        </td>

                        <td className={className}>
                          {console.log("bg-" + colorMap[source]["color"] + " w-16 text-center text-white font-bold text-sm py-2 px-3 rounded-lg")}
                          <div className={ "bg-" + colorMap[source]["color"] + " w-16 text-center text-white font-bold text-sm py-2 px-3 rounded-lg"}>
                            {source}
                          </div>
                        </td>

                        {/*<td className={className}>*/}
                        {/*  <Typography className="text-xs font-semibold text-blue-gray-600">*/}
                        {/*    {date}*/}
                        {/*  </Typography>*/}
                        {/*</td>*/}
                        {/*<td className={className}>*/}
                        {/*  <Typography*/}
                        {/*    as="a"*/}
                        {/*    href="#"*/}
                        {/*    className="text-xs font-semibold text-blue-gray-600"*/}
                        {/*  >*/}
                        {/*    Edit*/}
                        {/*  </Typography>*/}
                        {/*</td>*/}
                      </tr>
                    );
                  }
                )}
                </tbody>
              </table>
            </CardBody>
          </Card>
        ))

      }
    </div>
  );


    // <div className="mt-12 mb-8 flex flex-col gap-12">
    //
    //
    // </div>
}

export default TechTiles;
