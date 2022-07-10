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

  it("should throw error messages on invalid email", async () => {
    render(<LoginForm />);

    const emailInput = screen.getByRole<HTMLInputElement>("textbox");
    const submitButton = screen.getByRole<HTMLButtonElement>("button", {
      name: /submit/i,
    });

    expect(screen.queryByText(/invalid email/i)).not.toBeInTheDocument();

    await userEvent.type(emailInput, "invalid email");
    await userEvent.click(submitButton);

    expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
  });

  it("should throw error on invalid password", async () => {
    const { debug } = render(<LoginForm />);

    const emailInput = screen.getByRole<HTMLInputElement>("textbox");
    const passwordInput = screen.getByLabelText<HTMLInputElement>("Password");
    const confirmPwInput =
      screen.getByLabelText<HTMLInputElement>(/confirm password/i);
    const submitButton = screen.getByRole<HTMLButtonElement>("button", {
      name: /submit/i,
    });

    await userEvent.type(emailInput, "valid@email.com");
    await userEvent.type(passwordInput, "g");
    await userEvent.type(confirmPwInput, "g");
    await userEvent.click(submitButton);

    debug();

    expect(screen.queryByText(/invalid email/i)).not.toBeInTheDocument();
    expect(screen.getByText(/invalid password/i)).toBeInTheDocument();
  });

  it("should throw an error if passwords don't match", async () => {
    render(<LoginForm />);

    const emailInput = screen.getByRole<HTMLInputElement>("textbox");
    const passwordInput = screen.getByLabelText<HTMLInputElement>("Password");
    const confirmPwInput =
      screen.getByLabelText<HTMLInputElement>(/confirm password/i);
    const submitButton = screen.getByRole<HTMLButtonElement>("button", {
      name: /submit/i,
    });

    await userEvent.type(emailInput, "valid@email.com");
    await userEvent.type(passwordInput, "test#password_opa");
    await userEvent.type(confirmPwInput, "test#password_opa2");
    await userEvent.click(submitButton);

    expect(screen.getByText(/passwords don't match/i)).toBeInTheDocument();
  });

  it("should submit the form if input fields are filled correctly", async () => {
    render(<LoginForm />);

    const emailInput = screen.getByRole<HTMLInputElement>("textbox");
    const passwordInput = screen.getByLabelText<HTMLInputElement>("Password");
    const confirmPwInput =
      screen.getByLabelText<HTMLInputElement>(/confirm password/i);
    const submitButton = screen.getByRole<HTMLButtonElement>("button", {
      name: /submit/i,
    });

    await userEvent.type(emailInput, "valid@email.com");
    await userEvent.type(passwordInput, "passwords_match");
    await userEvent.type(confirmPwInput, "passwords_match");
    await userEvent.click(submitButton);

    expect(await screen.findByText(/logged in/i)).toBeInTheDocument();
  });
});
