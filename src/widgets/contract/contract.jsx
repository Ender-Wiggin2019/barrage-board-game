import "../../../public/css/test.css";
import React, { useRef } from "react";
import { Element } from "./element.jsx";

export class Contract extends React.Component {
  render() {
    let displayId = 0;

    let benefitKeys = Object.keys(this.props.benefits); // array of all elements
    let benefitKeysForRender = [];
    benefitKeys.forEach((benefit, index) => {
      if (
        benefit.includes("elevator") ||
        benefit.includes("powerplant") ||
        benefit.includes("fulfillAnyContract") ||
        benefit.includes("techTile")
      ) {
        for (let i = 1; i < this.props.benefits[benefit]; i++) {
          benefitKeysForRender.push(benefit);
        }
      }
      benefitKeysForRender.push(benefit);
    });

    // can only have 3 elements
    benefitKeysForRender =
      benefitKeysForRender.length > 3
        ? benefitKeysForRender.slice(0, 3)
        : benefitKeysForRender;
    const benefitsNumber = benefitKeysForRender.length;

    let energyRequire = (
      <div className="contract-number">{this.props.energyRequire}</div>
    );
    const displayOrder = [
      ["contract-middle"],
      ["contract-top", "contract-bottom"],
      ["contract-top", "contract-bottom-left", "contract-bottom-right"],
    ][benefitsNumber - 1]; // select the related display way

    let contractColor = "";
    if (this.props.energyRequire <= 4) contractColor += "contract green";
    else if (this.props.energyRequire <= 7) contractColor += "contract yellow";
    else if (this.props.energyRequire <= 12) contractColor += "contract red";
    else contractColor += "contract purple";

    return (
      <div ref="contract" key={this.props.name} className={contractColor}>
        {energyRequire}
        {benefitKeysForRender.map((element, index) => {
          const iconName = displayOrder[displayId] + " " + element;
          const scale =
            benefitsNumber > 1 &&
            (element.includes("base") ||
              element.includes("conduit") ||
              element.includes("elevator") ||
              element.includes("powerplant"))
              ? "scale-75"
              : "scale-90";
          displayId++;
          return (
            <Element
              key={'element-'+index}
              icon={iconName}
              scale={scale}
              value={this.props.benefits[element]}
            />
          );
        })}
      </div>
    );
  }
}

export default Contract;
