import React from "react";
import { Flex } from "components/styles/flex";
import {
  Breadcrumbs,
  Crumb,
  CrumbLink,
} from "components/breadcrumb/breadcrumb.styled";

import { HouseIcon } from "components/icons/breadcrumb/house-icon";
import { SettingsIcon } from "components/icons/sidebar/settings-icon";
import { Text, Card, Button } from "@nextui-org/react";
import Link from "next/link";
import { AccountCard } from "components/settings/accountCard";
import KeyIcon from "@mui/icons-material/Key";
import PersonIcon from "@mui/icons-material/Person";

const ChangePassword = () => {
  return (
    <Flex
      css={{
        mt: "$5",
        px: "$6",
        "@sm": {
          mt: "$10",
          px: "$16",
        },
      }}
      justify={"center"}
      direction={"column"}
    >
      <Breadcrumbs>
        <Crumb>
          <HouseIcon />
          <Link href={"/"}>
            <CrumbLink>Home</CrumbLink>
          </Link>
          <Text>/</Text>
        </Crumb>

        <Crumb>
          <SettingsIcon />
          <Link href={"/settings"}>
            <CrumbLink>Setting</CrumbLink>
          </Link>
          <Text>/</Text>
        </Crumb>

        <Crumb>
          <PersonIcon style={{ color: "#757575" }} />
          <CrumbLink>Account</CrumbLink>
        </Crumb>
      </Breadcrumbs>

      <Text h3>Change Password</Text>
      <Text h7 style={{ marginBottom: "20px" }}>
        Choose an account to make changes.
      </Text>
      <AccountCard
        title="jose@gmail.com"
        avatarPath="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        path="/settings/change-password/new-password"
      />
      <AccountCard
        title="boston@gmail.com"
        avatarPath="https://i.pravatar.cc/150?u=a04258a2462d826712d"
        path="/settings/change-password/new-password"
      />
    </Flex>
  );
};

export default ChangePassword;
