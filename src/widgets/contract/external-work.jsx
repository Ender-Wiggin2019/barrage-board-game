import PropTypes from "prop-types";
import { Avatar, Typography } from "@material-tailwind/react";
import MessageCard from "../cards/message-card.jsx";
import '../../../public/css/test.css'
import React, { useRef } from "react";
import { Element } from "./element.jsx"


export class ExternalWork extends React.Component {

  renderMachine() {
    let displayId = 0;
    const machineRequireNumber = Object.keys(this.props.machineRequire).length;
    const displayOrder = machineRequireNumber === 1 ? ["external-middle"] : ["external-top", "external-bottom"]

    return (
      <div key={this.props.name}>
        {
          Object.keys(this.props.machineRequire).map((element) => {
            const iconName = displayOrder[displayId] + " " + element + "-red";
            console.log(iconName);
            displayId ++;
            return (
              <Element icon={iconName} value={this.props.machineRequire[element]}/>
            );
          })
        }
      </div>
    );
  }
  render() {
    let displayId = 0;
    const benefitsNumber = Object.keys(this.props.benefits).length;
    const displayOrder = [
      ["external-benefit-middle"],
      ["external-benefit-top", "external-benefit-bottom"],
      ["external-benefit-top", "external-benefit-bottom-left", "external-benefit-bottom-right"]
    ][benefitsNumber - 1]; // select the related display way

    const renderMachine = this.renderMachine();

    return (
      <div ref="contract" key={this.props.name} className="contract external">
        {renderMachine}
        {
          Object.keys(this.props.benefits).map((element) => {
            const iconName = displayOrder[displayId] + " " + element;
            displayId ++;
            return (
              <Element icon={iconName} value={this.props.benefits[element]}/>
            );
          })
        }
      </div>
    );
  }
}
export default ExternalWork;
