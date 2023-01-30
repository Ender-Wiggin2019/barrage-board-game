import PropTypes from "prop-types";
import { Avatar, Typography } from "@material-tailwind/react";
import MessageCard from "../cards/message-card.jsx";
import '../../../public/css/test.css'

export function Contract(props) {
  let energyRequire = (<div className="contract-number">{props.energyRequire}</div>);
  const benefitsNumber = Object.keys(props.benefits).length;
  let innerContext = (<div></div>);
  if (benefitsNumber === 1) {
    // const benefitKey1 = Object.keys(props.benefits)[0];
    const benefitValue1 = Object.values(props.benefits)[0];
    const iconName = "contract-middle " + Object.keys(props.benefits)[0];
    innerContext = renderDiv(iconName, benefitValue1);
  } else if (benefitsNumber === 2) {
    const benefitValue1 = Object.values(props.benefits)[0];
    const benefitValue2 = Object.values(props.benefits)[1];
    const iconName1 = "contract-top " + Object.keys(props.benefits)[0];
    const iconName2 = "contract-bottom " + Object.keys(props.benefits)[1];
    console.log(iconName1, iconName2);
    innerContext = [renderDiv(iconName1, benefitValue1), renderDiv(iconName2, benefitValue2)];
  } else if (benefitsNumber >= 3) {
    const benefitValue1 = Object.values(props.benefits)[0];
    const benefitValue2 = Object.values(props.benefits)[1];
    const benefitValue3 = Object.values(props.benefits)[2];
    const iconName1 = "contract-top " + Object.keys(props.benefits)[0];
    const iconName2 = "contract-bottom-left " + Object.keys(props.benefits)[1];
    const iconName3 = "contract-bottom-right " + Object.keys(props.benefits)[2];
    console.log(iconName1, iconName2);
    innerContext = [renderDiv(iconName1, benefitValue1), renderDiv(iconName2, benefitValue2), renderDiv(iconName3, benefitValue3)];
  } else {
    innerContext = (<div></div>);
  }
  let contractColor = "";
  if (props.energyRequire <= 4) contractColor = "contract green"
  else if (props.energyRequire <= 7) contractColor = "contract yellow"
  else if (props.energyRequire <= 10) contractColor = "contract red"
  else contractColor = "contract purple"
  console.log(energyRequire, contractColor)
  return (
    <div key={props.name} className={contractColor}>
      {energyRequire}
      {innerContext}
    </div>
  );
}

function renderDiv(icon, number) {
  if (icon.includes("conduit")) {
    return (<div className={icon}><div className="conduit-number">{number}</div></div>);
  } else if (icon.includes("energyPro")) {
    const iconName = icon.split(' ')[0] + " icon-right-arrow"
    console.log(iconName);
    return [(<div className={icon}>{number}</div>), (<div className={iconName}></div>)];
  } else if (icon.includes("base")) {
    const iconName = icon.split(' ')[0] + " location " + number;
    console.log(iconName);
    return [(<div className={icon}></div>), (<div className={iconName}></div>)];
  } else if (icon.includes("elevator") || icon.includes("powerplant")) {
    return (<div className={icon}></div>);
  } else {
    return (<div className={icon}>{number}</div>);
  }
}

Contract.defaultProps = {
  name: null,
  energyRequire: null,
  benefits: {},
};

Contract.displayName = "/src/widgets/contract/contract.jsx";

export default Contract;
