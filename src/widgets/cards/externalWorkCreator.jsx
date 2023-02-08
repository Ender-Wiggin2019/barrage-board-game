import PropTypes from "prop-types";
import {
  Button, IconButton, Avatar, Typography, Select, Option,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem, Card, CardHeader, CardBody
} from "@material-tailwind/react";
import React, { useCallback, useRef } from "react";
import ReactDOM from 'react-dom/client';
import { Contract, ExternalWork } from "@/widgets/contract";
import { toPng, toJpeg } from 'html-to-image';
import '../../../public/css/test.css'
import { Translation, useTranslation, Trans } from 'react-i18next';
import { contractData } from "@/data/index.js";

export class ExternalWorkCreator extends React.Component {
  constructor(props){
    super(props);
    // this.getRefsFromChild = this.getRefsFromChild.bind(this);
    this.state = {
      name: null,
      machineRequire: {},
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
        rotate: "X",
        elevator: "",
        conduit: "",
        powerplant: "",
        fulfillContract: "X",
        fulfillAnyContract: "",
        techTile: "",
      },
      optionalSelectors: {
        base: ["location plain", "location hills", "location mountain", "location plainhills", "location na"],
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

  handleSelect(event, elementKey) {
    console.log(elementKey, event.target.getAttribute('value').split(' ')[1]);

    let eList = this.state.chooseElements;
    if (!eList.hasOwnProperty && Object.keys(eList).length === 3) alert("Can only have 3 elements!");
    else eList[elementKey] = event.target.getAttribute('value').split(' ')[1];
    this.setState({chooseElements: eList});
  }



  reset() {
    this.setState({machineRequire: {}, chooseElements: {}});
  }

  handleMachineRequire(machine) {
    let machineRequire = this.state.machineRequire;
    if (Object.keys(machineRequire).includes(machine)) machineRequire[machine] += 1;
    else machineRequire[machine] = 1;
    console.log(this.state.machineRequire);

    this.setState({energyRequire: machineRequire});
  }

  async downloadImg() {
    // const downloadImage = async () => {
    console.log(document.getElementById("external-creator"));
      const dataUrl = await toPng(document.getElementById("external-creator"));
    // const dataUrl = await toJpeg(document.getElementById("domEl"),  { quality: 0.95 });

    // download image
      const link = document.createElement('a');
      link.download = "external-work.png";
      link.href = dataUrl;
      link.click();
    // }
  }

  render() {
    return (
      <div className="flex flex-col items-center">

        <Card className="rounded-xl border-solid border-4 border-orange-300 bg-opacity-10 w-96">
          <CardBody className="">
            <div id = "enlarge" className="scale-150 flex items-center justify-center">
              <div id="external-creator" className="flex items-center scale-100">
                {/*<div id = "domEl" className="flex items-center scale-100">*/}
                {/*    <Contract id ="domEl" name="G1" passRefUpward={this.getRefsFromChild} energyRequire={this.state.energyRequire} benefits={this.state.chooseElements} />*/}
                <ExternalWork id ="external-creator" machineRequire={this.state.machineRequire} benefits={this.state.chooseElements} />
              </div>
            </div>
            <br/><br/>
            <div className="flex items-center gap-8">
              <Translation>
                {
                  (t, { i18n }) =>
                    <div className="grid grid-cols-3 gap-4 w-96">
                      <div className="grid grid-cols-2 gap-4">
                        <IconButton size="lg" color="red" className="bg-opacity-75" onClick={() => this.handleMachineRequire("brownMachine")}><div className="scale-150 brownMachine-red"></div></IconButton>
                        <IconButton size="lg" color="red" className="bg-opacity-75" onClick={() => this.handleMachineRequire("whiteMachine")}><div className="scale-150 whiteMachine-red"></div></IconButton>
                      </div>
                      <Button color="white" className="bg-opacity-75" onClick={() => this.reset()}>{t('Reset')}</Button>
                      <Button  color="amber" onClick={() => this.downloadImg()}>{t('Download')}</Button>
                    </div>
                }
              </Translation>
            </div>
            <br/>
            <div className="grid grid-rows-2 gap-y-10">
              <ElementList optionalElements={this.state.optionalElements} onClick={(i) => this.handleClick(i)} />
              {Object.keys(this.state.optionalSelectors).map((elementKey) => (
                <ElementSelector elementKey={elementKey} elementValue={this.state.optionalSelectors[elementKey]} onClick={(i) => this.handleSelect(i,elementKey)} />
              ))}
              {/*<ElementList optionalElements={this.state.optionalSelectors}/>*/}
            </div>
          </CardBody>
        </Card>
      </div>
  );
  }
}

class ElementList extends React.Component { // 所有元素
  renderElement(elementKey, elementValue) {
    return ( // TODO 处理每个单独的unit
      <ElementUnit
        key={elementKey}
        elementKey={elementKey}
        elementValue={elementValue}
        onClick={() => this.props.onClick(elementKey)}
        // onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    let elementList = this.props.optionalElements;
    const elementKeys = Object.keys(elementList);
    return (
      <div className="grid grid-cols-4 gap-x-10 gap-y-3">
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

class ElementUnit extends React.Component { // 生成元素+数字输入框

  render() {
    const cName = "scale-100 hover:bg-sky-700 " + this.props.elementKey; // TODO 样式调整
    return (
      <IconButton size="lg" color="white" className="bg-opacity-75"><div className={"scale-125" + cName} onClick={this.props.onClick}>{this.props.elementValue}</div></IconButton>
    )
  }
}


class ElementSelector extends React.Component { // 生成元素+数字输入框

  render() {

    const cName = "scale-100 hover:bg-sky-700 " + this.props.elementKey; // TODO 样式调整
      return (
        <Translation>
          {
            (t, { i18n }) => <Menu>
              <MenuHandler>
                {/*<MenuHandler>*/}
                <IconButton size="lg" color="blue" className="bg-opacity-75"><div className={cName}></div></IconButton>
              </MenuHandler>
              <MenuList>
                {this.props.elementValue.map((value) =>(
                  <MenuItem value={value} onClick={this.props.onClick}><div className={"mr-5 " + value}></div>{t(value)}</MenuItem>

                ))}
              </MenuList>
            </Menu>
          }
        </Translation>
      )
    }
}


export default ExternalWorkCreator;



