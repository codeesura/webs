import React from "react";
import {Avatar, AvatarGroup} from "@nextui-org/react";

export default function Networks() {
  return (
    <AvatarGroup       
    isBordered color='secondary' size='md'>
      <Avatar src="/ethereumlogo.png" />
      <Avatar src="/arbitrum.png" />
      <Avatar src="/optimism.png" />
      <Avatar src="/zksync.png" />
      <Avatar src="/scroll.png" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
    </AvatarGroup>
  );
}
