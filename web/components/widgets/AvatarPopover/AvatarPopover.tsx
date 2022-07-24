import * as Popover from "@radix-ui/react-popover";
import { AnimatePresence, AnimationProps, motion } from "framer-motion";
import Image from "next/image";
import { Faders, Table, UserCircle } from "phosphor-react";
import { useState } from "react";

export const AvatarPopover = () => {
  const [isVisible, setIsVisible] = useState(false);

  const userOptionsMenuCard: AnimationProps["variants"] = {
    open: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
    },
    closed: {
      opacity: 0,
      x: 60,
      y: -100,
      scale: 0,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <Popover.Root>
      <Popover.Trigger
        onClick={() => {
          if (isVisible) return;
          setIsVisible(true);
        }}
      >
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

      <Popover.Content
        forceMount
        sideOffset={20}
        onInteractOutside={(e) => setIsVisible(false)}
      >
        <AnimatePresence>
          {isVisible && (
            <motion.ul
              initial="closed"
              animate="open"
              exit="exit"
              variants={userOptionsMenuCard}
              className="menu menu-compact w-56 p-2 bg-base-200 rounded-box"
            >
              <li>
                <a tabIndex={1}>
                  Account <UserCircle size={24} />
                </a>
              </li>

              <li>
                <a tabIndex={2}>
                  Dashboard <Table size={24} />
                </a>
              </li>

              <li>
                <a tabIndex={3}>
                  Settings <Faders size={24} />
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </Popover.Content>
    </Popover.Root>
  );
};
