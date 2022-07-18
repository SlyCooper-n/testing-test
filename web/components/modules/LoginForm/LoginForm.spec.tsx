import { FormContextProvider } from "@core/contexts";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { LoginForm } from "./LoginForm";

const MockedLoginForm = () => {
  return (
    <FormContextProvider>
      <LoginForm />
    </FormContextProvider>
  );
};

describe("Login Form", () => {
  beforeEach(() => {
    render(<MockedLoginForm />);
  });

  async function typeIntoInput(
    input: "email" | "password" | "confirmPw",
    value: string
  ) {
    const emailInput = screen.getByRole<HTMLInputElement>("textbox");
    const passwordInput = screen.getByLabelText<HTMLInputElement>("Password");
    const confirmPwInput =
      screen.getByLabelText<HTMLInputElement>(/confirm password/i);

    switch (input) {
      case "email":
        await userEvent.type(emailInput, value);
        return emailInput;
      case "password":
        await userEvent.type(passwordInput, value);
        return passwordInput;
      case "confirmPw":
        await userEvent.type(confirmPwInput, value);
        return confirmPwInput;
    }
  }

  async function clickButton() {
    const submitButton = screen.getByRole<HTMLButtonElement>("button", {
      name: /submit/i,
    });
    await userEvent.click(submitButton);
  }

  it("should initially render empty inputs", () => {
    expect(screen.getByRole<HTMLInputElement>("textbox").value).toBe("");
    expect(screen.getByLabelText<HTMLInputElement>("Password").value).toBe("");
    expect(
      screen.getByLabelText<HTMLInputElement>(/confirm password/i).value
    ).toBe("");
  });

  it("should match both the typed and rendered values", async () => {
    const emailInput = await typeIntoInput("email", "test@email.opa");
    const passwordInput = await typeIntoInput("password", "test#password_opa");
    const confirmPwInput = await typeIntoInput(
      "confirmPw",
      "test#password_opa"
    );

    expect(emailInput.value).toContain("test@email.opa");
    expect(passwordInput.value).toContain("test#password_opa");
    expect(confirmPwInput.value).toContain("test#password_opa");
  });

  it("should submit the form if input fields are filled correctly", async () => {
    await typeIntoInput("email", "valid@email.com");
    await typeIntoInput("password", "passwords_match");
    await typeIntoInput("confirmPw", "passwords_match");
    await clickButton();

    expect(screen.queryByText(/invalid email/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/invalid password/i)).not.toBeInTheDocument();
    expect(
      screen.queryByText(/passwords don't match'/i)
    ).not.toBeInTheDocument();
  });

  describe("handling errors", () => {
    it("should throw error messages on invalid email", async () => {
      expect(screen.queryByText(/invalid email/i)).not.toBeInTheDocument();

      await typeIntoInput("email", "invalid email");

      await clickButton();

      expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
    });

    it("should throw error on invalid password", async () => {
      await typeIntoInput("email", "valid@email.com");
      await typeIntoInput("password", "g");
      await typeIntoInput("confirmPw", "g");
      await clickButton();

      expect(screen.queryByText(/invalid email/i)).not.toBeInTheDocument();
      expect(screen.getByText(/invalid password/i)).toBeInTheDocument();
      expect(
        screen.queryByText(/passwords don't match/i)
      ).not.toBeInTheDocument();
    });

    it("should throw an error if passwords don't match", async () => {
      await typeIntoInput("email", "valid@email.com");
      await typeIntoInput("password", "test#password_opa");
      await typeIntoInput("confirmPw", "test#password_opa2");
      await clickButton();

      expect(screen.getByText(/passwords don't match/i)).toBeInTheDocument();
    });
  });
});
