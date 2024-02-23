import React from "react";

import { Flex } from "../../../../components/styles/flex";
import {
  Breadcrumbs,
  Crumb,
  CrumbLink,
} from "../../../../components/breadcrumb/breadcrumb.styled";

import { HouseIcon } from "../../../../components/icons/breadcrumb/house-icon";
import { SettingsIcon } from "../../../../components/icons/sidebar/settings-icon";
import { Text, Card, Button, Input } from "@nextui-org/react";
import Link from "next/link";

import KeyIcon from "@mui/icons-material/Key";
import PersonIcon from "@mui/icons-material/Person";

import { EyeFilledIcon } from "components/icons/settings/eyeFilled-icon";
import { EyeSlashFilledIcon } from "components/icons/settings/eyeSlashFilled-icon";
import VisibilityIcon from "@mui/icons-material/Visibility";

const NewPassword = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
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
          <Link href={"/settings/change-password"}>
            <CrumbLink>Account</CrumbLink>
          </Link>
          <Text>/</Text>
        </Crumb>

        <Crumb>
          <KeyIcon style={{ color: "#757575" }} />
          <CrumbLink>Password</CrumbLink>
        </Crumb>
      </Breadcrumbs>

      <Text h3>Change Password</Text>
      <Text h7 style={{ marginBottom: "20px" }}>
        You'll be logged out of all sessions except this one to protect your
        account if anyone is tring to gain access.
      </Text>

      <Input
        labelPlacement="inside"
        label="Current Password"
        variant="bordered"
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              // <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              <VisibilityIcon style={{ color: "#757575" }} />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
      />

      <VisibilityIcon style={{ color: "#757575" }} />
      <Input type="email" variant="flat" label="Email" />
    </Flex>
  );
};

export default NewPassword;
