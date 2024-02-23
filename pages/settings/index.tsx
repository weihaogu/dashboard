import React from "react";
import { Text, Card, Button } from "@nextui-org/react";

import Link from "next/link";
import {
  Breadcrumbs,
  Crumb,
  CrumbLink,
} from "../../components/breadcrumb/breadcrumb.styled";
import { HouseIcon } from "../../components/icons/breadcrumb/house-icon";
import { SettingsIcon } from "../../components/icons/sidebar/settings-icon";
import { Flex } from "../../components/styles/flex";

import { SettingsCard } from "../../components/settings/settingsCard";

const settings = () => {
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
          <CrumbLink>Setting</CrumbLink>
        </Crumb>
      </Breadcrumbs>

      <Text h3>Manage Your Settings</Text>

      <SettingsCard
        title="Notifications"
        description="Enabled"
        buttonText="Edit Notification"
        path="/settings/notification"
      />

      <SettingsCard
        title="Password"
        description="Last changed: 01/22/2024"
        // status="Active"
        buttonText="Change Password"
        path="/settings/change-password"
      />

      <SettingsCard
        title="Two Factor Authentication"
        description="Enabled"
        status="Active"
        buttonText="Enable"
        path="/insights"
      />

      <SettingsCard
        title="Light Mode"
        status="Active"
        buttonText="Activate Dark Mode"
        path="/insights"
      />

      <SettingsCard
        title="Language"
        status="English"
        buttonText="Change Language"
        path="/insights"
      />
    </Flex>
  );
};

export default settings;
