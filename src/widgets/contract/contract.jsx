import '../../../public/css/test.css'
import React, { useRef } from "react";
import { Element } from "./element.jsx"


export class Contract extends React.Component {

  render() {
    let displayId = 0;
    let energyRequire = (<div className="contract-number">{this.props.energyRequire}</div>);
    const benefitsNumber = Object.keys(this.props.benefits).length;
    const displayOrder = [
      ["contract-middle"],
      ["contract-top", "contract-bottom"],
      ["contract-top", "contract-bottom-left", "contract-bottom-right"]
    ][benefitsNumber - 1]; // select the related display way

    let contractColor = "";
    if (this.props.energyRequire <= 4) contractColor += "contract green"
    else if (this.props.energyRequire <= 7) contractColor += "contract yellow"
    else if (this.props.energyRequire <= 12) contractColor += "contract red"
    else contractColor += "contract purple"

    return (
      <div ref="contract" key={this.props.name} className={contractColor}>
        {energyRequire}
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


export default Contract;
