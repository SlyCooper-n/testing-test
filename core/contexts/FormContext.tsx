import { FormContextType } from "@core/types";
import { useRouter } from "next/router";
import { createContext, FormEvent, ReactNode, useState } from "react";
import toast from "react-hot-toast";
import isEmail from "validator/lib/isEmail";

export const FormContext = createContext({} as FormContextType);

// function reducer() {
//   return {};
// }

export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [invalidConfirmPw, setInvalidConfirmPw] = useState(false);
  const router = useRouter();
  // const [invalidInputs, dispatch] = useReducer(reducer, {});

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
    if (!isEmail(email) || password.trim().length < 5) {
      !isEmail(email) && setInvalidEmail(true);

      password.trim().length < 5 && setInvalidPassword(true);

      return false;
    }

    setInvalidEmail(false);
    setInvalidPassword(false);

    if (confirmPassword.trim() !== password.trim()) {
      setInvalidConfirmPw(true);
      return false;
    }

    setInvalidConfirmPw(false);

    return true;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const isValid = handleValidation();

    if (!isValid) {
      return;
    }

    setEmail("");
    setPassword("");
    setConfirmPassword("");

    toast.success("Email sent successfully");

    router.push("/home");
  }

  return (
    <FormContext.Provider
      value={{
        formValues: {
          email,
          setEmail,
          password,
          setPassword,
          confirmPassword,
          setConfirmPassword,
        },
        invalid: {
          email: invalidEmail,
          password: invalidPassword,
          confirmPw: invalidConfirmPw,
        },
        handle: {
          invalidEmail: handleInvalidEmail,
          invalidPassword: handleInvalidPassword,
          invalidConfirmPw: handleInvalidConfirmPw,
          validation: handleValidation,
          submit: handleSubmit,
        },
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
