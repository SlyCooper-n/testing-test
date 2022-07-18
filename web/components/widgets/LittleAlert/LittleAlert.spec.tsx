import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LittleAlert } from "./LittleAlert";

describe("Little Alert", () => {
  it("renders correctly", () => {
    render(<LittleAlert message="It is working" />);

    expect(screen.getByText("It is working")).toBeInTheDocument();
  });
});
