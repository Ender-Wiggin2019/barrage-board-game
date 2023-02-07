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
  Button,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import InputNumber from 'rc-input-number';
import { ProfileInfoCard, ContractCreator } from "@/widgets/cards";
import { useTranslation, Trans } from 'react-i18next';
import { platformSettingsData, conversationsData, projectsData } from "@/data";
import { Contract } from "@/widgets/contract";

export function CreateInterface() {
  return (
    <>
      <div className="p-20 mt-12 mb-8">
        <Trans><ContractCreator/></Trans>
      </div>

    </>
  );
}


export default CreateInterface;
