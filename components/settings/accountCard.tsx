import React from "react";
import { Card, Text, Button, Avatar } from "@nextui-org/react";
import Link from "next/link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Define the styles object
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

export const AccountCard = ({ title, description, avatarPath, path }) => {
  const CustomCard = React.forwardRef(({ onClick, href }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        <Card css={cardStyle}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <Avatar src={avatarPath} size="lg" />
            </div>
            <div style={{ marginLeft: "16px" }}>
              <Text h5 style={{ marginBottom: "0px" }}>
                {title}
              </Text>
            </div>
          </div>
          <div>
            <ArrowForwardIosIcon />
          </div>
        </Card>
      </a>
    );
  });
  return (
    <Link href={path}>
      <CustomCard />
    </Link>
  );
};
