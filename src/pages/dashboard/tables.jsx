import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import { Contract } from "@/widgets/contract";
// import '../../../public/css/test.css'
import * as PropTypes from "prop-types";
//
// function Contract(props) {
//   let energyRequire = (<div className="contract-number">{props.energyRequire}</div>);
//   const benefitsNumber = Object.keys(props.benefits).length;
//   let innerContext = (<div></div>);
//   if (benefitsNumber === 1) {
//     // const benefitKey1 = Object.keys(props.benefits)[0];
//     const benefitValue1 = Object.values(props.benefits)[0];
//     const iconName = "contract-middle " + Object.keys(props.benefits)[0];
//     innerContext = renderDiv(iconName, benefitValue1);
//   } else if (benefitsNumber === 2) {
//     const benefitValue1 = Object.values(props.benefits)[0];
//     const benefitValue2 = Object.values(props.benefits)[1];
//     const iconName1 = "contract-top " + Object.keys(props.benefits)[0];
//     const iconName2 = "contract-bottom " + Object.keys(props.benefits)[1];
//     console.log(iconName1, iconName2);
//     innerContext = [renderDiv(iconName1, benefitValue1), renderDiv(iconName2, benefitValue2)];
//   } else if (benefitsNumber === 3) {
//     const benefitValue1 = Object.values(props.benefits)[0];
//     const benefitValue2 = Object.values(props.benefits)[1];
//     const benefitValue3 = Object.values(props.benefits)[2];
//     const iconName1 = "contract-top " + Object.keys(props.benefits)[0];
//     const iconName2 = "contract-bottom-left " + Object.keys(props.benefits)[1];
//     const iconName3 = "contract-bottom-right " + Object.keys(props.benefits)[2];
//     console.log(iconName1, iconName2);
//     innerContext = [renderDiv(iconName1, benefitValue1), renderDiv(iconName2, benefitValue2), renderDiv(iconName3, benefitValue3)];
//   } else {
//     innerContext = (<div></div>);
//   }
//   return (
//     <div key={props.name} className="contract-green">
//       {energyRequire}
//       {innerContext}
//     </div>
//   );
// }
//
// function renderDiv(icon, number) {
//   if (icon.includes("conduit")) {
//     return (<div className={icon}><div className="conduit-number">{number}</div></div>);
//   } else if (icon.includes("energyPro")) {
//       const iconName = icon.split(' ')[0] + " icon-right-arrow"
//       console.log(iconName);
//       return [(<div className={icon}>{number}</div>), (<div className={iconName}></div>)];
//   } else if (icon.includes("base")) {
//     const iconName = icon.split(' ')[0] + " location " + number;
//     console.log(iconName);
//     return [(<div className={icon}></div>), (<div className={iconName}></div>)];
//   } else {
//     return (<div className={icon}>{number}</div>);
//   }
// }

export function Tables() {
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="green" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Green Contract
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll">
          <div className="grid grid-rows-3 grid-flow-col gap-4 place-content-center">
              {authorsTableData.map(
                ({ img, name, energyRequire, benefits, email, job, online, date }, key) => {
                  // const className = `scale-200 py-30 px-5 ${
                  //   key === authorsTableData.length - 1
                  //     ? ""
                  //     : "border-b border-blue-gray-50"
                  // }`;

                  return (
                    // <tr key={name}>
                    //   <td className={className}>
                        <div className="scale-100">
                          {/*<Avatar className="clip-avatar" src={img} alt={name} variant="circular" size="xl"/>*/}
                            <Contract key={name} name={name} energyRequire={energyRequire} benefits={benefits}/>
                          {/*<ReactQuill value={img} />*/}
                          {/*dangerouslySetInnerHTML={{ __html: model.description }}*/}
                        </div>

                      // </td>
                    // </tr>
                  );
                }
              )}
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Projects Table
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["companies", "members", "budget", "completion", ""].map(
                  (el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {projectsTableData.map(
                ({ img, name, members, budget, completion }, key) => {
                  const className = `py-3 px-5 ${
                    key === projectsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={name}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar src={img} alt={name} size="sm" />
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {name}
                          </Typography>
                        </div>
                      </td>
                      <td className={className}>
                        {members.map(({ img, name }, key) => (
                          <Tooltip key={name} content={name}>
                            <Avatar
                              src={img}
                              alt={name}
                              size="xs"
                              variant="circular"
                              className={`cursor-pointer border-2 border-white ${
                                key === 0 ? "" : "-ml-2.5"
                              }`}
                            />
                          </Tooltip>
                        ))}
                      </td>
                      <td className={className}>
                        <Typography
                          variant="small"
                          className="text-xs font-medium text-blue-gray-600"
                        >
                          {budget}
                        </Typography>
                      </td>
                      <td className={className}>
                        <div className="w-10/12">
                          <Typography
                            variant="small"
                            className="mb-1 block text-xs font-medium text-blue-gray-600"
                          >
                            {completion}%
                          </Typography>
                          <Progress
                            value={completion}
                            variant="gradient"
                            color={completion === 100 ? "green" : "blue"}
                            className="h-1"
                          />
                        </div>
                      </td>
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          <EllipsisVerticalIcon
                            strokeWidth={2}
                            className="h-5 w-5 text-inherit"
                          />
                        </Typography>
                      </td>
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


export default Tables;
