import { InputBoxWithLabel, LittleAlert } from "@components/widgets";
import { useFormLogin } from "@core/hooks";

export const LoginForm = () => {
  const { formValues, invalid, handle } = useFormLogin();

  return (
    <>
      <div className="card w-[90%] max-w-lg pt-4 bg-primary text-primary-content">
        <h1 className="card-title self-center uppercase">Login form</h1>

        <form className="card-body w-full" onSubmit={handle.submit}>
          <InputBoxWithLabel
            label="Email address"
            labelFor="email"
            required
            type="email"
            value={formValues.email}
            onChange={(e) => formValues.setEmail(e.target.value)}
            invalidValue={invalid.email}
            onInvalid={handle.invalidEmail}
          />
          {invalid.email && <LittleAlert message="Invalid email!" />}

          <InputBoxWithLabel
            label="Password"
            labelFor="password"
            type="password"
            required
            value={formValues.password}
            onChange={(e) => formValues.setPassword(e.target.value)}
            invalidValue={invalid.password}
            onInvalid={handle.invalidPassword}
          />
          {invalid.password && (
            <LittleAlert message="Invalid password! It must contain at least 5 characters." />
          )}

          <InputBoxWithLabel
            label="Confirm password"
            labelFor="confirm-pw"
            type="password"
            required
            value={formValues.confirmPassword}
            onChange={(e) => formValues.setConfirmPassword(e.target.value)}
            invalidValue={invalid.confirmPw}
            onInvalid={handle.invalidConfirmPw}
          />
          {invalid.confirmPw && (
            <LittleAlert message="Passwords don't match!" />
          )}

          <button type="submit" className="btn btn-secondary mt-4">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
