import PropTypes from "prop-types";
import { Button, IconButton, Avatar, Typography } from "@material-tailwind/react";
import React, { useCallback, useRef } from "react";
import ReactDOM from 'react-dom/client';
import { Contract } from "@/widgets/contract";
import { toPng, toJpeg } from 'html-to-image';
import '../../../public/css/test.css'

export class ContractCreator extends React.Component {
  constructor(props){
    super(props);
    // this.getRefsFromChild = this.getRefsFromChild.bind(this);
    this.state = {
      name: null,
      energyRequire: 0,
      chooseElements: {},
      optionalElements: {
        brownMachine: "",
        whiteMachine: "",
        mixMachine: "",
        purpleMachine: "",
        vp: "",
        money: "",
        energyPro: "X",
        energy: "X",
        water: "",
        waterDrop: "",
        base: "",
        elevator: "",
        conduit: "",
        powerplant: "",

      },
    }
  }

  // getRefsFromChild(childRefs) {
  //   // you can get your requested value here, you can either use state/props/ or whatever you like based on your need case by case
  //   this.setState({
  //     myRequestedRefs: childRefs
  //   });
  //   console.log("myRequestedRefs",this.state.myRequestedRefs); // this should have *info*, *contact* as keys
  // }

  handleClick(elementKey) {
    let eList = this.state.chooseElements;
    if (eList.hasOwnProperty(elementKey)) {
      eList[elementKey] = eList[elementKey] + 1;
    } else {
      if (Object.keys(eList).length === 3) alert("Can only have 3 elements!");
      else eList[elementKey] = 1;
        }
    this.setState({chooseElements: eList});
  }

  reset() {
    this.setState({energyRequire: 0, chooseElements: {}});
  }

  handleEnergy() {
    this.setState({energyRequire: this.state.energyRequire + 1});
  }

  async downloadImg() {
    // const downloadImage = async () => {
    console.log(document.getElementById("domEl"));
      const dataUrl = await toPng(document.getElementById("domEl"));
    // const dataUrl = await toJpeg(document.getElementById("domEl"),  { quality: 0.95 });

    // download image
      const link = document.createElement('a');
      link.download = "contract.png";
      link.href = dataUrl;
      link.click();
    // }
  }

  render() {
    //
    // const downloadImage = async () => {
    //   const dataUrl = await toPng(domEl.current);
    //   console.log(dataUrl);
    //
    //   // download image
    //   const link = document.createElement('a');
    //   link.download = "html-to-img.png";
    //   link.href = dataUrl;
    //   link.click();
    // }

    return (
      <div className="flex flex-col items-center">
        <div id = "enlarge" className="scale-150">
        <div id="domEl" className="flex items-center scale-100">
        {/*<div id = "domEl" className="flex items-center scale-100">*/}
        {/*    <Contract id ="domEl" name="G1" passRefUpward={this.getRefsFromChild} energyRequire={this.state.energyRequire} benefits={this.state.chooseElements} />*/}
          <Contract id ="domEl" energyRequire={this.state.energyRequire} benefits={this.state.chooseElements} />
        </div>
        </div>
        <br/><br/>
        <div className="flex items-center gap-8">
          <Button color="purple" onClick={() => this.handleEnergy()}>Energy</Button>
          <Button onClick={() => this.reset()}>Reset</Button>
          <Button onClick={() => this.downloadImg()}>Download</Button>
        </div>
        <br/>
        <div className="flex items-center">
          <ElementList optionalElements={this.state.optionalElements} onClick={(i) => this.handleClick(i)} />
        </div>
      </div>
  );
  }
}
// class MessageCard extends React.Component {
//
// }

class ElementList extends React.Component { // 所有元素
  renderElement(elementKey, elementValue) {
    return ( // TODO 处理每个单独的unit
      <ElementUnit
        key={elementKey}
        name={elementKey}
        count={elementValue}
        onClick={() => this.props.onClick(elementKey)}
        // onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    let elementList = this.props.optionalElements;
    const elementKeys = Object.keys(elementList);
    return (
      <div className="grid grid-cols-4 gap-4">
      {elementKeys.map((elementKey) => {
        return this.renderElement(elementKey, elementList[elementKey]); // TODO 加上div class，这是一个列表
        // return (<ElementUnit
        //   key={elementKey}
        //   name={elementKey}
        //   onClick={() => this.props.onClick(elementKey)}
        // />)
      })}
      </div>
      // <div className="grid grid-cols-4 gap-4"><ElementUnit name="brownMachine"  onClick={() => this.props.onClick("brownMachine")}/><ElementUnit name="money" onClick={() => this.props.onClick("money")}/></div>
    )
  }
}

// const Button = (props) => {
//   return (
//     <button onClick={() =>
//       props.sign == "+" ? props.updateCount(1) : props.updateCount(-1)}>
//       {props.sign}
//     </button>
//
//   );
// }

class ElementUnit extends React.Component { // 生成元素+数字输入框
  render() {
    const cName = "scale-100 hover:bg-sky-700 " + this.props.name; // TODO 样式调整

    return (
      // <button className={cName} onClick={this.props.onClick}></button>
      <IconButton size="lg"><div className={cName} onClick={this.props.onClick}>{this.props.count}</div></IconButton>
    )
  }
}

export default ContractCreator;
// class ElementUnit extends React.Component { // 生成元素+数字输入框
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 1
//     }
//
//   }
//
//   handleCount(value) {
//     this.setState((prevState) => ({ count: prevState.count + value }));
//   }
//
//   render() {
//     return (
//       <div>
//         <div className={name}></div>
//         Current count: {this.state.count}
//         <hr />
//         <Button sign="+" count={this.state.count} updateCount={this.handleCount.bind(this)} />
//         <Button sign="-" count={this.state.count} updateCount={this.handleCount.bind(this)} />
//       </div>
//     );
//   }
// }




