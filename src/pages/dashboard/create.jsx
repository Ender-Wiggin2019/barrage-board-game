import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button, TabsBody, TabPanel
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import InputNumber from 'rc-input-number';
import { ContractCreator, ExternalWorkCreator } from "@/widgets/cards";
import { useTranslation, Trans, Translation } from "react-i18next";
import { Contract } from "@/widgets/contract";
import React from "react";


export function CreateInterface() {

  return (
    <Translation>
      {
        (t, { i18n }) =>
          <Tabs value="contract">
            <TabsHeader>
              <Tab key="contract" value="contract" className="bg-transparent">{t("Contract")}</Tab>
              <Tab key="external" value="external">{t("External Work")}</Tab>
            </TabsHeader>
            <TabsBody>
              {/*{data.map(({ value, desc }) => (*/}
              <TabPanel key="contract" value="contract"><ContractCreator/></TabPanel>
              {/*<TabPanel key="external" value="external"><ContractTable /></TabPanel>*/}

              <TabPanel key="external" value="external"><ExternalWorkCreator /></TabPanel>

            </TabsBody>
          </Tabs>
      }
    </Translation>

  );
}

export default CreateInterface;
