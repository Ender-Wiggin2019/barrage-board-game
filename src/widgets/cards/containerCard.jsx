import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { contractData } from "@/data/index.js";
import { Contract } from "@/widgets/contract/index.js";
import React from "react";

export function ContainerCard({ color, header, children }) {
  return (
    <Card className="rounded-xl border-4 border-solid border-orange-300 bg-black/20">
      <CardHeader
        variant="gradient"
        shadow={false}
        color={color}
        className="mb-4 p-3 text-center"
      >
        <Typography variant="h6" color="white">
          {header}
        </Typography>
      </CardHeader>
      <CardBody className="overflow-x-scroll p-0">{children}</CardBody>
    </Card>
  );
}
