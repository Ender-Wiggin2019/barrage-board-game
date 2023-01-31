import PropTypes from "prop-types";
import { Avatar, Typography } from "@material-tailwind/react";
import MessageCard from "../cards/message-card.jsx";
import '../../../public/css/test.css'
import React, { useRef } from "react";


export class Contract extends React.Component {
  // onstructor(props){
  //   super(props);
  //   this.refs = React.createRef();
  // }

  // componentDidMount() { // TODO
  //   // pass the requested ref here
  //   this.props.passRefUpward(this);
  //
  // }

  render() {
    let energyRequire = (<div className="contract-number">{this.props.energyRequire}</div>);
    const benefitsNumber = Object.keys(this.props.benefits).length;
    let innerContext = (<div></div>);
    if (benefitsNumber === 1) {
      // const benefitKey1 = Object.keys(this.props.benefits)[0];
      const benefitValue1 = Object.values(this.props.benefits)[0];
      const iconName = "contract-middle " + Object.keys(this.props.benefits)[0];
      innerContext = renderDiv(iconName, benefitValue1);
    } else if (benefitsNumber === 2) {
      const benefitValue1 = Object.values(this.props.benefits)[0];
      const benefitValue2 = Object.values(this.props.benefits)[1];
      const iconName1 = "contract-top " + Object.keys(this.props.benefits)[0];
      const iconName2 = "contract-bottom " + Object.keys(this.props.benefits)[1];
      console.log(iconName1, iconName2);
      innerContext = [renderDiv(iconName1, benefitValue1), renderDiv(iconName2, benefitValue2)];
    } else if (benefitsNumber >= 3) {
      const benefitValue1 = Object.values(this.props.benefits)[0];
      const benefitValue2 = Object.values(this.props.benefits)[1];
      const benefitValue3 = Object.values(this.props.benefits)[2];
      const iconName1 = "contract-top " + Object.keys(this.props.benefits)[0];
      const iconName2 = "contract-bottom-left " + Object.keys(this.props.benefits)[1];
      const iconName3 = "contract-bottom-right " + Object.keys(this.props.benefits)[2];
      console.log(iconName1, iconName2);
      innerContext = [renderDiv(iconName1, benefitValue1), renderDiv(iconName2, benefitValue2), renderDiv(iconName3, benefitValue3)];
    } else {
      innerContext = (<div></div>);
    }
    let contractColor = "";
    if (this.props.energyRequire <= 4) contractColor += "contract green"
    else if (this.props.energyRequire <= 7) contractColor += "contract yellow"
    else if (this.props.energyRequire <= 10) contractColor += "contract red"
    else contractColor += "contract purple"
    console.log(energyRequire, contractColor)
    return (
      <div ref="contract" key={this.props.name} className={contractColor}>
        {energyRequire}
        {innerContext}
      </div>
    );
  }
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

// Contract.defaultProps = {
//   name: null,
//   energyRequire: null,
//   benefits: {},
//   innerRef: null,
// };
//
// Contract.displayName = "/src/widgets/contract/contract.jsx";

export default Contract;
