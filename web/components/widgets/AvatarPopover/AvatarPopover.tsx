import * as Popover from "@radix-ui/react-popover";
import Image from "next/image";
import { Faders, Table, UserCircle } from "phosphor-react";

export const AvatarPopover = () => {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <div className="avatar mr-4">
          <div className="rounded-full">
            <Image
              src="https://placeimg.com/50/50/people"
              alt="random avatar image"
              width={50}
              height={50}
            />
          </div>
        </div>
      </Popover.Trigger>

      <Popover.Content asChild sideOffset={20}>
        <ul className="menu menu-compact  w-56 p-2 bg-base-200 rounded-box">
          <li>
            <a tabIndex={0}>
              Account <UserCircle size={24} />
            </a>
          </li>

          <li>
            <a>
              Dashboard <Table size={24} />
            </a>
          </li>

          <li>
            <a>
              Settings <Faders size={24} />
            </a>
          </li>
        </ul>
      </Popover.Content>
    </Popover.Root>
  );
};
