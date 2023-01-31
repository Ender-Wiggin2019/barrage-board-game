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
import { contractData, projectsTableData } from "@/data";
import { Contract } from "@/widgets/contract";

export function Tables() {
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      {Object.keys(contractData).map(
        (contractType) => {
          return(
            <Card>
              <CardHeader variant="gradient" color={contractData[contractType].contractColor} className="mb-8 p-6">
                <Typography variant="h6" color="white">
                  Green Contract
                </Typography>
              </CardHeader>
              <CardBody className="overflow-x-scroll">
                <div key={contractData[contractType].contractColor} className="grid grid-rows-3 grid-flow-col gap-4 place-content-center">
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
      {/*<Card>*/}
      {/*  <CardHeader variant="gradient" color="green" className="mb-8 p-6">*/}
      {/*    <Typography variant="h6" color="white">*/}
      {/*      Green Contract*/}
      {/*    </Typography>*/}
      {/*  </CardHeader>*/}
      {/*  <CardBody className="overflow-x-scroll">*/}
      {/*    <div className="grid grid-rows-3 grid-flow-col gap-4 place-content-center">*/}
      {/*        {contractData.greenContract.map(*/}
      {/*          ({ name, energyRequire, benefits}, key) => {*/}
      {/*            */}
      {/*            return (*/}
      {/*                  <div className="scale-100">*/}
      {/*                    /!*<Avatar className="clip-avatar" src={img} alt={name} variant="circular" size="xl"/>*!/*/}
      {/*                      <Contract key={name} name={name} energyRequire={energyRequire} benefits={benefits}/>*/}
      {/*                  </div>*/}
      {/*            );*/}
      {/*          }*/}
      {/*        )}*/}
      {/*    </div>*/}
      {/*  </CardBody>*/}
      {/*</Card>*/}
      {/*<Card>*/}
      {/*  <CardHeader variant="gradient" color="yellow" className="mb-8 p-6">*/}
      {/*    <Typography variant="h6" color="white">*/}
      {/*      Green Contract*/}
      {/*    </Typography>*/}
      {/*  </CardHeader>*/}
      {/*  <CardBody className="overflow-x-scroll">*/}
      {/*    <div className="grid grid-rows-3 grid-flow-col gap-4 place-content-center">*/}
      {/*      {contractData.yellowContract.map(*/}
      {/*        ({ img, name, energyRequire, benefits, email, job, online, date }, key) => {*/}
      {/*          // const className = `scale-200 py-30 px-5 ${*/}
      {/*          //   key === authorsTableData.length - 1*/}
      {/*          //     ? ""*/}
      {/*          //     : "border-b border-blue-gray-50"*/}
      {/*          // }`;*/}

      {/*          return (*/}
      {/*            // <tr key={name}>*/}
      {/*            //   <td className={className}>*/}
      {/*            <div className="scale-100">*/}
      {/*              <Tooltip content="Material Tailwind">*/}
      {/*                <Contract key={name} name={name} energyRequire={energyRequire} benefits={benefits}/>*/}
      {/*              </Tooltip>*/}
      {/*              /!*<ReactQuill value={img} />*!/*/}
      {/*              /!*dangerouslySetInnerHTML={{ __html: model.description }}*!/*/}
      {/*            </div>*/}

      {/*            // </td>*/}
      {/*            // </tr>*/}
      {/*          );*/}
      {/*        }*/}
      {/*      )}*/}
      {/*    </div>*/}
      {/*  </CardBody>*/}
      {/*</Card>*/}
      {/*<Card>*/}
      {/*  <CardHeader variant="gradient" color="green" className="mb-8 p-6">*/}
      {/*    <Typography variant="h6" color="white">*/}
      {/*      Green Contract*/}
      {/*    </Typography>*/}
      {/*  </CardHeader>*/}
      {/*  <CardBody className="overflow-x-scroll">*/}
      {/*    <div className="grid grid-rows-3 grid-flow-col gap-4 place-content-center">*/}
      {/*      {contractData.yellowContract.map(*/}
      {/*        ({ img, name, energyRequire, benefits, email, job, online, date }, key) => {*/}
      {/*          // const className = `scale-200 py-30 px-5 ${*/}
      {/*          //   key === authorsTableData.length - 1*/}
      {/*          //     ? ""*/}
      {/*          //     : "border-b border-blue-gray-50"*/}
      {/*          // }`;*/}

      {/*          return (*/}
      {/*            // <tr key={name}>*/}
      {/*            //   <td className={className}>*/}
      {/*            <div className="scale-100">*/}
      {/*              /!*<Avatar className="clip-avatar" src={img} alt={name} variant="circular" size="xl"/>*!/*/}
      {/*              <Contract key={name} name={name} energyRequire={energyRequire} benefits={benefits}/>*/}
      {/*              /!*<ReactQuill value={img} />*!/*/}
      {/*              /!*dangerouslySetInnerHTML={{ __html: model.description }}*!/*/}
      {/*            </div>*/}

      {/*            // </td>*/}
      {/*            // </tr>*/}
      {/*          );*/}
      {/*        }*/}
      {/*      )}*/}
      {/*    </div>*/}
      {/*  </CardBody>*/}
      {/*</Card>*/}
    </div>
  );
}


export default Tables;
