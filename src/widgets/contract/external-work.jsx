import PropTypes from "prop-types";
import { Avatar, Typography } from "@material-tailwind/react";
import '../../../public/css/test.css'
import React, { useRef } from "react";
import { Element } from "./element.jsx"
import { render } from "react-dom";


export class ExternalWork extends React.Component {

  // TODO 在renderBenefits中处理建筑的摆放问题
  renderMachine() {
    let displayId = 0;
    const machineRequireNumber = Object.keys(this.props.machineRequire).length;
    const displayOrder = machineRequireNumber === 1 ? ["external-middle"] : ["external-top", "external-bottom"]

    return (
      <div key={this.props.name}>
        {
          Object.keys(this.props.machineRequire).map((element) => {
            const iconName = displayOrder[displayId] + " " + element + "-red";
            displayId ++;
            return (
              <Element icon={iconName} value={this.props.machineRequire[element]}/>
            );
          })
        }
      </div>
    );
  }

  renderBenefits() {
    let displayId = 0;
    // const benefitsNumber = Object.keys(this.props.benefits).length;
    let benefitKeys = Object.keys(this.props.benefits); // array of all elements
    let benefitKeysForRender = [];
    benefitKeys.forEach((benefit, index) => {
      if (benefit.includes("elevator") || benefit.includes("powerplant")) {
        for (let i = 1; i < this.props.benefits[benefit]; i ++ ) {
          benefitKeysForRender.push(benefit);
        }
      }
      benefitKeysForRender.push(benefit);
    })


    // can only have 3 elements
    benefitKeysForRender = benefitKeysForRender.length > 3 ? benefitKeysForRender.slice(0, 3) : benefitKeysForRender;
    const benefitsNumber = benefitKeysForRender.length;
    const displayOrder = [
      ["external-benefit-middle"],
      ["external-benefit-top", "external-benefit-bottom"],
      ["external-benefit-top", "external-benefit-bottom-left", "external-benefit-bottom-right"]
    ][benefitsNumber - 1]; // select the related display way


    return (
      <div key={this.props.name}>
        {
          benefitKeysForRender.map((element) => {
            let iconName = "";
            const scale =
              benefitsNumber > 1 && (element.includes("base") || element.includes("conduit") || element.includes("elevator") || element.includes("powerplant"))
                ? "scale-75" : "scale-90";
            iconName = iconName + displayOrder[displayId] + " " + element;
            displayId ++;
            return (
              <Element icon={iconName} scale={scale} value={this.props.benefits[element]}/>
            );
          })
        }
      </div>
    );
  }

  render() {

    return (
      <div key={this.props.name} className="scale-125 contract external">
        {this.renderMachine()}
        {this.renderBenefits()}
      </div>
    );
  }
}
export default ExternalWork;
