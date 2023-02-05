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

export function Profile() {
  const xoData1 = [...xoData].sort((a, b) => (a.tier < b.tier ? -1 : 1));
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
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card className="bg-opacity-60">
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Executive Officers
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2 bg-opacity-40">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
            <tr>
              {["Name", "Ability", "Tier", "Source", ].map((el) => (
                <th
                  key={el}
                  className="border-b border-blue-gray-50 py-3 px-8 text-left"
                >
                  <Typography
                    variant="small"
                    className="text-[11px] font-bold uppercase text-blue-gray-800"
                  >
                    {el}
                  </Typography>
                </th>
              ))}
            </tr>
            </thead>
            <tbody>
            {xoData1.map(
              ({ id, name, startMachine, effectType, avatarDesc, effectDesc, additionalDesc, tier, tierDesc, tierComment, source }, key) => {
                const className = `py-3 px-4 ${
                  key === xoData.length - 1
                    ? "border-b border-blue-gray-50" // TODO
                    : "border-b border-blue-gray-50"
                }`;

                return (
                  <tr key={name}>
                    <td className={className}>
                      <div className="flex items-center gap-2">
                        {/*<Avatar src={img} alt={name} size="sm" />*/}
                        {/*<img className="rounded-full xo-avatar" src={img}></img>*/}
                        {/*<div className="shadow-sm border-2 rounded-full m-1">*/}
                        <Tooltip content={name}>
                          <div key={name} className={"scale-125 shadow-sm w-15 h-15 p-1 rounded-full ring-2 ring-amber-400 hover:ring-amber-100 dark:ring-amber-500 xo-avatar xo-" + id}></div>
                        {/*</div>*/}
                        </Tooltip>
                        <div>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-semibold"
                          >
                            {name}
                          </Typography>
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
                    <td className={className}>
                      {/*<Typography className="text-xs font-semibold text-blue-gray-600">*/}
                      {/*  {job[0]}*/}
                      {/*</Typography>*/}
                      {/*<Typography className="text-xs font-normal text-blue-gray-500">*/}
                      {/*  {job[1]}*/}
                      {/*</Typography>*/}
                      <Popover>
                        <PopoverHandler>
                          <div className={"shadow-sm w-15 h-15 p-1 rounded-md ring-2 ring-amber-400 hover:ring-amber-100 dark:ring-amber-500 "+ effectType + " xo-" + id}></div>
                        </PopoverHandler>
                        <PopoverContent className="w-auto">

                          {/*<div className="align-middle xo-card xo-1"></div>*/}
                          <h5 className="font-bold">Effect Description</h5>
                          <div>{effectDesc}</div>
                          {/*<div>This is a very beautiful popover, show some love.</div>*/}
                          {Object.keys(additionalDesc).length > 0 ?
                            Object.keys(additionalDesc).map(
                            (descTitle) => (
                              <div>
                              <h6 className="font-bold text-gray-600">{descTitle}</h6>
                              <div className="text-gray-500">{additionalDesc[descTitle]}</div>
                              </div>
                            )) : ""
                          }

                        </PopoverContent>
                      </Popover>


                    </td>
                    <td className={className}>
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

    </div>
  );
}

export default Profile;
