import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import isEmail from "validator/lib/isEmail";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [invalidConfirmPw, setInvalidConfirmPw] = useState(false);
  const [emailSent, setEmailSent] = useState<"sent" | null>(null);

  function handleInvalidEmail(e: FormEvent) {
    e.preventDefault();

    setInvalidEmail(true);
  }

  function handleInvalidPassword(e: FormEvent) {
    e.preventDefault();

    setInvalidPassword(true);
  }

  function handleInvalidConfirmPw(e: FormEvent) {
    e.preventDefault();

    setInvalidConfirmPw(true);
  }

  function handleValidation() {
    isEmail(email) ? setInvalidEmail(false) : setInvalidEmail(true);

    password.trim().length >= 5
      ? setInvalidPassword(false)
      : setInvalidPassword(true);

    confirmPassword.trim() === password.trim()
      ? setInvalidConfirmPw(false)
      : setInvalidConfirmPw(true);

    if (invalidEmail || invalidPassword || invalidConfirmPw) {
      return false;
    }

    return true;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const isValid = handleValidation();

    console.log(isValid);

    if (!isValid) {
      return;
    }

    setEmail("");
    setPassword("");
    setConfirmPassword("");

    setEmailSent("sent");
    toast.success("Email sent successfully");
  }

  return (
    <>
      <div className="card w-[90%] max-w-lg pt-4 bg-primary text-primary-content">
        <h1 className="card-title self-center uppercase">Login form</h1>

        <form className="card-body w-full" onSubmit={handleSubmit}>
          <label htmlFor="email" className="label-text">
            Email address
          </label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onInvalid={handleInvalidEmail}
            className={`input bg-slate-200 text-neutral focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-secondary ${
              invalidEmail &&
              "invalid:ring-2 invalid:ring-offset-2 invalid:ring-offset-error invalid:ring-error"
            }`}
          />
          {invalidEmail && (
            <span className="alert alert-sm bg-error text-error-content">
              Invalid email
            </span>
          )}

          <label htmlFor="password" className="label-text">
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onInvalid={handleInvalidPassword}
            className={`input bg-slate-200 text-neutral focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-secondary ${
              invalidPassword &&
              "invalid:ring-2 invalid:ring-offset-2 invalid:ring-offset-error invalid:ring-error"
            }`}
          />
          {invalidPassword && (
            <span className="alert alert-sm bg-error text-error-content">
              Invalid password! It must contain at least 5 characters.
            </span>
          )}

          <label htmlFor="confirm-pw" className="label-text">
            Confirm password
          </label>
          <input
            type="password"
            id="confirm-pw"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onInvalid={handleInvalidConfirmPw}
            className={`input bg-slate-200 text-neutral focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-secondary ${
              invalidConfirmPw &&
              "invalid:ring-2 invalid:ring-offset-2 invalid:ring-offset-error invalid:ring-error"
            }`}
          />
          {invalidConfirmPw && (
            <span className="alert alert-sm bg-error text-error-content">
              Passwords don&apos;t match!
            </span>
          )}

          <button type="submit" className="btn btn-secondary mt-4">
            Submit
          </button>

          {emailSent === "sent" && (
            <span className="alert alert-sm bg-success text-success-content">
              Logged in!
            </span>
          )}
        </form>
      </div>
    </>
  );
};
