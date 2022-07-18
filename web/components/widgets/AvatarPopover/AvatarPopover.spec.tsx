import { render } from "@testing-library/react";
import { describe, expect } from "vitest";
import { AvatarPopover } from "./AvatarPopover";

describe("Avatar Popover", () => {
  it("should open on click", () => {
    render(<AvatarPopover />);

    expect("Settings").toBeVisible();
  });
});
