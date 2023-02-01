import PropTypes from "prop-types";
import { Avatar, Typography } from "@material-tailwind/react";
import MessageCard from "../cards/message-card.jsx";
import '../../../public/css/test.css'
import React, { useRef } from "react";
import ProfileInfoCard from "@/widgets/contract/profile-info-card.jsx";


export function Element(props) {
  const className = props.scale + " " + props.icon;
  let elementDiv = (<div></div>);
  if (props.icon.includes("conduit")) {
    elementDiv = (<div className={className}><div className="conduit-number">{props.value}</div></div>);
  } else if (props.icon.includes("base")) {
    const iconName = props.scale + " " + props.icon.split(' ')[0] + " location " + props.value;
    console.log(iconName);
    elementDiv = [(<div className={className}></div>), (<div className={iconName}></div>)];
  } else if (props.icon.includes("elevator") || props.icon.includes("powerplant")) {
    elementDiv = (<div className={className}></div>);
  } else {
    elementDiv = (<div className={className}>{props.value}</div>);
  }

  // TODO size can be changed
  return (
    <div className="scale-100">
      {elementDiv}
    </div>
  )
}

Element.defaultProps = {
  scale: "scale-100",
  icon: null,
  value: 0,
  desc: {},
};

export default Element;
