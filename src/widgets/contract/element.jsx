import PropTypes from "prop-types";
import { Avatar, Typography } from "@material-tailwind/react";
import MessageCard from "../cards/message-card.jsx";
import '../../../public/css/test.css'
import React, { useRef } from "react";
import ProfileInfoCard from "@/widgets/contract/profile-info-card.jsx";


export function Element(props) {
  let elementDiv = (<div></div>);
  if (props.icon.includes("conduit")) {
    elementDiv = (<div className={props.icon}><div className="conduit-number">{props.value}</div></div>);
  } else if (props.icon.includes("energyPro")) {
    const iconName = props.icon.split(' ')[0] + " icon-right-arrow"
    elementDiv = [(<div className={props.icon}>{props.value}</div>), (<div className={iconName}></div>)];
  } else if (props.icon.includes("base")) {
    const iconName = props.icon.split(' ')[0] + " location " + props.value;
    elementDiv = [(<div className={props.icon}></div>), (<div className={iconName}></div>)];
  } else if (props.icon.includes("elevator") || props.icon.includes("powerplant")) {
    elementDiv = (<div className={props.icon}></div>);
  } else {
    elementDiv = (<div className={props.icon}>{props.value}</div>);
  }

  // TODO size can be changed
  return (
    <div className="scale-100">
      {elementDiv}
    </div>
  )
}

Element.defaultProps = {
  icon: null,
  value: 0,
  desc: {},
};

export default Element;
