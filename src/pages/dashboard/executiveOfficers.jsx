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
import { projectsTableData, xoData } from "@/data";
import { Translation, useTranslation, Trans } from 'react-i18next';


export function ExecutiveOfficers() {
  const xoData1 = [...xoData].sort((a, b) => (a.tier < b.tier ? -1 : 1));
  const colorMap = {
    "S+" : { color: "bg-red-500", hover: "bg-red-900", text: "bg-red-500"},
    "A~S" : { color: "bg-orange-800", hover: "bg-orange-900", text: "bg-orange-800"},
    "A+" : { color: "bg-orange-500", hover: "bg-orange-900", text: "bg-orange-500"},
    "A" : { color: "bg-amber-500", hover: "bg-amber-900", text: "bg-amber-500"},
    "A-" : { color: "bg-yellow-600", hover: "bg-yellow-900", text: "bg-yellow-600"},
    "B" : { color: "bg-lime-600", hover: "bg-lime-900", text: "bg-lime-600"},
    "B-" : { color: "bg-green-500", hover: "bg-green-900", text: "bg-green-500"},
    "NA" : { color: "bg-gray-500", hover: "bg-gray-900", text: "bg-gray-500"},
    "Base" : {color: "bg-gray-600", hover: "bg-gray-900",text: "bg-gray-600"},
    "LWT" : {color: "bg-gray-800", hover: "bg-violet-900",text: "bg-gray-800"},
    "Promo" : {color: "bg-black", hover: "bg-gray-900",text: "bg-black"},
  }
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card className="bg-opacity-60">
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Translation>
            {
              (t, { i18n }) => <Typography variant="h6" color="white">
                {t('Executive Officers')}
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
            {xoData1.map(
              ({ id, name, startMachine, effectType, avatarDesc, effectDesc, additionalDesc, tier, tierDesc, tierComment, source }, key) => {
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
                          <div key={name} className={"scale-125 shadow-sm w-15 h-15 p-1 rounded-full ring-2 ring-amber-400 hover:ring-amber-100 dark:ring-amber-500 xo-avatar xo-" + id}></div>
                        {/*</div>*/}
                        </Tooltip>
                        <div>
                          <Translation>
                            {
                              (t, { i18n }) => <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-semibold"
                              >
                                {t(name)}
                              </Typography>
                            }
                          </Translation>
                          {/*<Typography className="text-xs font-normal text-blue-gray-500">*/}
                          {/*  {email}*/}
                          {/*</Typography>*/}
                          {Object.keys(startMachine).map(
                            (machine) => (
                              <div key={name + machine} className={"scale-125 " + machine}>{startMachine[machine]}</div>
                            ))
                          }
                        </div>
                      </div>
                    </td>
                    <td className={className + " pr-8 sm:pr-0"}>
                      {/*<Typography className="text-xs font-semibold text-blue-gray-600">*/}
                      {/*  {job[0]}*/}
                      {/*</Typography>*/}
                      {/*<Typography className="text-xs font-normal text-blue-gray-500">*/}
                      {/*  {job[1]}*/}
                      {/*</Typography>*/}
                      <Translation>
                        {
                          (t, { i18n }) =>
                            <Popover>
                              <PopoverHandler>
                                <div className={"scale-100 sm:scale-125 shadow-sm w-15 h-15 p-1 rounded-md ring-2 ring-amber-400 hover:ring-amber-100 dark:ring-amber-500 "+ effectType + " xo-" + id}></div>
                              </PopoverHandler>
                              <PopoverContent className="w-96">

                                {/*<div className="align-middle xo-card xo-1"></div>*/}

                                <h5 className="font-bold text-blue-gray-800">{t("Effect Description")}</h5>
                                <div>{t(effectDesc)}</div>
                                <br/>
                                {/*<div>This is a very beautiful popover, show some love.</div>*/}
                                {Object.keys(additionalDesc).length > 0 ?
                                  Object.keys(additionalDesc).map(
                                    (descTitle) => (
                                      <div>
                                        <h6 className="font-bold text-gray-600">{t(descTitle)}</h6>
                                        <div className="text-gray-500">{t(additionalDesc[descTitle])}</div>
                                      </div>
                                    )) : ""
                                }

                              </PopoverContent>
                            </Popover>
                        }
                      </Translation>
                      {/*<Popover>*/}
                      {/*  <PopoverHandler>*/}
                      {/*    <div className={"scale-100 sm:scale-125 shadow-sm w-15 h-15 p-1 rounded-md ring-2 ring-amber-400 hover:ring-amber-100 dark:ring-amber-500 "+ effectType + " xo-" + id}></div>*/}
                      {/*  </PopoverHandler>*/}
                      {/*  <PopoverContent className="w-96">*/}

                      {/*    /!*<div className="align-middle xo-card xo-1"></div>*!/*/}
                      {/*    */}
                      {/*    <h5 className="font-bold">Effect Description</h5>*/}
                      {/*    <div>{effectDesc}</div>*/}
                      {/*    /!*<div>This is a very beautiful popover, show some love.</div>*!/*/}
                      {/*    {Object.keys(additionalDesc).length > 0 ?*/}
                      {/*      Object.keys(additionalDesc).map(*/}
                      {/*      (descTitle) => (*/}
                      {/*        <div>*/}
                      {/*        <h6 className="font-bold text-gray-600">{descTitle}</h6>*/}
                      {/*        <div className="text-gray-500">{additionalDesc[descTitle]}</div>*/}
                      {/*        </div>*/}
                      {/*      )) : ""*/}
                      {/*    }*/}

                      {/*  </PopoverContent>*/}
                      {/*</Popover>*/}


                    </td>
                    <td className={className + " pr-2 sm:pr-0"}>
                      <Translation>
                        {
                          (t, { i18n }) =>
                            <Popover>
                              <PopoverHandler>
                                <button className={ colorMap[tierDesc]["color"] + " hover:" + colorMap[tierDesc]["hover"] + " w-16 text-white font-bold text-sm py-2 px-3 rounded-lg"}>
                                  {tierDesc}
                                </button>
                              </PopoverHandler>
                              <PopoverContent>

                                {/*<div className="align-middle xo-card xo-1"></div>*/}
                                <button className={ colorMap[tierDesc]["color"]  + " w-16 text-white font-bold text-sm py-2 px-3 rounded-lg"}>{tierDesc}</button>
                                {/*<h5 className="font-bold">TierComment</h5>*/}
                                {/*<div className={"text-" + colorMap[tierDesc]["color"]}>{tierComment}</div>*/}
                                <div className="w-80">{t(tierComment)}</div>


                              </PopoverContent>
                            </Popover>
                        }
                      </Translation>
                    </td>

                    <td className={className}>
                      {console.log(colorMap[source]["color"] + " w-16 text-center text-white font-bold text-sm py-2 px-3 rounded-lg")}
                      <div className={colorMap[source]["color"] + " w-16 text-center text-white font-bold text-sm py-2 px-3 rounded-lg"}>
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

    </div>
  );
}

export default ExecutiveOfficers;
