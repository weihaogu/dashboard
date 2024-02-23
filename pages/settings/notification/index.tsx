import React from "react";
import { Flex } from "../../../components/styles/flex";
import {
  Breadcrumbs,
  Crumb,
  CrumbLink,
} from "../../../components/breadcrumb/breadcrumb.styled";

import { HouseIcon } from "../../../components/icons/breadcrumb/house-icon";
import { SettingsIcon } from "../../../components/icons/sidebar/settings-icon";
import { Text, Card, Button } from "@nextui-org/react";
import Link from "next/link";
import { ToggleCard } from "../../../components/settings/toggleCard";

const Notification = () => {
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
          <CrumbLink>Notification</CrumbLink>
        </Crumb>
      </Breadcrumbs>

      <Text h3>Notification Settings</Text>
      <ToggleCard title="Enable Notifications" />
    </Flex>
  );
};

export default Notification;
