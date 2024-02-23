import React from "react";
import { Card, Text, Switch } from "@nextui-org/react";

const cardStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "24px",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
  height: "150px",
  borderRadius: "0",
};

export const ToggleCard = ({ title, description, status }) => {
  return (
    <Card css={cardStyle}>
      <div>
        <Text h3>{title}</Text>
        <Text color="#71717A">{description}</Text>
        <Text color="success" weight="bold">
          {status}
        </Text>
      </div>
      <div>
        <Switch defaultSelected size="lg"></Switch>
      </div>
    </Card>
  );
};
