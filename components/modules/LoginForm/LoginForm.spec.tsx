import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginForm } from "./LoginForm";

describe("Login Form", () => {
  it("should initially render empty inputs", () => {
    render(<LoginForm />);

    const emailInput = screen.getByRole<HTMLInputElement>("textbox");
    const passwordInput = screen.getByLabelText<HTMLInputElement>("Password");
    const confirmPwInput =
      screen.getByLabelText<HTMLInputElement>(/confirm password/i);

    expect(emailInput.value).toBe("");
    expect(passwordInput.value).toBe("");
    expect(confirmPwInput.value).toBe("");
  });

  it("should match both the typed and rendered values", async () => {
    render(<LoginForm />);

    const emailInput = screen.getByRole<HTMLInputElement>("textbox");
    const passwordInput = screen.getByLabelText<HTMLInputElement>("Password");
    const confirmPwInput =
      screen.getByLabelText<HTMLInputElement>(/confirm password/i);

    await userEvent.type(emailInput, "test@email.opa");
    await userEvent.type(passwordInput, "test#password_opa");
    await userEvent.type(confirmPwInput, "test#password_opa");

    expect(emailInput.value).toContain("test@email.opa");
    expect(passwordInput.value).toContain("test#password_opa");
    expect(confirmPwInput.value).toContain("test#password_opa");
  });
});
